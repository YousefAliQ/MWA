const server = require('http').createServer();

server.on('request',(req, res)=>{
        console.log('this is the request handler');
});