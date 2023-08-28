import {logger} from 'react-native-logs';

const config: any = {
  severity: 'debug',
  transportOptions: {
    colors: {
      error: 'red',
      warn: 'yellow',
      info: 'blue',
      debug: 'cyan',
    },
  },
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
};

var LOG: any = logger.createLogger(config);

export {LOG};
