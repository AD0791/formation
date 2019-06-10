# Object Oriented Programming JS: Chapter 6 (Tooling)

## Chapter 6 - Tooling

The benefits of using modularity:

- Maintainability
- Reusability
- Abstract

The modules system from ES5 to ES6:

1. ES5

- AMD -> Browser
- **CommonJS -> Node.js**
- UMD -> Browser/Node.js

2. ES6

- **ES6 native Modules -> Browsers**

### CommonJS

We have this oop.js that we have run on node

```javascript
const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Circle with the radius of ${_radius.get(this)}`);
  }
}
const s = new Circle(10);
console.log(s);
console.log(s.draw());
```

```bash
$ node oop.js
Circle {}
Circle with the radius of 10
undefined
```

> Basic rule for modularity: Things that are highly related should go together (cohesion).

Everything who is build in a module is considered to be private. Unless we explicitly export it.

```javascript
//////oop.js
const Circle = require("./easy");

const s = new Circle(10);
console.log(s);
console.log(s.draw());

//////easy.js
// implementation details
const _radius = new WeakMap();

//  public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Circle with the radius of ${_radius.get(this)}`);
  }
}

// why because we only have one Class
module.exports = Circle;
```

```bash
$ node oop.js
Circle {}
Circle with the radius of 10
undefined
```

### ES6 Modules

```javascript
// OOP.js
import { Circle } from "./easy.js";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// an error console
// [Error] SyntaxError: Unexpected token '{'. import call expects exactly one argument.
//	(anonymous function) (oop.js:1)

// without webpack, we will do a quick fix.
// in oop.html and oop.js

////////////////////////////////////

// easy.js
// implementation details
const _radius = new WeakMap();

//  public Interface
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Circle with the radius of ${_radius.get(this)}`);
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <h1>Object Oriented Programming</h1>
    <!-- a quick fix to oop.js -->
    <script type="module" src="oop.js"></script>
  </body>
</html>
```

```javascript
// in console
[Log] Circle {} (oop.js, line 6)
[Log] Circle with the radius of 10 (easy.js, line 10)
[Log] undefined (oop.js, line 7)
```

### ES6 Tooling

These tools are relevant for browser application.

- transpiler: translator and compiler. It will convert our modern javascript code to a code that all browser will understand. (like babel)!
- bundler: it's responsible to convert all our javascript files (modules) into a single javascript file. (Which we call a bundle). (like Webpack)!

#### Babel

`
We need to install nodejs.

```bash
### Make an new directory
$ cd new dirname
### init a node project
$ npm init -y
# It create a package.json file
```

`package.json` is an indification for an application.

```bash
# i had to do sudo to make it work
npm i babel-cli babel-core babel-preset-env --save-dev
```

- babel-cli: it's babel command line interface that will compile our javascript code.
- babel-core: is the core of babel where the transpiling code is implemented.
- babel-preset-env: In javascript every new feature in es6, we have a plugging for that. This preset is a combination of all these pluggings.
- `--save-dev` means we are going to save them as development dependencies. They are not going to be part of the application. They are not going to be deploy for production.

Now we have the node_modules folder where the packagees have been installed.

Now we can add a file.

```javascript
// we are going to use the babel transpiler
// to convert es.js to a <<format>> that all
// browser will understand
const x = 1;
```

we head to the `package.json` to get some changes. And define a new main and script.

```json
{
  "name": "es6-tooling",
  "version": "1.0.0",
  "description": "",
  "main": "es.js",
  "scripts": {
    "babel": "babel --presets env es.js -o build/alles.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0"
  }
}
```

now we go to the terminal, we can run the transpiler with npm.

```bash
$ npm run babel

> es6-tooling@1.0.0 babel /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/es6-tooling
> babel --presets env es.js -o build/alles.js

Alexandros-MacBook-Pro:es6-tooling alexandrodisla$
```

In the build folder we now have transpile our original `es.js` file to a new `alles.js` that all browser will understand.

```javascript
// babel transpiler work.
"use strict";

var x = 1;
```

> Remember wepback is going to help us create a bundle with our javascript file.

#### Webpack

we are going to the webpack folder to set 3 files that we need.

> N.B: with npm when we want to install a package on the node itself we use the `-g` command. to install the package globaly.

```bash
# we will install webpack globaly.
webpack init
```

you will answer the questions to set the needed install.

```bash
# start webpack
Alexandros-MacBook-Pro:Webpack alexandrodisla$ webpack-cli init
The command moved into a separate package: @webpack-cli/init
Would you like to install init? (That will run npm install -g @webpack-cli/init) (yes/NO) : yes
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm WARN deprecated nomnom@1.8.1: Package no longer supported. Contact support@npmjs.com for more info.
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!

> fsevents@1.2.7 install /usr/local/lib/node_modules/@webpack-cli/init/node_modules/fsevents
> node install

node-pre-gyp WARN Using request for node-pre-gyp https download
[fsevents] Success: "/usr/local/lib/node_modules/@webpack-cli/init/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote
npm WARN acorn-dynamic-import@4.0.0 requires a peer of acorn@^6.0.0 but none is installed. You must install peer dependencies yourself.

+ @webpack-cli/init@0.1.5
added 1298 packages from 619 contributors in 178.297s

ℹ INFO For more information and a detailed description of each question, have a look at https://github.com/webpack/webpack-cli/blob/master/INIT.md
ℹ INFO Alternatively, run `webpack(-cli) --help` for usage info.

