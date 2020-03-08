# MWA TypeScript Demo

1. Install `typescript` transpiler globally: `npm i –g typescript`
2. Create `tsconfig.json`: `tsc -init` and set `outDir: './js'`
3. Create two `ts` module files and convert them to `js` using: `tsc`
4. In `js` folder, create `html` file that is using those generated `js` files, run a web server `http-server` and notice how browsers cannot understand the `import` statement
5. Run `npm init -y` and then install `webpack` as a development dependency: `npm i webpack webpack-cli --save-dev`
6. Add the following script to `package.json`: 
```javascript
{ "build" : "webpack ./app.js -o ./bundle.js --devtool source-map" }
```
7. Run `npm run build` and it will bundle all `js` files into one and generate sourcemap files.
8. Use the `bundle.js` file and test the results in the browser.
