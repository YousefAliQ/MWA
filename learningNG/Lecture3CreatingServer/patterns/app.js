const patt1 = require('./pattern1');
const patt2 = require('./pattern2');
const patt3 = require('./pattern3');
const patt4 = require('./pattern4');

console.log('# pattern 1 :');
patt1();
console.log(' ');
console.log('# pattern 2 :');
patt2.getCourseName();


console.log(' ');
console.log('# pattern 3 :');
console.log(patt3.courseName);
patt3.courseName = 'CS472';
const patt3SecondImport = require('./pattern3');
// Changed because of the cache.
// patt3 and patt3SecondImport pointers are same.
patt3SecondImport.getCourseName(); 


console.log(' ');
console.log('# pattern 4 :');

const instance1 = new patt4();
instance1.getCourseName();
instance1.courseName = 'CS472';

const patt4SecondImport = require('./pattern4');
const instance2 = new patt4SecondImport();
// Did NOT Changed because we can create multiple instances.
instance2.getCourseName();



