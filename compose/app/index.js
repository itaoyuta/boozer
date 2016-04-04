var app = require('./lib/app')

	,	port = 8080

;

console.log('aabb');

app.listen(port, function(){
	console.log('listening on %d', port);
});



// var app = require('koa')()
// 	, port = 8080
// 	,	router = require('koa-router')()
// ;
//
// router.get('/', function *(next) {
// 	this.body = 'hello world koaaa';
// 	// yield this.render('index', {
// 	// 	title: 'hello world koaaa'
// 	// });
// });
//
// app
// 	.use(router.routes())
// 	.use(router.allowedMethods());
//
// app.listen(port, function(){
// 	console.log('listening on %d', port);
// });






// var koa = require('koa');
// var app = koa();
//
// app.use(function *(){
// 	this.body = 'Hello World';
// });
//
// app.listen(8080);








// // var hostname = require('os').hostname();
// // var http = require('http');
// // http.createServer(function (req, res) {
// // 	console.log(hostname);
// // 	res.writeHead(200, {'Content-Type': 'text/plain'});
// // 	res.end('hoge  hello, I`m' + hostname);
// // }).listen(8080);
// // console.log('Server running at http://127.0.0.1:8080/');
//
//
// var http= require('http');
// var fs = require('fs');
//  
// var server = http.createServer();
// server.on('request', doRequest);
// server.listen(8080);
// console.log('Server running!');
//  
// // リクエストの処理
// function doRequest(req, res) {
// 	fs.readFile('./hello.html', 'UTF-8', 
// 	function(err, data) {
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.write(data);
// 		res.end();
// 	});
// }
//
