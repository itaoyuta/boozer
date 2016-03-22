var router = require('koa-router')();

router.get('/', function *(next) {
	this.body = 'next is debugg';
	// yield this.render('index', {
	// 	title: 'hello world koa!'
	// });
});

module.exports = router;
