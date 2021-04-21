var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

// var readStream = fs.createReadStream('./docs/blog3.txt');


// readStream.on('open', function () {
//   console.log('The file is open');
// });

//Create an event handler:
const myEventHandler = () => {
    console.log('I hear a scream!');
  }
  
//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);
  
//Fire the 'scream' event:
eventEmitter.emit('scream');
