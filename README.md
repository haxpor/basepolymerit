# basepolymerit
Starting project with necessary tools to create Polymer-based component

It has the following tools working together

* `karma` + `jasmine` as the testing suite
* `babel` as converter ES6 to ES2015 code
* `http-server` as local http server when testing and reviewing the result
* `browserify` as a tool to be able to use `require()` and include all those required in browser environment
* `vulcanize` + `cripser` as a tool to manage HTML import dependency into a single file, and JS code separator from HTML file into a separate file with compliant ensurer. This is specifically use with Polymer-based component

# How To
Commands are centralize to NPM. You can do the following

* `npm start` - to build and start local http server
* `npm test` - to start `karma` with `jasmine`-based test suite
* `npm run server` - to start local http server
* `npm run build` - to build the project, output will be in `./dist` directory

# Tips

* `index.html` is the demoing page. It imports built component as seen inside `./dist` directory.
* `./scripts/build.sh` contains build commands to build the project

# LICENSE

It's based on MIT license.  
See [LICENSE](https://github.com/haxpor/basepolymerit/blob/master/LICENSE) for more information.
