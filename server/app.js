const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
 res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
   });

   app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
   });

app.get('/profile/:name', function(req, res){
    var data = {age: 28, job: 'ninja', hobbies: ['cooking', 'coding', 'dancing']};
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000);



























// var http = require('http');
// var fs = require('fs');


// /*
// myReadStream.on('data', function(chunk){
//     console.log('new chunk received:');
//     myWriteStream.write(chunk);
// });
// */

// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//    if(req.url === '/home' || req.url === '/'){
//       res.writeHead(200, {'Content-Type': 'text/html'});
//        fs.createReadStream(__dirname + '/index.html').pipe(res);
//    } else if(req.url === '/contact'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//    } else if(req.url === '/api/ninjas'){
//        var ninjas = [{name: 'clint', age: 29}, {name: 'jeez', age: 19}];
//        res.writeHead(200, {'Contact-Type': 'application/json'});
//        res.end(JSON.stringify(ninjas));
//    } else{
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//    }
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');

// /*var server = http.createServer(function(req, res){
//    console.log('request was made:' + req.url);
// res.writeHead(200, {'Contnet-Type': 'application/json'});
// var myObj = {
//     name: 'clint',
//     job: 'dev',
//     age: 23
// }
// res.end(JSON.stringify(myObj));
// });*/

// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 300')