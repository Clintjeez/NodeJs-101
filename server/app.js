var http = require('http');
var fs = require('fs');


/*
myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});
*/

var server = http.createServer(function(req, res){
   console.log('request was made:' + req.url);
res.writeHead(200, {'Contnet-Type': 'text/plain'});
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 300')