const { EventEmitter } = require('events');
class Gym extends EventEmitter{
    interval;

    constructor(){
        super();
        this.interval = setInterval(()=>{
            this.emit("boom");
        }, 1000);
    }
    
    rest(e){
        clearInterval(this.interval);
    }
}

const gym = new Gym();
gym.on("boom",()=>{
    console.log(`Athlete is working out`);
});

setTimeout(()=>{
    gym.rest();
    console.log(`Athlete is resting`);
},5000)