? Will your application have multiple bundles? No
? Which module will be the first to enter the application? [default: ./src/index] ./src/index
? Which folder will your generated bundles be in? [default: dist]: # we use the default here
? Will you be using ES2015? Yes
? Will you use one of the below CSS solutions? No

> fsevents@1.2.7 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/node_modules/fsevents
> node install

node-pre-gyp WARN Using needle for node-pre-gyp https download
[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote
npm WARN saveError ENOENT: no such file or directory, open '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/package.json'
npm WARN Webpack No description
npm WARN Webpack No repository field.
npm WARN Webpack No README data
npm WARN Webpack No license field.

+ webpack-cli@3.3.0
+ babel-loader@8.0.5
+ @babel/core@7.3.4
+ babel-plugin-syntax-dynamic-import@6.18.0
+ @babel/preset-env@7.3.4
+ webpack@4.29.6
+ uglifyjs-webpack-plugin@2.1.2
added 576 packages from 262 contributors and audited 6878 packages in 51.652s
found 0 vulnerabilities


Congratulations! Your new webpack configuration file has been created!
{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.

# we need a package.json
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm init -y
Wrote to /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/package.json:

{
  "name": "Webpack",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "dependencies": {
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-loader": "^8.0.5",
    "uglifyjs-webpack-plugin": "^2.1.2",
    "webpack-cli": "^3.3.0",
    "webpack": "^4.29.6"
  },
  "devDependencies": {},
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

we had a command `build` in our `package.json` files.

> looking at the package.json files, the dependencies that we have should be stored at the devDependencies.

by default npm will look for index.js, so we had to rename our javascript files.

```bash
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm run build

> Webpack@1.0.0 build /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack
> webpack

Hash: 6700df793fb31b213684
Version: webpack 4.29.6
Time: 6625ms
Built at: 03/27/2019 9:50:25 AM
                       Asset      Size  Chunks             Chunk Names
main.0da91d1d57e05b35c98e.js  5.64 KiB    main  [emitted]  main
Entrypoint main = main.0da91d1d57e05b35c98e.js
[./src/circle.js] 1.07 KiB {main} [built]
[./src/index.js] 100 bytes {main} [built]
```

> We will have two files in our dist directory, the code had been uglify. One bundle for each files.

We will had the entry point to our index.html in the webpack directory.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <h1>Object Oriented Programming</h1>
    <!--  the entry point bundle -->
    <script src="./dist/main.0da91d1d57e05b35c98e.js"></script>
  </body>
</html>
```

> in console: `[Log] Circle {} [Log] Circle with the radius of 10 [Log] undefined`

We will make webpack regenerate our bundle every time we make a changes to our file.

```json
{
  "name": "Webpack",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "dependencies": {
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-loader": "^8.0.5",
    "uglifyjs-webpack-plugin": "^2.1.2",
    "webpack-cli": "^3.3.0",
    "webpack": "^4.29.6"
  },
  "devDependencies": {},
  "scripts": {
    "build": "webpack -w",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

> `"build": "webpack -w"` the w stand for watch.

```bash
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm run build

> Webpack@1.0.0 build /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack
> webpack -w


webpack is watching the files…

Hash: 6700df793fb31b213684
Version: webpack 4.29.6
Time: 4558ms
Built at: 03/27/2019 10:24:26 AM
                       Asset      Size  Chunks             Chunk Names
main.0da91d1d57e05b35c98e.js  5.64 KiB    main  [emitted]  main
Entrypoint main = main.0da91d1d57e05b35c98e.js
[./src/circle.js] 1.07 KiB {main} [built]
[./src/index.js] 100 bytes {main} [built]

# the teminal is still actives.
```

we have changed index.js in our `webpack/src` directory.

```javascript
import { Circle } from "./circle.js";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// the changes to see how webpack reacts
console.log("Webpack will changes the bundle");
```

We have a new entry point for our bundle

```bash
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm run build

> Webpack@1.0.0 build /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack
> webpack -w


webpack is watching the files…

Hash: 6700df793fb31b213684
Version: webpack 4.29.6
Time: 4558ms
Built at: 03/27/2019 10:24:26 AM
                       Asset      Size  Chunks             Chunk Names
main.0da91d1d57e05b35c98e.js  5.64 KiB    main  [emitted]  main
Entrypoint main = main.0da91d1d57e05b35c98e.js
[./src/circle.js] 1.07 KiB {main} [built]
[./src/index.js] 100 bytes {main} [built]
Hash: 5cb5662b8d3e715001b7
Version: webpack 4.29.6
Time: 32ms
Built at: 03/27/2019 10:27:24 AM
                       Asset      Size  Chunks             Chunk Names
main.c502ecbbed895cd9a1e3.js  5.73 KiB    main  [emitted]  main
Entrypoint main = main.c502ecbbed895cd9a1e3.js
[./src/index.js] 190 bytes {main} [built]
    + 1 hidden module
# the terminal is still running
```

maybe this version of webpack isn't updating the same entry point. As we can see we have a new one, becuase we change index.js. Now we have to change our index.html.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <h1>Object Oriented Programming</h1>
    <!-- the entry point bundle -->
    <script src="./dist/main.c502ecbbed895cd9a1e3.js"></script>
  </body>
</html>
```

> in console: `[Log] Circle {} [Log] Circle with the radius of 10 [Log] undefined [Log] Webpack will changes the bundle`

Pour finir:

> we don't need to specify the extension anymore ``./circle.js`.

```javascript
import { Circle } from "./circle";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// the changes to see how webpack reacts
console.log("Webpack will changes the bundle");
```

It will work, but will also changed the entry point of our bundle. Do COntrol+c to close the running webpack.
