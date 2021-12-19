const EventEmitter = require('events');
const emitter =  new EventEmitter();


//Register a Listener
emitter.on('messagedlogged', function (arg) {
    console.log('Listener called', arg);
})


// Raise Event

console.log('Emitng.....')
emitter.emit('messageLogged', {id:1, url: 'https://tepsmarketing.com'});


//Event Fire after 1000ms
setTimeout(()=>{
    console.log('Emitting from setTimeout');
    emitter.emit('messagelogged', {id:2, from: ' setTimeout'});

},1000);