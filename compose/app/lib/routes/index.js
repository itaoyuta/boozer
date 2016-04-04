'use strict'

var router = require('koa-router')()
	, logger = require('../../modules/logger')
	, views = require('co-views')
;	

let render = views(__dirname + '/views', {map: {html: 'jade'}});
let title = 'boozer';
// var title = 'hoge';
router.get('/', function *(next) {
	logger.access.info({
		httpVersion: 1.1,
		httpMethod: 'GET',
		url: '/'
	});

	this.body = yield render('index.jade', {
		title: title + ' - index page'
	});
});


module.exports = router;



