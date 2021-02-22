---
title: 'Styling in React'
excerpt: 'Check out the different options to style your React application. Decide which one fits best to your project.'
coverImage: '/assets/posts/preview/styling-in-react.png'
date: '2020-03-15T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/styling-in-react.png'
tags: ['beginners', 'react', 'javascript']
section: 'frontend'
---

It's important that our components pass the tests, work well and don't re-render the screen too many times, but it's also important that they are visually attractive, right?

In this guide you'll find

- [CSS](#css)
- [Sass](#sass)
- [CSS Modules](#css-modules)
- [CSS-in-JS](#css-in-js)
  - [Radium](#radium)
  - [Styled Components](#styled-components)
- [Tailwind CSS](#tailwind-css)
- [React Spring](#react-spring)

First let's check we know some knowledge about how style and React works together:

- Every CSS file will be placed into the `<head>`, even if you have multiple CSS files across your components and containers. Because of that remember that in regular CSS **the scope is global**, take care with name repetition.
- In JSX you must use the keyword `className` to assign CSS classes, `class` is a special keyword from JS.
- You can use both CSS and Sass, check the corresponding chapter.
- Vendor prefixes can be done automatically with PostCSS plugins or out of the box with CRA.

In React we have different ways to apply CSS to our project/components, here are some of the many options:

## CSS

For apply style to our components the common pattern is create a separate `.css` file in the same folder of the component/container with the same name.

```bash
|- components
|-- MyComponent
|--- MyComponent.js
|--- MyComponent.css
|--- index.js
```

```js
import React from 'react'

import './MyComponent.css'

const MyComponent = () => {
  return <h1 className="my-component-style">MyComponent</h1>
}

export default MyComponent
```

Remember that event if you declare classes in this separate file, Webpack/Parcel will place this classes into the head of the HTML and will be **globally accesible**, take care of using unique names.

### Dynamically assign classes

The `className` attribute search for a string of one or more classes to apply.

```js
const classes = ['red', 'bold'].join(' ') // 'red bold' is a valid CSS

;<p className={classes}>Test</p>
```

## Sass

[Sass](https://sass-lang.com/) is a CSS preprocessor, which allows us to use features that don’t exist in CSS like nesting, mixins, inheritance, etc.

The `.sass` and `.scss` files can be used without any configuration with [create-react-app](https://github.com/facebook/create-react-app) (version 2 and above). Create files with that extension and will work like you saw in the previous section.

If you're not using `create-react-app` or my [Simple React Boilerplate](https://dev.to/dastasoft/simple-react-boilerplate-1o4h) you must install [node-sass](https://github.com/sass/node-sass) to your project.

Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

```bash
yarn add node-sass
```

## CSS Modules

With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component/container.

If you use `create-react-app` (version 2 and above) CSS modules are already enabled, but in order to use it you must follow the naming convention `MyComponent.module.css`

```css
.MyComponent {
  text-align: center;
}
```

```js
import React from 'react';

import classes from './MyComponent.module.css';

const MyComponent = () => {
  return <div className={classes.MyComponent}>
};

export default MyComponent;
```

With this the class name will look like `MyComponent__MyComponent__c7e` in the final product, that unique name is attached to this component. If you want to work with global classes you only need to add `:global`

```css
:global .MyComponent {
  text-align: center;
}
```

```js
import React from 'react';

import classes from './MyComponent.module.css';

const MyComponent = () => {
  return <div className="MyComponent">
};

export default MyComponent;
```

Once CSS Module is imported with `classes` name or any other name you want, is treated as a JS object.

All of this is applicable to `Sass` too, you only need to change the file extension to `.sass` or `.scss`.

If you want to learn more about CSS Modules I recommend this article by [CSS Tricks](https://css-tricks.com/css-modules-part-1-need/)

## CSS-in-JS

As the name suggest CSS-in-JS is a pattern where you build the CSS directly on the JS, for that reason the properties are `camelCase` because we're working with JS objects.

```css
.my-div {
  border-bottom: 1px solid teal;
}
```

```js
<div style={{ borderBottom: '1px solid teal' }} />
```

The upside of writing CSS in line is the scope. The `borderBottom` now is scoped to that only `div` for that you won't have any collision with other CSS classes. But if is now scoped what happens if I want to reuse?

The `style` attribute search for a JS object.

```js
const MyComponent = () => {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    margin: '0 5px auto',
  }

  style.backgroundColor = 'green'

  return (
    <div>
      <p style={style}>We have the same style</p>
      <p style={style}>We have the same style</p>
    </div>
  )
}
```

A major downside of inline styles is some powerfull tools present in CSS, like pseudo selectors, you can't use it in this way.

### Radium

As we saw above the real problem is, if in the CSS of your component defines:

```css
button:hover {
  color: black;
}
```

This will affect every button on your app because remember, **it's in a global scope**.

In order to use pseudo selector and other features in in-line style, you must install a third party package:

```bash
yarn add radium
```

For use `Radium` in your component besides of importing it, you must wrap your export:

```javascript
import Radium from 'radium'

export default Radium(App)
```

With that now we can use Radium features like the hover:

```javascript
const style = {
  backgroundColor: 'red',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  margin: '0 5px auto',
  ':hover': {
    backgroundColor: 'salmon',
    color: 'black',
  },
}

style.backgroundColor = 'green'
style[':hover'] = {
  backgroundColor: 'lightgreen',
  color: 'black',
}
```

Remember that the properties of a JS object can be defined with strings too, normally use this way if contain invalid caracters (like `:`). Later on, when you want to manage that property, must be used with `[]`.

#### Using media queries

Radium enables to use media queries in inline CSS but you need to wrap you application into a `StyleRoot`.

```javascript
import Radium, { StyleRoot } from 'radium';

return (
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    <StyleRoot>
    ...
    </StyleRoot>
);
```

### Styled Components

[styled-components](https://styled-components.com/) use [tagged template literals](https://styled-components.com/docs/advanced#tagged-template-literals) which are a feature of JS ES6, to write CSS (even pseudo selectors, mediaqueries, etc.) directly in your JS file, locally scoped and autoprefixed.

```bash
yarn add styled-components
```

```js
import React from 'react'
import styled from 'styled-components'

const MyComponent = () => {
  return (
    <StyledDiv>
      <span className="my-styled-class">Hello!</span>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 0 auto;
  border: 1px solid teal;

  .my-styled-class {
    color: papayawhip;
  }

  .my-styled-class:hover {
    color: palevioletred;
  }
`

export default MyComponent
```

I recommend to use [this VSCode plugin](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) which higlights correctly the CSS inside tagged template literals.

#### Dynamic Styles

styled components also accepts functions/props to make truly dynamic styles.

```js
import React from 'react'
import styled from 'styled-components'

const MyComponent = () => {
  return (
    <StyledDiv primary>
      <span className="my-styled-class">Hello!</span>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 0 auto;
  border: 1px solid ${props => (props.primary ? 'teal' : 'black')};

  .my-styled-class {
    color: papayawhip;
  }

  .my-styled-class:hover {
    color: palevioletred;
  }
`

export default MyComponent
```

My personal approach to organize styles and components is the following:

```bash
|- components
|-- MyComponent
|--- MyComponent.js
|--- MyComponentBase.js
|--- index.js
```

- `index.js` will import/export `MyComponent.js`, is a good practice and is easy when you want to import the component.
- `MyComponent.js` will hold the **styled** version of `MyComponentBase.js`.
- `MyComponentBase.js` will have all the magic, like any other regular React component.

There is one downside tho, most of the automatic documentation libraries like [React Docgen](https://github.com/reactjs/react-docgen) will only see the prop types present in the `MyComponentBase.js`.

## Tailwind CSS

With [Tailwind CSS](https://tailwindcss.com/) you can create your components from scratch rapidly. You will use a bunch of classes that closely map to underlying CSS properties.

Using this CSS framework will take some learning but if you already know CSS it will be easy, for example this two divs will get the same style:

```js
<div style={{
  height: '16px',
  width: '16px',
  textAlign: 'center'
}}></div>

<div className="h-16 w-16 text-center"></div>
```

I do not recommend this option if you're totally new in CSS, first learn CSS properly and then jump into this framework for simplicity and velocity.

### Combine with React

The easiest way is to import from the CDN directly to your `index.html` place the `link` inside the `head`.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tailwindcss@0.7.4/dist/tailwind.min.css"
/>
```

## EXTRA

### React Spring

I want to add [React Spring](https://www.react-spring.io/) to this guide because it's an amazing animation library and brings nice and fluid animations to your project.

```bash
yarn add react-spring
```

With React Spring you will use the hooks that library provides to implement animations, instead of writing complex CSS animations with durations and curve effects you only need to write which prop want to animate.

```js
const props = useSpring({
  opacity: 1,
  from: { opacity: 0 },
})
return <animated.h1 style={props}>hello</animated.h1>
```

The animation is not based on a defined curve or a set duration, under the hood it implements `spring` to bring natural animations.

Be sure to check the [official github repo](https://github.com/react-spring/react-spring).

## Conclusion

Styling in React can be done in multiple ways, which one to use is totally up to you if you are aware of the scope of the CSS classes, but here are my personal preferences:

- For components in a UI library that other projects will consume -> styled-components (CSS locally scoped, easy to open the door for theming with regular class names, automatically vendor prefixed)
- For a project which later will be maintained for other multidisciplinare members -> CSS/Sass modules (Locally scope, treat as JS object, easy to change in the JS logic without changing anything from the `.css` file)
- Working alone and/or fast prototyping -> Tailwind CSS (I left this option for working alone because if other team members are not aware of the Tailwind keywords can be confusing)

So what are you favorite way of doing styling in React? There are a lot of [options](https://michelebertoli.github.io/css-in-js/).
