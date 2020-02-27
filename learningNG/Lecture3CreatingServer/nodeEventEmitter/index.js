const EventEmitter = require('events');

class ComproStudent extends EventEmitter{
    constructor(){
        super();
    }
    visit(name){
        this.emit('newStudent', name);
    }
}

const student = new ComproStudent();
student.on('newStudent', (name)=>console.log(`Welcome, ${name}`));
student.visit("Ali");