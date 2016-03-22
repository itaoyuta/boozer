var config = require('config');
var log4js = require('log4js');
log4js.configure(config.log4js.configure);
// log4js.configure('../config/develop.json');

// // if (process.env.NODE_ENV === 'production') {
// // 	var appender = require('fluent-logger').support.log4jsAppender('node', {
// // 		host: config.fluentd.host,
// // 		port: config.fluentd.port,
// // 		timeout: config.fluentd.timeout
// // 	});
// // 	log4js.addAppender(appender);
// // }

var logger = {
	system: log4js.getLogger('system'),
	access: log4js.getLogger('access'),
	error: log4js.getLogger('error')
}
for (key in logger) {
	logger[key].setLevel(config.log4js.level);
}

logger.system.info({
		name: "logger test"
	,	message: "hogehoge"
});

module.exports = logger;

