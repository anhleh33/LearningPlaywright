const winston = require('winston')
const { createLogger, format, transports } = winston

//The lower the number, the higher the priority.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console({
            level: levels.info,
            colorize: true,
        }),
        new winston.transports.File({ 
            filename: '../../logs/info.log',
            level: 'info',
            // maxsize: 5242880, // 5MB
            // maxFiles: 5,
            colorize: true
        })
    ]
})

logger.info('Logger initialized')
logger.warn('This is a warning message')
