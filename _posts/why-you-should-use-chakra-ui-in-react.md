---
title: 'Why you should use Chakra UI in React'
excerpt: ''
coverImage: '/assets/posts/preview/chakraui-react.webp'
date: '2021-04-25T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/chakraui-react.webp'
tags: ['beginners', 'react', 'style', 'nextjs']
section: 'frontend'
---

If you want to build an application or a website you need to take care a lot of stuff and in that sea of options which component library, css or ui framework will take a big role in the final version of your product.

I've tried some component libraries like MaterialUI, Antd, React Boostrap and other CSS frameworks like styled-components, TailwindCSS and so on, even I tried to do some mini set of components for myself with [React and Bit]().

Maintaining a library, or a set of components for your products that follows consistency is very hard and picking a library for UI purposes can be a mess if you are too restricted or the API is too complicated. At the end of the day **you're trying to save time and focus on what really matters to you**.

I won't lie, Chakra UI appeared in my radar because I'm a Naruto fan and the first second I tought I could style like a ninja.

<figure style="text-align: center;">
  <img src="https://media.tenor.co/images/cdd97372f67962d3c6b39e31b3aa05b0/raw" alt="naruto running" />
  <figcaption>Chakra UI, style like a ninja. Not an official slogan but I think they must use it 🤫</figcaption>
</figure>

## Benefits

So what are the main benefits of using this component library.

- All components provide by Chakra UI are accessible following WAI-ARIA standards which I think this is a pending asignature for most of us. If you are not aware on why this is so important, please check out  [this article]().
- Components are easy to theme.
- Combine components, components are small and are easy to combine to form bigger structures.
- Different color modes, switching between the typical light and dark or even any other colors will be a peace of cake.
- You will do more with less in less time, which in fact is the goal of most libraries and frameworks.
- The community is quite small yet (which can be a good thing, you can join from the begining), but it's very active.

After test other libraries I would describe Chakra UI as if you have a clean default design like in Material UI with the simplicity of colors and responsive design provided by TailwindCSS plus the atomic design of the components of Antd and a convenient layer of accessebility all in one package.

## Resources

