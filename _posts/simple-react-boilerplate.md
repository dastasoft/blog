---
title: 'Simple React Boilerplate'
excerpt: 'How to make a simple React boilerplate from scartch with Babel and Parcel.'
coverImage: '/assets/posts/preview/simple-react-boilerplate.png'
date: '2020-02-29T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/simple-react-boilerplate.png'
tags: ['react', 'javascript']
---

We will create a simple React boilerplate with [Parcel](https://parceljs.org/) bundler, linter, prettier and a few things more for create new React apps quick.

You always can use [Create React App](https://github.com/facebook/create-react-app) or even a [CRA version with Parcel](https://github.com/assuncaocharles/create-react-app-parcel) but the scope of this guide is making a smaller/simpler boilerplate.

I recommend this approach specially for ppl who start with React because CRA does a lot of [magic](https://www.reactiongifs.com/magic-3/) for us and I think it's important know which problems CRA "solves" before use it as an overkill.

If you want to skip the guide and check/fork the final result, you can do it [here](https://github.com/dastasoft/parcel-react-boilerplate)

## Why Parcel

- Parcel doesn't require a config file at all!
- It's very fast
- [Tree shaking](https://en.wikipedia.org/wiki/Tree_shaking) out of the box with multicore procesing.
- Caching, Parcel do some caching after the first build so the build/rebuild times are really fast after the _warmup_. (welcome back to the second argument :D)

Also worth mention:

- **Code splitting** is out of the box in Parcel and Webpack's CRA.
- **Live reload** is available by default in Parcel and Webpack's CRA.

## From 0 to 1

Make a new folder, and init the project:

```bash
mkdir parcel-react-boilerplate
cd parcel-react-boilerplate

yarn init -y
```

_I will use [yarn](https://yarnpkg.com/) but feel free to use any package manager you want._

With `yarn init -y` we are creating a `package.json` with:

```json
{
  "name": "parcel-react-boilerplate",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

_If you follow the same folder structure of this guide, change `"main": index.js` for `"main": "src/index.js"`._

## Adding Parcel

First of all, let's install and configure the bundler:

```bash
yarn add react react-dom
yarn add -D parcel-bundler @babel/core @babel/preset-env @babel/preset-react
```

On your project root folder create a `.babelrc` file and add the following content:

```json
{
  "presets": ["@babel/preset-react"]
}
```

Let's add a `start script` and a `build script` for starting and building our project on the `package.json`

```json
"scripts": {
  "start": "parcel src/index.html"
  "build": "parcel build src/index.html"
}
```

_Change `src/index.html` to the route of your main html file._

My folder structure will be

```bash
- my-project
|- src
|-- index.html
|-- index.js
|- package.json
```

## Adding React

In `index.html` make sure you have imported the `index.js`

```html
<script src="./index.js"></script>
```

We will place a `div` with `id` `root` to add our React content there.

```html
<div id="root"></div>
```

_Make sure to place this `div` before the `index.js` import. We want to load the content of the index.js on this div, for that the element must be present before index.js comes in._

For the `index.js` lets place some basic React code:

```javascript
import React from 'react'
import { render } from 'react-dom'

const App = () => <div>Hello Wolrd!</div>

render(<App />, document.getElementById('root'))
```

## Adding Extras

The boilerplate is ready to go at this point, you can check it by starting the server with the script we wrote earlier.

```bash
yarn start
```

If everything is correct, our server will be running at `http://localhost:1234` by default. **The server will reload automatically when detect changes in the project without any additional configuration.**

However let's add some extras to make our lifes easy. The following extras are only for develop, they will not go to the final product, for that we'll use `-D` on yarn.

### PropTypes

Prop validation is not mandatory but it is nice to have, simple install the package:

```bash
yarn add prop-types
```

### Autoprefixer

One thing that does CRA is autoprefixing the CSS, that means we don't need to wrote all the "alternative versions" (vendor prefixes) of the properties depending on the browser we're executing our app.

We'll use [autoprefixer](https://github.com/postcss/autoprefixer):

```bash
yarn add -D autoprefixer
```

With Parcel, we need to add a file `.postcssrc` to our root's project folder with the following content:

```json
{
  "plugins": {
    "autoprefixer": {
      "grid": "autoplace"
    }
  }
}
```

Let's create a `index.scss` and import it on the `index.js` Parcel will install the `sass` module by itself.

### Prettier

With [Prettier](https://prettier.io/) we'll format our code automatically when the file is saved and we'll define rules for the entire project formatter.

```bash
yarn add -D prettier
```

Create the files `.prettierrc` and `.prettierignore` files on the root folder of the project:

`.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "useTabs": false,
  "endOfLine": "lf"
}
```

_You can find more config options [here](https://prettier.io/docs/en/options.html)_

- **semi** Add a semicolon at the end of every statement.
- **singleQuote** Use single quotes insted of doubles _JSX ignore this option_.
- **useTabs** Ident lines with spaces.
- **endOfLine** End of line style of Linux/MAC and git repositories, if you share the repo with Windows users is very handy.

`.prettierignore`

```ignore
.cache
node_modules
build
dist
```

### ESLint

We'll add [ESLint](https://eslint.org/) with the rules of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)/[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

I use this approach because I found this rules are a good reference to follow and newcomers usually find very instructive.

```bash
yarn add -D eslint babel-eslint babel-preset-env babel-preset-react eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react
```

_Note we're installing `eslint-config-prettier` and `eslint-plugin-prettier` for combine eslint with our exiting prettier._

In the project root folder create the files `.eslinitrc` and `.eslintignore`:

`.eslintrc`

```json
{
  "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }]
  }
}
```

_You can add more rules from [here](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules) and set as warning or error depending your criteria._

I usually use import alphabetical order and prop types alphabetical order but I don't include in this guide because is a very personal preference.

`.eslintignore`

```ignore
*
!*/
!*.js
!*.ts
!*.json
.cache
node_modules
dist
```

### Git ignore

Nothing fancy, regular `.gitignore` for avoiding publish large and unnecesary files.

```ignore
# Parcel #
.cache
dist

# Yarn / NPM #
.DS_*
*.log
logs
node_modules

# VisualStudioCode #
.history
!.vscode/tasks.json
!.vscode/launch.json
```

### Visual Studio Code shareable config

Some VSCode config can be shared through team members. Create a `.vscode` folder in the project root folder, and the files `extensions.json` and `settings.json`.

`extensions.json`

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

With this file, users who load the project will be prompted with extension recommendations.

`settings.json`

```json
{
  "editor.formatOnSave": true
}
```

With this file, the file will be format on save.

## Conclusion

Now you have a ready to go boilerplate for starting any React project without tons of third party libraries or configs behind the scenes also, you can add/remove any customizations you want.

What is your configuration in your React projects? There are a few things sure we can add it like [TypeScript](https://www.typescriptlang.org/), [Storybook](https://storybook.js.org/) and others, what are you recommendations?

Enjoy!
