// var hostname = require('os').hostname();
// var http = require('http');
// http.createServer(function (req, res) {
// 	console.log(hostname);
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('hoge  hello, I`m' + hostname);
// }).listen(8080);
// console.log('Server running at http://127.0.0.1:8080/');


var http= require('http');
var fs = require('fs');
 
var server = http.createServer();
server.on('request', doRequest);
server.listen(8080);
console.log('Server running!');
 
// リクエストの処理
function doRequest(req, res) {
	fs.readFile('./hello.html', 'UTF-8', 
	function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}

