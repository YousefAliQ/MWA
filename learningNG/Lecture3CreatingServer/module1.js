/**
 * Exploring Module and require in NodeJS
 * 
 * 
> module
Module {
  id: '<repl>',
  path: '.',
  exports: {},
  parent: undefined,
  filename: null,
  loaded: false,
  children: [],
  paths: [
    '/home/yousef/Desktop/MWA/learningNG/modules/repl/node_modules',
    '/home/yousef/Desktop/MWA/learningNG/modules/node_modules',
    '/home/yousef/Desktop/MWA/learningNG/node_modules',
    '/home/yousef/Desktop/MWA/node_modules',
    '/home/yousef/Desktop/node_modules',
    '/home/yousef/node_modules',
    '/home/node_modules',
    '/node_modules',
    '/home/yousef/.node_modules',
    '/home/yousef/.node_libraries',
    '/usr/lib/node'
  ]
}
> require
[Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: undefined,
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {}
}

> require.extensions['.js'].toString()
'function(module, filename) {\n' +
  "  if (filename.endsWith('.js')) {\n" +
  '    const pkg = readPackageScope(filename);\n' +
  "    // Function require shouldn't be used in ES modules.\n" +
  "    if (pkg && pkg.data && pkg.data.type === 'module') {\n" +
  '      const parentPath = module.parent && module.parent.filename;\n' +
  "      const packageJsonPath = path.resolve(pkg.path, 'package.json');\n" +
  '      throw new ERR_REQUIRE_ESM(filename, parentPath, packageJsonPath);\n' +
  '    }\n' +
  '  }\n' +
  "  const content = fs.readFileSync(filename, 'utf8');\n" +
  '  module._compile(content, filename);\n' +
  '}'

*/


 /**
 * How does require works ... 
 * 1. resolve : find the dependency on the paths
 * 2. read : fs.readfileSync
 * 3. wrap : customized and passing the 5 special globals (red ones)
 * 4. exe : create a new context --local and call the function by passing the 5 globals
 *    + return implicitly module.export.
 * 5. cache : set loaded to true 
 */

 
