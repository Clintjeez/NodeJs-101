//var counter = require('./count');

//console.log(counter.counter(['shawn', 'crystal', 'ryu']));
//console.log(counter.adder(5,6));
//console.log(counter.adder(counter.pi, 5))

//var myEmitter = new events.EventEmitter();

//myEmitter.on('someEvent', function(mssg){
//    console.log(mssg);
//});

//myEmitter.emit('someEvent', 'the event was emmitted');

//var events = require('events');
//var util = require('util');
 
//var Person = function(name){
//    this.name = name;
//}

//util.inherits(Person, events.EventEmitter);

//var james = new Person('james');
//var mary= new Person('mary');
//var clinton = new Person('clinton');
//var people = [james, mary, clinton];

//people.forEach(function(person){
//    person.on('speak', function(mssg){
//        console.log(person.name + ' said: ' + mssg)
//    })
//});

//james.emit('speak', 'hey dudes')
//clinton.emit('speak', 'lets go party')

//var fs = require('fs');

//fs.unlink('writeMe.txt');

//fs.readFile('readme.txt', 'utf8', function(err, data){
   // fs.writeFile('writeMe.txt', data);
//});


var fs = require('fs');

fs.unlink('./stuff/writeMe.txt', funvtio(){
    fs.rmdir('stuff')
})


//fs.writeFileSync('writeMe.txt', readMe)

