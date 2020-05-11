import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";

import express, { Response as ExResponse, Request as ExRequest, NextFunction } from "express";

import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";

import { Env } from "./models/env.model";
import dotenv from 'dotenv';
import motherLogger from './logger';

const logger = motherLogger.child({file: 'app'});

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// swagger API endpoint
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import('../build/swagger.json'))
  );
});

RegisterRoutes(app);

// global error handling middleware
app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
});

//for all unregistered routes
app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});




//env key values
(async () => {
  const config = dotenv.config();
    
  if (config.error) {
    logger.error(config.error);
    throw config.error;
  }
  
  Object.entries(Env).forEach(([key, value]) => {
    app.set(key, process.env[value]);
  })  
})();

