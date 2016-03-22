var	app = require('koa')()
	, router = require('koa-router')()
	, logger = require('../modules/logger')
;

logger.system.info({
		name: "logger test2"
	,	message: "piyoipyo"
});




var index = require('./routes/index');


// routes definition
router.use('/', index.routes(), index.allowedMethods());

// mount root routes
app
	.use(router.routes())
	.use(router.allowedMethods());

// app.on('error', function(err, ctx){
//   log.error('server error', err, ctx);
// });


module.exports = app;






