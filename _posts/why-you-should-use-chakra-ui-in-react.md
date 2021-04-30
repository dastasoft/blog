---
title: 'Why you should use Chakra UI in React'
excerpt: 'Beautiful and accessible component library to speed up your development. Styling like a ninja.'
coverImage: '/assets/posts/preview/chakraui-react.webp'
date: '2021-04-30T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/chakraui-react.webp'
tags: ['beginners', 'react', 'style', 'nextjs']
section: 'frontend'
---

If you want to build an application or a website you need to take care of many things and in that sea of options which component library, css or ui framework will take a big role in the final version of your product.

I have tried some component libraries like Material UI, Antd, React Boostrap and other CSS frameworks like styled-components, TailwindCSS and so on, I even tried to make some mini set of components for myself with [React and Bit](https://github.com/dastasoft/react-ui-components).

Maintaining a library, or a set of components for your products that follows consistency is very difficult and choosing a library for UI purposes can be a mess if you are too constrained or the API is too complicated. At the end of the day **you're trying to save time and focus on what really matters to you**.

I'm not going to lie, Chakra UI popped up on my radar because I'm a Naruto fan and in the first second I thought I could style it like a ninja.

![naruto running](/assets/posts/content/naruto-running.gif "Chakra UI, styling like a ninja. It's not an official slogan but I think they should use it. 🤫")

## Benefits

So what are the main benefits of using this component library.

- All components provided by Chakra UI are accessible following WAI-ARIA standards which I think is a pending subject for most of us. If you don't know why this is so important, please check out [this article](https://dev.to/mokkapps/why-a-good-frontend-developer-should-care-about-web-accessibility-545m).
- Components are easy to theme, expand and fully customize.
- Combine components, components are small and are easy to combine to form bigger structures.
- Different colour modes, switching between the typical light and dark colours or even any other set of colours will be a piece of cake.
- You will do more with less in less time, which is in fact the goal of most libraries and frameworks.
- The community is still quite small (which can be a good thing, you can join from the beginning), but it is very active.

## Resources

You can go directly to the [sample project](https://github.com/dastasoft/handy-tools) that uses almost everything I'm going to talk in this article or try [the final PWA version](https://handy-tools.dastasoft.com/).

And be sure to check the [official Chakra UI webpage](https://chakra-ui.com/).

## Prerequisites

The example project and the code samples in this article are made with [NextJS](https://nextjs.org/) but you can use it with any React-based library/framework such as [Gatsby](https://www.gatsbyjs.com/) or [Create React App](https://create-react-app.dev/).

The code samples in this article will be almost identical to any React platform you choose to use.

## Installation

You need to install Chakra UI and the peer dependencies such as [emotion]() and [framer-motion]().

```sh
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

```sh
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

Once the packages are installed, a provider need to be configured.

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

In the case of CRA you will configure your provider in the `index.js` surrounding your App component.

## Handy Tools project

I built a [simple project](https://github.com/dastasoft/handy-tools) with NextJS and Chakra UI that has different small utilities like a password generator or a word counter, very basic stuff.

The idea was to test the component library with the first project and test the speed of building the following utilities.

I must say that the learning curve was very easy, maybe because I'm used to using [styled-components](https://styled-components.com/) but it was by far the easiest component library I've tried so far. The developer experience was also good, so I'm sure I'll come back to this project and add more utilities for fun.

## Atomic Components

One of the things I like most about Chakra UI is how the components are designed to be small so you can compose them together. The component library provides atomic components and you can build bigger elements quickly and easily as you are used to doing with normal HTML tags.

For example, let's look at the Layout component composition in Handy Tools:

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

`Box` and `Flex` are the most basic components you can use, they are like regular `<div>` tags, as you can guess, Flex is the same as Box but has `display: flex` in it.

Most of your initial time with the library will be spent going through the [official Chakra UI documentation](https://chakra-ui.com/docs/layout/box), they have a lot of examples and variations that for sure you will find valuable and sufficient for building your project.

You will find components for the layout of your webpage, for each component of a form, alerts, modals, loadings, typography, navigation, media and even drawers which are quite useful for mobile resolutions and skeleton ui to show the loading status of your components and avoid [cumulative layout shift](https://web.dev/cls/)

The first contact with Chakra UI for me was quite similar to working with pre-build components in React Native.

## Theming

One of the core values of Chakra UI is the theming, and it is very easy to adapt it to your preferences.

Inside the styles folder I create a `theme.js` file that has:

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

In this file you can define all the general theme of your application such as font sizes, breakpoints, line heights, etc.

For colours Chakra UI has a default theme inspired by Tailwind CSS with colours ranging from 50 to 900.

### Expanding further the theme

One of the things that can be a barrier when using a component library is that maybe your style or the style provided by the designer is different from the base design. 

That can be a headache, making all those changes can end up thinking that you need more work adapting the library than doing it from scratch.

Let's see this example extracted from the official documentation:

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

I think it's clear how much effort the Chakra UI team has made to take the library easly adaptable to your needs. This is just a small example I think if I want to cover all the customisation possibilites of this library that would be enough for a whole article, be sure to check [the official documentation about theming](https://chakra-ui.com/docs/theming/advanced).

Maybe this file can be very large if you need a lot of changes, but the base theme with all the accessibility and consistency still will be available to you.

### Responsive

Working with responsive styles is very easy, forget about media-queries and rewriting css classes (you can use it if you need to of course).

Chakra UI works with default breakpoints but you can create your own:

```js
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})
```

Let's say you have a div and you want to resize it according to different breakpoints:

```js
<Box width={[300, 400, 500]}>
  I am a div
</Box>
```

The array will be matched internally so:

- 300 will be applied from 30em
- 400 will be applied from 48em
- 500 will be applied from 62em

Another syntax for responsive values can be:

```js
<Box width={{ sm: '300px', md: '400px', xl: '500px' }}>
  I am a div
</Box>
```

In the example above we are doing the same thing but we are targeting a specific breakpoint. To get the same result in the array example we need to pass a null to skip the `lg` breakpoint: `[300, 400, null, 500]`.

With this syntax you don't need any media queries (Chakra UI will do it under the bonnet), but if you need to use media queries check out the next section on Hooks.

### Dark Mode

The components provided by Chakra UI support dark mode. The only configuration you need to provide is a `ColorModeScript`:

#### NextJS

```js
// pages/_document.js
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import theme from '@/styles/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

#### CRA

```js
// index.js
import ReactDOM from "react-dom"

import App from "./App"
import theme from "./theme"

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById("root"),
)
```

Let's check in the next section which hooks you need to use to switch between topics.

## Hooks

Chakra UI also provides a collection of handy hooks to work faster.

### useColorMode

In the previous section we were configuring our application with dark mode, let's see how to build a button to switch between light and dark mode.

```js
// components/ColorChanger.js
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ColorChanger() {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  )
}
```

`useColorMode` provides the `toggleColorMode` function and that's all we need to switch between the two themes, try this hook and see how all the components included in the library switch automatically without any configuration.

#### useColorModeValue

In the example above you can see `useColorModeValue` this hook is very useful to assign different colours depending on the theme we are in. For example:

```js
// components/WordCounters.js
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

export default function WordCounters({ value, caption }) {
  const bg = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
    <Flex flexDirection="column" alignItems="center" padding="1rem" bg={bg}>
      <Text fontSize="3xl" fontWeight="bold">
        {value}
      </Text>
      <Text>{caption}</Text>
    </Flex>
  )
}
```

In this example we are changing the background of this component from `whiteAlpha.900` in the light theme to `gray.800` when we switch to the dark theme.

### useMediaQuery

As I said before, if we need to use media-query we can use this hook:

```js
import { useMediaQuery } from "@chakra-ui/react"

function Example() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

  return (
    <Text>
      {isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}
    </Text>
  )
}
```

With the help of this hook you can execute code when the media query is triggered.

## Comparison with other libraries

There are other well know libraries like [Material UI](https://material-ui.com/) and [Antd](https://ant.design/) or [TailwindCSS](https://tailwindcss.com/).

### Material UI

My biggest concern about Material UI is the API, you have to learn a lot to use the library and you will get a very nice and clean design but on the other hand it is a difficult design to customize to the point that it looks like your own.

The beauty of Chakra UI is that you can leave the library as it is or change some colours (like I did in Handy Tools) or customise it to the point where it looks like your own library and all that without pages and pages of API.

### Antd

I use Antd before Chakra UI and the atomic components were awesome too, very easy to use and easy to follow documentation but for customisation I find it more difficult than Chakra UI.

In Antd they did the customisation using Less.

### Tailwind CSS

I love working on projects with Tailwind CSS, it definitely speeds up the development process and I find it very useful when it comes to getting things done. The performance is better and if you or your team have experience with bootstrap, you will get the knowledge in no time.

The problem I see with Tailwind CSS is keeping the code clean and especially in projects with more members, having a good architecture for that part is not easy. Things like accessibility or keyboard navigation have to be handled manually.

With Chakra UI in the end it's all props like in any other React component, so I find it easier to use it for teamwork.

## Separation of Concerns

Maybe one of the things you don't like about Chakra UI is the fact that it mixes css-related utilities with the application logic, which is not really a problem of Chakra UI but of the design of any CSS-in-JS solution.

In the Handy Tools project, the last utility I added follows the same idea as the styles in React Native:

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

I copy the idea from React Native's createStylesheet pattern, with this you can easly split the CSS part of the props that are related to the logic.

But yes, in the end the concern about having separate standard CSS files can be a drawback, check the next section to see if Chakra UI suits your needs or not.

## Chakra UI might be for you if...

- You are working on a small/medium sized project.*
- You don't want to / can't invest the effort in creating a library of components.
- Accessibility is important to you and you don't want to / can't invest the effort.
- You or your team are more proficient with JS than CSS.**
- You are trying to establish a common architecture in your team.***
- You need your own component library but from a solid base.
- You are using another component library that you find doesn't speed up your development time.

*I'm talking about the size of the project because CSS-in-JS have a common problem, they are JS after all, it's easier for the browser to process CSS files instead of running JS, especially if your application is changing data very often but common web applications are perfectly suited to Chakra UI's performance.

**Don't think you can avoid learning CSS because of Chakra UI or any other CSS-in-JS solution, the syntax is quite similar and knowing proper CSS will help a lot.

**The weakest point of many front end developers is maintaining CSS files, having a solution like Chakra UI that blends seamlessly with the props we already know from React components helps to keep the project clean and mantainable.

## Chakra UI might not be for you if...

- You're working on a big project and/or changing a lot of data.
- You or your team are more proficient with CSS than JS.
- You need to share your style files between several projects that don't have Chakra UI.

## On top of Chakra UI

- [Chakra UI Pro](https://pro.chakra-ui.com/) A collection of bigger components made by the creators of Chakra UI, you can find some free components that are very common and useful.
- [Choc UI](https://choc-ui.tech/) Another collection of big components for developing common webpages blazing fast. They have a nice roadmap of future components so be sure to check out.

## Conclusion

If you need a good quality of components ready to start your next project and/or want to customize the components having a good starting point I think Chakra UI has a perfect balance of effort/results.

For me doing Handy Tools, besides being a very small example project for this article, was a good experience, I would describe Chakra UI as having a clean default design like in Material UI with the simplicity of colours and responsive design provided by TailwindCSS plus the atomic design of the Antd components and a convenient accessibility layer all in one package.
