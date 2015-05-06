var express = require('express');
var mime = require('mime');
var SSE = require('sse-emitter');

express.static.mime.define({
 'text/cache-manifest': ['../demoProject/cacheConfig/demo.appcache']
}); 

var sse = new SSE({
  keepAlive: 30000, // in ms, defaults to 10000 
});

var app = express();

app.get('/stream', sse.bind());

app.get('/', function(req, res) {
  res.send('HTML5!');
  resp = res;
});


var i = 0;

setInterval(function() {
i=i+1;
sse.emit('/stream', "Message from server: "+i);
}, 1000);


module.exports = app;