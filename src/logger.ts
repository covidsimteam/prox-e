import Logger, * as Bunyan from 'bunyan';

const parentLogger: any = {};

if (!parentLogger.log) {
  const log: Logger = Bunyan.createLogger({
    name: 'CST MW & Proxy App',
    level: 'info',
    serializers: Bunyan.stdSerializers,
  });
  
  if ((/true/i).test(process.env.LOG_TO_FILE || 'true')) {
    log.addStream(
      {
        level: 'info',
        path: 'info.log'
      },
    );
    log.addStream(
      {
        level: 'debug',
        path: 'debug.log',
      }
    );
    log.addStream({
      level: 'error',
      path: 'error.log'
      }
    );
  }
  parentLogger.log = log;
}
const motherLogger: Logger = parentLogger.log;
export default motherLogger;