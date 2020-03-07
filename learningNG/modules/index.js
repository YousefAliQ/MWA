// using commonJS for module.export and require() to import

// if require with out ./ it will looks at the paths
const m = require('./m');// without extention but its fine

/**
 * How does require works ... 
 * 1. resolve : find the dependency on the paths
 * 2. read : fs.readfileSync
 * 3. wrap : customized and passing the 5 special globals (red ones)
 * 4. exe : create a new context --local and call the function by passing the 5 globals
 *    + return implicitly module.export.
 * 5. cache : set loaded to true 
 */

//m.getX();
console.log(m);