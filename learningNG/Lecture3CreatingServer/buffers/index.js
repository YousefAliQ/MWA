//const buffer = Buffer.alloc(8); // allocate 8 bytes buffer.
let buffer = Buffer.from('Hello');
console.log(buffer.toString()); // Hello

buffer.write('wo');
console.log(buffer.toString()); // wollo

buffer = Buffer.from('this is my buffer string');
const slice = buffer.slice(0,4); // this --shallow copy
console.log(slice.toString());

const targetBuffer = Buffer.alloc(5);
buffer.copy(targetBuffer,0,0,4);
console.log(targetBuffer.toString()); // this --deep copy