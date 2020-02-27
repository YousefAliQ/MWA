const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readable = fs.createReadStream(path.join(__dirname,'../files/greet.txt'));
const compressed = fs.createWriteStream(path.join(__dirname,'destination.txt.gz'));

readable.pipe(gzip).pipe(compressed);