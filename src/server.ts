import { app } from "./app";

import motherLogger from './logger';
const logger = motherLogger.child({file: 'server'});

const port = process.env.PORT || 8081;

app.listen(port, () =>
  logger.info({url: `http://localhost:${port}`,  user: `${process.env.DATABASE_USER}`}, 'Proxy server started')
);