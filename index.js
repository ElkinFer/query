/*
function greet (name){
  return `Hello, ${name}`;
}

console.log(greet("Node.js"));

*/

/*
var
let
const
*/
/*

const http  = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Node.js  ADSO');
}).listen(8080);
*/

const datetime = require('./datetime.js');

console.log('localhost:8080/' + datetime.myDateTime());

const http  = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('localhost:8080/' + datetime.myDateTime());
}).listen(8080);

/*
const http  = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(data);
     return res.end();
  });
}).listen(8080)*/