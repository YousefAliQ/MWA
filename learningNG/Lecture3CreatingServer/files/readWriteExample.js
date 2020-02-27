const fs = require('fs');
const path = require('path');

const greet = fs.readFileSync(path.join(__dirname,'greet.txt'),'utf-8');
console.log("Synced file " + greet);

// this is bad practice because it will load the whole file to memory
// which will cause a problem if the file size is big.
fs.readFile(path.join(__dirname,'greet.txt'),'utf-8',(err,data) => {
    if (err) throw err;
    console.log("Async file " + data);
});

fs.writeFile(path.join(__dirname,'greet.txt'),'Hello world',(err)=>{
    if (err) console.log(err);
})
console.log('Done!');