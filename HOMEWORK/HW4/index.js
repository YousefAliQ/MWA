const {
    Subject
} = require('rxjs');
const {
    parse
} = require('url');
const {
    fork
} = require('child_process');
const {
    calculateFib
} = require('./calculateFib');

const subject = new Subject();
let n = null;

function sayHello(reqres) {
    n = reqres.req.query ? parseInt(reqres.req.query.n, true) : 1000;
    // using cluster approuch maybe better
    const childProcess = fork('./calculateFib.js');
    childProcess.send(n);
    childProcess.on("message", result => {
        reqres.res.end(JSON.stringify({
            fib: result
        }));
    });
}

subject.subscribe(sayHello);

const {
    createServer
} = require('http');
createServer((req, res, next) => {

    subject.next({
        req: req,
        res: res
    });

}).listen(4000, () => {
    console.log('172.0.0.1')
});