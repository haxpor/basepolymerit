# basepolymerit
Starting project with necessary tools to create Polymer-based component.  
The component is implemented in ES6 code separated logic code from its template. Thus it has one `.js` file with `.html` file.

It has the following tools working together

* `karma` + `jasmine` as the testing suite (via `karma-polymer`)
* `babel-cli` based on Babel 6 as converter ES6 to ES2015 code
* `uglify-js` as uglifier to mainly mangle function's parameters.
* `http-server` as local http server when testing and reviewing the result
* `browserify` as a tool to be able to use `require()` and include all those required in browser environment
* `vulcanize` + `cripser` as a tool to manage HTML import dependency into a single file, and JS code separator from HTML file into a separate file with compliant ensurer. This is specifically use with Polymer-based component

# How To
Commands are centralize to NPM. You can do the following

* `npm start` - to build and start local http server
* `npm test` - to start `karma` with `jasmine`-based test suite
* `npm run server` - to start local http server
* `npm run build` - to build the project, output will be in `./dist` directory
* `npm run clean` - to remove all distributed and auto-generated files in `./dist` directory. But it doesn't remove directory itself.

# Tips

* `index.html` is the demoing page. It imports built component as seen inside `./dist` directory.
* `./scripts/build.sh` contains build commands to build the project, you should `npm install` first before using it via `npm build` or `npm start`.

# CLI

Use [basepolymerit-cli](https://github.com/haxpor/basepolymerit-cli) to help creating a starting project.

# LICENSE

It's based on MIT license.  
See [LICENSE](https://github.com/haxpor/basepolymerit/blob/master/LICENSE) for more information.