You can go directly to the [sample project](https://github.com/dastasoft/handy-tools) which uses almost everything I will tell in this article or try [the final PWA version](https://handy-tools.dastasoft.com/).

And be sure to check the [official Chakra UI webpage](https://chakra-ui.com/).

## Prerequisites

The sample project and the code samples in this article are done with [NextJS](https://nextjs.org/) but you can use with any React based library/framework like [Gatsby](https://www.gatsbyjs.com/) or [Create React App](https://create-react-app.dev/).

The code samples that appear in this article will be almost identical as in any React platform you decide to go.

## Installation

You need to install Chakra UI and the peer dependencies like [emotion]() and [framer-motion]().

```sh
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

```sh
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

Once you have installed the packages, you need to set up a provider.

```js
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '@/components/Layout'

import '@/styles/globals.css'
import theme from '@/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
```

In the case of CRA you will set up your provider in the `index.js` surrounding your App.

## Handy Tools Project

I built a [simple project](https://github.com/dastasoft/handy-tools) with NextJS and Chakra UI which has different tiny utilities like a password generator or a word counter, very basic stuff.

The idea was test the component library with the first project and check the speed up building the next utilities.

I must say that the learning curve was very easy, maybe because I'm used to use [styled-components]() but was by far the easiest component library I've tried until now. The developer experience was good too, so I'm sure I'll return to this project and add more utilities for fun.

## Atomic Components

One of the things I love the most from Chakra UI is how the components are designed to be small and be able to compose them together. The component library provides atomic components and you will be able to build bigger elements fast and easy like you are already used to do with regular HTML tags.

For example, let's take a look of the composition of the Layout component in Handy Tools:

```js
// components/Layout.js
import { Box, Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

<Flex color="white" direction="column" minH="100%">
  <Header h="4rem" />
  <Box
    color="black"
    flex="1"
    padding="1rem"
    margin="0 auto"
    width="100%"
    backgroundColor="linkedin.100"
  >
    {children}
  </Box>
  <Footer h="3rem" />
</Flex>
```

`Box` and `Flex` are the most basic components you can use, they are like regular `<div>` tags, as you can guess, Flex is the same than Box but has `display: flex` on it.

Most of your initial time with the library will be checking the [official Chakra UI documentation](https://chakra-ui.com/docs/layout/box), they have plenty of examples and variations that for sure you will find valuable and enough to build your project.

You will find components for the layout of your webpage, for every component in a form, alerts, modals, loadings, typography, navigation, media and even drawers which are quite useful for mobile resolutions and skeleton ui for display loading state for your components and prevent [layout shift]()

The first contact with Chakra UI for me was quite similar of working with pre build components in React Native.

### Simple Grid

### Drawer

### Skeleton

## Theming

One of the core values of Chakra UI is the theming, and it's so easy to adapt to your preferences.

Inside styles folder I create a `theme.js` file which has:

```js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Lato',
    body: 'Roboto',
  },
})

export default theme
```

In this file you can define all the general theme for your application such as font sizes, breakpoints, line heights and so on.

For the colors Chakra UI has a default theme inspired by Tailwind CSS of colors going from a range of intensity of 50 to 900.

### Extending even more the theme

One of the things that can be a barrier when you use a component library is that maybe your style or the style that the designer provides to you will be different from the base design. 

That could become a pain in the neck, make all those changes can end on thinking that you need more work adapting the library than doing from scrach.

Let's check this example that is not from Handy Tools, I extracted from the official documentation:

```js
// styles/theme.js
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
  },
})

export default theme
```

I think it's clear how much effort Chakra UI's team has put to make the library easly adaptable to your needs. This is only a small example I think if I want to cover all the possibilities of customizing this librarie that will get an entire article, be sure to check [the official documentation about theming](https://chakra-ui.com/docs/theming/advanced).

Maybe this file can be very big if you need a lot of changes, but the base theme with all the accessebility and consistency still will be available for you.

## Hooks

## Comparison with other libraries

There are other well know libraries like [Material UI]() and [Antd]() or [React Bootstrap]().

### Material UI

My biggest concern about Material UI it's the API, you must learn a lot to use the library and you will get a very nice and clean design but on the other side it's a design hard to customize to the point that seems yours.

The beauty of Chakra UI it's you can leave the library as is or change a few colors (like I did in Handy Tools) or customize to the point to see as your own library and all of that without pages and pages of API.

### Antd

I use Antd before Chakra UI and the atomic components was a blast too, very easy to use and easy documentation to follow but for the customization I find harder than Chakra UI. 

In Antd they done the customization using Less.

### React Bootstrap



## Separation of Concerns

Maybe one of the things that yoy might not like from Chakra UI it's the fact they're mixing props related to the css with the logic of the application, which in fact is not a problem of Chakra UI rather than the design of any CSS-in-JS solution.

In the Handy Tools project, the last utilitie I added follows the same idea than styles in React Native:

```js
// pages/px-converter.js
export default function PxConverter() {
  return (
    <Box>
      <Heading {...styles.heading}>Px Converter</Heading>
      <Select
        onChange={onOptionChange}
        defaultValue="pxToREM"
        {...styles.select}
      />
    </Box>
  )
}

const styles = {
  heading: {
    marginBottom: '0.5em',
  },
  flex: {
    alignItems: 'center',
    marginLeft: '0.2em',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    bg: 'white',
    marginRight: '0.5em',
  },
  select: {
    bg: 'white',
    maxWidth: '400px',
    margin: '0 auto',
  },
  grid: {
    maxWidth: '600px',
    margin: '1.5em auto',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    marginX: '1em',
  },
  buttonGroup: {
    justifyContent: 'center',
    size: 'sm',
    marginX: '0.5em',
  },
}
```

I didn't see this format in any Chakra UI document but I copy the idea from React Native's createStylesheet pattern, with this you can easly divide the CSS part from the props that are related to the logic.

But yes, at the end of the day the concern about having separate standard CSS files can be a downside, check the next section to find if Chakra UI suits your needs or not.

## Chakra UI might be for you if...

- You work on a small / medium project.*
- You do not want / can invest the effort on creating a component library.
- Accessibility it's important for you and do not want / can invest the effort.
- You or your team are more skilled with JS than CSS.**
- You are trying to establish a common architecture in your team.***
- You need your own component library but starting with a solid base.
- You are using another component library which you find that does not speed up your developing time.

*I talk about size of the project because CSS-in-JS have one problem in common, they are JS at the end of the day, for the browser it's easy to process CSS files rather than executing JS especially if your app is changing data very often. Common web applications will suit with Chakra UI perfectly.

**Don't think you can avoid learning CSS because of Chakra UI or any other CSS-in-JS solution, the syntax is pretty similar and knowing propper CSS will help a lot.

**I found that the weakest point of many front end developers is maintaining a good architecture in the CSS, having a solution like Chakra UI which blends prefectly with the props they already know from React components helps keeping the project clean and mantainable.

## Chakra UI might not be for you if...

- You are working on a big project and/or changes a lot of data.
- You or your team are more skilled with CSS than JS.
- You need to share your style files across multiple projects which don't have Chakra UI.

## On top of Chakra UI

## Conclusion