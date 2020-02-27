const fs = require('fs');
const path = require('path');


// this example solved the memory issue using streams. But if the destination is slow
// a bottleneck problem will appear. And it will solved by pipe. 
const readable = fs.createReadStream(path.join(__dirname,'../files/greet.txt'),
                                                {encoding:'utf-8',highWaterMark: 16 * 1024});
const writable = fs.createWriteStream(path.join(__dirname,'./greet.txt'));

readable.on('data',function(chunk){
    console.log(chunk);
    writable.write(chunk);
});