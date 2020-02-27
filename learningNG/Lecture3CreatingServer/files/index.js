const fs = require('fs');
const path = require('path');

const greet = fs.readFileSync(path.join(__dirname,'greet.txt'),'utf-8');
console.log("Synced file " + greet);

fs.readFile(path.join(__dirname,'greet.txt'),'utf-8',(err,data) => console.log("Async file " + data));
console.log('Done!');