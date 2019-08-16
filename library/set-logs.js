const log4js = require('log4js');
const loggerOptions = require('../etc/configLoggger.json');
log4js.configure(loggerOptions);
const logger = log4js.getLogger('cheese');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

module.exports = function setLogs(logs) {
    let Logs = { "responseError": logs };
    logger.error(JSON.stringify(Logs));
    console.error(Logs);
};

