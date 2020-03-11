var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made:' + req.url);
res.writeHead(200, {'Contnet-Type': 'text/plain'});
res.end('hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 300')