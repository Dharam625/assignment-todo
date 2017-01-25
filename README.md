# Todo app

Its a todo application which allows add and delete of todos.

### Quick start
**Make sure you have Node version >= `6.9.*` and NPM >= `3.10.*`

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/Dharam625/assignment-todo.git

# change directory to our repo
cd assignment-todo

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr
```
go to [http://localhost:3000](http://localhost:3000) in your browser

## File Structure
We use the component approach for todo app. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
assignment-todo/
 ├──config/                         * our configuration
 |   ├──helpers.js                  * helper functions for our configuration files
 |   ├──spec-bundle.js              * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js               * karma config for our unit tests
 |   ├──protractor.conf.js          * protractor config for our end-to-end tests
 │   ├──webpack.dev.js              * our development webpack config
 │   ├──webpack.prod.js             * our production webpack config
 │   └──webpack.test.js             * our testing webpack config
 │
 ├──src/                            * our source files that will be compiled to javascript
 |   ├──main.browser.ts             * our entry file for our browser environment
 │   │
 |   ├──index.html                  * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts                * our polyfills file
 │   │
 |   ├──vendor.browser.ts           * our vendor file
 │   │
 │   ├──app/                        * WebApp: folder
 │   │   ├──app.component.spec.ts   * a simple test of components in app.ts
 │   │   ├──app.e2e.ts              * a simple end-to-end test for /
 │   │   └──app.component.ts        * It is the root component of what will become a tree of nested components as the application evolves.
 │   │   └──app.module.ts           * the root module that tells Angular how to assemble the application
 │   │   └──app.routes.ts           * contains the application routes configuration
 │   │
 │   └──assets/                     * static assets are served here
 │       ├──icon/                   * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js       * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt              * for search engines to crawl your website
 │       └──humans.txt              * for humans to know who the developers are
 │
 │
 ├──tslint.json                     * typescript lint config
 ├──typedoc.json                    * typescript documentation generator
 ├──tsconfig.json                   * config that webpack uses for typescript
 ├──package.json                    * what npm uses to manage it's dependencies
 └──webpack.config.js               * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`
* Ensure you're running the latest versions Node `v6.9.x` and NPM `3.10.x`. Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you.

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod

#developemnt with local data
npm run start
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# make sure you have your server running in another terminal
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `3000`.