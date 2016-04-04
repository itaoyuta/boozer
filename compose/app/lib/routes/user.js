var router = require('koa-router')();

var aa = 1;
console.log(router);
console.log(aa);
debugger;
router.get('/', function *(next) {
	this.body = 'this is user page';
});

aa += 1;

console.log(router);
console.log(aa);
debugger;

module.exports = router;
