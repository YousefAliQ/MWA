const server = require('http');
const fs = require('fs');
const path = require('path');

server.createServer((req, res)=>{

    const myFile = fs.readFileSync(path.join(__dirname,'./kae-pluibcourse.zip'));

    // res.writeHead(200,{'Content-type' : 'application/gzip'});
    // res.end(fs.writeFileSync(path.join(__dirname,'../dest/destination.zip'),myFile,
    //                         { encoding: 'utf-8', highWaterMark: 16 * 1024 }));

    res.writeHead(200, {'Content-type': 'application/octet-stream', 'Content-Disposition': `attachment; filename="kae-pluibcourse.zip"`})
    res.write(myFile);
    res.end();

    
}).listen(4000, ()=> console.log('listening on 4000'));