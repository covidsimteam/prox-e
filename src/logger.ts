import * as Bunyan from 'bunyan';
import Logger from 'bunyan';

const parentLogger: any = {};

if (!parentLogger.log) {
  parentLogger.log = Bunyan.createLogger({
    name: 'CST MW & Proxy App',
    level: 'info',
    serializers: Bunyan.stdSerializers,
  });
  
  if ((/true/i).test(process.env.LOG_TO_FILE || 'true')) {
    parentLogger.log.streams([
      {
        level: 'info',
        path: 'info.log'
      },
      {
        level: 'debug',
        stream: 'stdout',
      },
      {
        level: 'error',
        path: 'error.log'
      }
    ])
  }
}
const motherLogger: Logger = parentLogger.log;
export default motherLogger;