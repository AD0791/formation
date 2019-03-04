const Eventemitter = require('events');
let url='http://mylogger.io/log';

// class- first letter is uppercase by convention
// when creating a method in a class
// no need for the word "function"
// extends Eventemitter allow to our class to inherit
// from the Eventemitter (events class) class 
// all the properties and methods.
// that's why we use the pointer this.emit
class Logger extends Eventemitter{
     log(message){
        console.log(message);
        // raise an event
        this.emit('messagelogged',{id:1,url:'http://'});
    }
}

//export the module
module.exports = Logger;