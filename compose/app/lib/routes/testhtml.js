'use strict'

var router = require('koa-router')();
var views = require('co-views');
var serve = require('koa-static');
// let render = views(__dirname + '/public', { map: { html: 'swig'}});
// let render = views(__dirname + '/public', { map: { html: 'jade'}});
let render = views(__dirname + '/views', {map: {html: 'swig'}});

router.get('/', function *(next) {
	this.body = yield render('index', { });
	// this.body = yield render('index.html', {});
	// this.body = 'hoge'; 
	// this.body = serve(__dirname + '/public/index.html'); 
});


module.exports = router;
