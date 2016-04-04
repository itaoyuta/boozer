var	app = require('koa')()
	, router = require('koa-router')()
	, logger = require('../modules/logger')
	, serve = require('koa-static')
;

logger.system.info({
		name: "logger test2"
	,	message: "piyoipyo"
});

var index = require('./routes/index');
var user = require('./routes/user');
var testhtml = require('./routes/testhtml');
// routes definition
router.use('/', index.routes(), index.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
router.use('/testhtml', testhtml.routes(), testhtml.allowedMethods());

console.log(router);

// mount root routes
app
	.use(serve(__dirname + '/public'))
	.use(router.routes())
	.use(router.allowedMethods());

// app.on('error', function(err, ctx){
//   log.error('server error', err, ctx);
// });


module.exports = app;






