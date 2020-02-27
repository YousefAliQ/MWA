const { createServer }  = require('http');
const { readFile } = require('fs');
const path  = require('path');
const { promisify } = require('util');
const fsAsync = promisify(readFile);

createServer((req, res)=>{
   
    fsAsync(path.join(__dirname,'./kae-pluibcourse.zip'))
                            .then((file)=>{
                                res.writeHead(200, {'Content-type': 'application/octet-stream', 'Content-Disposition': `attachment; filename="kae-pluibcourse.zip"`})
                                res.write(file);
                                res.end();
                            }).catch((e)=>{console.error(e);});
}).listen(4000, ()=> console.log('listening on 4000'));
