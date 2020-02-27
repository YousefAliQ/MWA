const server  = require('http');
const fs = require('fs');
const path = require("path");

server.createServer(function(req, res) {
    try {
        res.writeHead(200, {'Content-type': 'application/octet-stream', 'Content-Disposition': `attachment; filename="kae-pluibcourse.zip"`})
        fs.createReadStream(path.join(__dirname,'kae-pluibcourse.zip')).pipe(res).on('finish', e => {
            console.log(`finished`);
        });
    } catch(error) {
        console.error(error);
    }
}).listen(4000);