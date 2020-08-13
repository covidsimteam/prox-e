import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request as ExRequest, Response as ExResponse } from "express";
import session from 'express-session';
import hogan from 'hogan-express';
import Keycloak from 'keycloak-connect';
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";
import { RegisterRoutes } from "../build/routes";
import motherLogger from './logger';

import KcAdminClient from 'keycloak-admin';


const logger = motherLogger.child({file: 'app'});

export const app = express();

// Use body parser to read sent json payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// swagger API endpoint
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('../build/swagger.json')));
});
app.disable('x-powered-by');

app.use(cors());

// Register '.mustache' extension with The Mustache Express
app.set('view engine', 'html');
app.set('views', require('path').join(__dirname, '/view'));
app.engine('html', hogan);

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.
const memoryStore = new session.MemoryStore();
app.use(session({
  secret: 'COVIDiot20',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

// Provide the session store to the Keycloak so that sessions
// can be invalidated from the Keycloak console callback.
//
// Additional configuration is read from keycloak.json file
// installed from the Keycloak web console.

const keycloak = new Keycloak({
  store: memoryStore
});

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/',
}));

const kcAdminClient: KcAdminClient = new KcAdminClient();

(async () => {
  await kcAdminClient.auth({
    username: 'public@nep.work',
    password: 'public',
    grantType: 'password',
    clientId: 'proxe'
  }).catch((reason: any) => logger.debug({ msg: reason }));  
})();


app.get('/login', keycloak.protect(), function (req: any, res: express.Response<any>) {
  res.render('index', {
    result: JSON.stringify(JSON.parse(req.session['keycloak-token']), null, 4),
    event: '1. Authentication\n2. Login'
  });
});

app.get('/service/pub', function (_, res) {
  res.json({message: 'public'});
});

app.get('/service/fed', keycloak.protect('realm:federation'), function (_, res) {
  res.json({message: 'secured'});
});

app.get('/service/proxe', keycloak.protect('realm:kuh'), function (_, res) {
  res.json({message: 'admin'});
});

app.get('/secured/resource', keycloak.enforcer(['resource:view', 'resource:write'], {
  resource_server_id: 'nodejs-apiserver'
}), function (req: any, res: ExResponse) {
  res.render('index', {
    result: JSON.stringify(JSON.parse(req?.session['keycloak-token']), null, 4),
    event: '1. Access granted to Default Resource\n'
  });
});

RegisterRoutes(app);

// global error handling middleware
function errorHandler(err: unknown, req: ExRequest, res: ExResponse, next: NextFunction): ExResponse | void {
  if (err instanceof ValidateError) {
    logger.error(err.fields, `Validation Error for ${req.path}:`);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    logger.error(err, 'Instantiation error');
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  next();
}
app.use(errorHandler);

//for all unregistered routes
function notFoundHandler(_req: ExRequest, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
}
app.use(notFoundHandler);


//env key values
(() => {
  const config = dotenv.config();

  if (config.error) {
    logger.error(config.error, "Could not load .env variables");
    throw config.error;
  }

  // Object.entries(Env).forEach(([key, value]) => {
  //   app.set(key, process.env[value]);
  // })
})();