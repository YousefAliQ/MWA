const {subject} = require('rxjs');
const subject = new Subject(); // observable + observer

function sayHello(reqres){
    reqres.res.end('Hello \n');
}

subject.subscribe(sendHello); // observslble subsecription
subject.subscribe(filterIp);
subject.subscribe(logToDB);

const http = require('http');
http.createServer((req,res)=>{
    subject.next({req:req, res:res}); // observer.next
}).listen(1337, ()=>console.log('172.0.0.1'));
