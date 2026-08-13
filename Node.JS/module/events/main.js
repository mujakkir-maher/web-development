const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listener, event ghotle actually ki korbe
emitter.on('hello', () => {
    console.log('hello event occurred!');
});
// event execute kore
emitter.emit('hello');

// same way te chaile data o pathanu jay

emitter.on('login', (name) => {
    console.log(`${name} logged in`);
});

emitter.emit('login', 'Maher vai');