const Emmiter = require('./emitter');

const emtr = new Emmiter();

emtr.on("feed",function(){
    console.log('I eat an apple!');
})

emtr.on("feed", function(){
    console.log('I drink turkish tea');
})
console.log("Hello, ");
emtr.emit('feed');