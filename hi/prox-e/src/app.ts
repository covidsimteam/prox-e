import bodyParser from "body-parser";
import dotenv from 'dotenv';
import express, { NextFunction, Request as ExRequest, Response as ExResponse } from "express";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";
import { RegisterRoutes } from "../build/routes";
import motherLogger from './logger';

import e from 'cors';

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

app.use(e());

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