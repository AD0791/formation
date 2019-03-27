---
output:
  pdf_document: default
  html_document: default
---

# React Course

---

## Chapter 1 : Getting started

React is a javascript library for building user interfaces.

> Components are essentially a piece of the UI.

The building process is about merging the multiple components to create a complexe Interface.

Every react application has a route component. It represent the entire application with other child component. So every application is a tree of component.

Every component is build like a javascript class.

```javascript
class tweet {
  state = {};
  render() {
    // react element
  }
}
```

THe react element is mapping the dom element. React keep a lightweight representation of the dom in memory. We no longer need to work with the dom api.

React reacts to state of changes.

> Angular vs React: They have similar components. But Angular is a framework for complete solution and React is a library. And react only take care of rendering the vue and making the vue is in sink with the state. That's why it has very small api to learn. When buildidng an application with react, we need to use other libraries for routing, calling http services and so on.

### Setup

- install nodejs
- [reactjs](https://reactjs.org/)
- `npm i -g create-react-app` // @tospecifyaversion
- Vscode extension: simple React snippet and Prettier code formatter (editor format on save = true).

### First react app

Let's create our first react app.

```bash
# with the terminal
$ create-react-app react-app
```

By running this command, react will install :

- Development server
- Webpack
- Babel
- and Etc.

All the configuration is done for you

```bash
Alexandros-MacBook-Pro:React alexandrodisla$ create-react-app react-app

Creating a new React app in /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> fsevents@1.2.7 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/chokidar/node_modules/fsevents
> node install

[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote

> fsevents@1.2.4 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/fsevents
> node install

[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
+ react-dom@16.8.5
+ react@16.8.5
+ react-scripts@2.1.8
added 1977 packages from 735 contributors and audited 36240 packages in 264.395s
found 63 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created react-app at /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-app
  npm start

Happy hacking!
```

> `npm run eject` If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own. You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Now let's start the application

```bash
Alexandros-MacBook-Pro:react-app alexandrodisla$ npm start

> react-app@0.1.0 start /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app
> react-scripts start

Compiled successfully!

You can now view react-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.20.10.9:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```
