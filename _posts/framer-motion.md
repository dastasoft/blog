---
title: 'How to get cool animations in your React projects'
excerpt: 'In this guide we will use Framer Motion in a basic example project to write animations declaratively and effortlessly with seamless integration with our React ecosystem.'
coverImage: '/assets/posts/preview/framer-motion.webp'
date: '2022-06-02T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/framer-motion.webp'
tags: ['beginners', 'react', 'style', 'javascript']
section: 'frontend'
---

In this guide we will apply Framer Motion animations to a basic example project to enrich the user experience with animations.

The project is made with Next and TypeScript, but you can apply all the concepts to a normal React project with JavaScript.

## Sample Project

You can find [in this repo](https://github.com/dastasoft/memory-game) the sample project, a basic memory game that has different screens for introduction, selecting the difficulty, selecting the deck (with different animes to play) and the game itself. As in other memory games, you have to discover all the pairs within the time limit.

![board](/assets/posts/content/framer-motion/board.png)

The best approach to following this guide is to use [the initial version](https://github.com/dastasoft/memory-game/tree/starting-point) which is fully functional without animations, test the different sections of code in the article and review the final version if you had any problems during the process.

You can check a live demo of the sample project:

- [Without Framer Motion](https://anime-memory-game.wo-animations.dastasoft.com/)*
- [Final version](https://anime-memory-game.dastasoft.com/)

*In this version, CSS animations are added to at least make the game playable.

## What is Framer Motion?

It's an [animation library](https://www.framer.com/motion/) for React made by Framer that aims to allow us to write animations declaratively and effortlessly with seamless integration with our React ecosystem.

You can achieve the same results using pure CSS but Framer Motion will allow you to quickly introduce nice and smooth animations while keeping your code simpler, working with props as you are used to in React and giving you the possibility to react to state changes and other React behaviours.

Also, if you're not quite used to CSS animations this can be a good introduction to them with a more developer-friendly syntax thanks to the intuitive syntax we'll be using.

You will be able to run simple and complex animations, transitions and even sequential animations with a couple of props in your currently working components.

## Installation

Simply install the `framer-motion` package in the project:

```bash
yarn add framer-motion
npm install framer-motion
```

Once installed, simply import the `motion` component and use it in any HTML tag:

```jsx
import { motion } from "framer-motion"

<motion.div animate={{ scale: 0.5 }} />
```

Motion will wrap all HTML elements and add animation properties that we will see throughout this guide.

## Basic Animations

As we have seen previously, adding an animation is as simple as using the `animate` property on a component wrapped with `motion`.

So, as a first test, let's animate the `Play` button located on the `Intro` page.

```tsx
// components/Intro

import { motion } from 'framer-motion'

const Intro = ({ next }: { next: () => void }) => {
  return (
    <div className="flex-vertical">
      <h1>Memory Game</h1>
      <motion.button
        onClick={next}
        animate={{ scale: 1.5 }}
        transition={{ delay: 1 }}
      >
        Play
      </motion.button>
    </div>
  )
}

export default Intro
```

- We wrapped the `button` tag with the `motion` component, this allows us to use additional properties such as `animate`.
- The animation provided is for scaling up by 1.5
- To be able to see the size difference we add an additional property `transition`, which we will see in detail later, to delay the animation by 1 second.

With those few lines we have an animation ready. For now we're using the JS object syntax we're used to, but later we'll see more options for passing animations in the `animate` property.

In the example above, framer motion defaults us to an `initial` property with all the default values, but we can define it and override whatever we want for the different states of the animation.

```tsx
// components/Intro

import { motion } from 'framer-motion'

const Intro = ({ next }: { next: () => void }) => {
  return (
    <div className="flex-vertical">
      <h1>Memory Game</h1>
      <motion.button
        onClick={next}
        initial={{ rotate: -360, scale: 3 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Play
      </motion.button>
    </div>
  )
}

export default Intro
```

With that we switch from a big Play button to a normal size button while rotating.

### Transitions

We will use transitions to control the animation between states, for example in the last example we have delayed the starting point by 1 second but we can do much more.

We are going to change the last Play button a bit to test some of the possibilities that transitions offer, for example we want the animation to scale in an infinite loop instead of just firing once.

```tsx
// components/Intro

import { motion } from 'framer-motion'

const Intro = ({ next }: { next: () => void }) => {
  return (
    <div className="flex-vertical">
      <h1>Memory Game</h1>
      <motion.button
        onClick={next}
        animate={{ scale: 1.5 }}
        transition={{
          duration: 0.4,
          yoyo: Infinity,
        }}
      >
        Play
      </motion.button>
    </div>
  )
}

export default Intro
```

- We have removed the delay prop but it will work with it as well.
- Now the duration of 0.4 seconds is the total duration of the animation.
- Finally `yoyo` is a special property to go back and forth between the initial state and the animation, in this case, an infinite number of times. With this property you can control how many times you want to trigger an animation.

Transitions allow us to define the type of animation we want to use, we can use:

- `Tween` → Animations that are based on time duration, when you define a `duration` without any type, this is the default type used.

```tsx
// components/Intro

<motion.button
        onClick={next}
        animate={{ rotate: 360 }}
        transition={{
          type: 'tween',
          duration: 0.4,
        }}
      >
        Play
</motion.button>
```

- `Spring` → Simulates natural physics as animations, if you have tried [react-spring](https://react-spring.io/) this follows the same principle.

```tsx
// components/Intro

<motion.button
        onClick={next}
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
        }}
      >
        Play
</motion.button>
```

- `Inertia` → Such animations will decelerate from an initial speed.

```tsx
// components/Intro

<motion.button
        onClick={next}
        animate={{ rotate: 360 }}
        transition={{ type: 'inertia', velocity: 450 }}
      >
        Play
</motion.button>
```

Try these different options in the sample project and check the resulting animations.

**Tip: Some of the above settings are incompatible with some properties, if you use TypeScript, errors will appear if any combination doesn't make sense.**

Another useful use of transitions is orchestrations, which we will explain later, but there are a few things to know first.

### Variants

As you can see, the code is getting bigger and bigger and soon, these new props will have even more relevance than those related to React logic. We can use `variants` to isolate code related to animations and much more.

With variants we need to specify different tags that we will assign to different stages of animations.

Let's refactor one of the Play button examples with variants:

```tsx
// components/Intro

import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
}

const Intro = ({ next }: { next: () => void }) => {
  return (
    <div className="flex-vertical">
      <h1>Memory Game</h1>
      <motion.button
        onClick={next}
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
      >
        Play
      </motion.button>
    </div>
  )
}

export default Intro
```

Now we replaced all the code inside the component with:

- The tag related to the `initial` state, in this case `hidden` (you can name it anything you want).
- The tag related to the `animate` state (also contains the transition details).
- The `variants` object that this component uses.

**Tip: You can move all variants to a separate file as you would do with normal CSS or any other CSS-in-JS library to simplify your component.**

**Tip: If the parent component and the children share the same tags, you only need to write it once in the parent, the children will have the same tags by default.**

### Orchestration

In some cases we want to trigger the animations one after the other, in which case orchestration + variants will come in handy. 

For example, we will animate the title of the deck selection and once the animation is finished, we will make animations for each of the children.

```tsx
// components/SelectDeck

import { motion } from 'framer-motion'

import { DECKS } from '@/utils/Decks'

import Button from '../ListedButton'
import { childVariants, containerVariants } from './SelectDeck.variants'

type Props = {
  next: () => void
  setDeck: (deckName: string) => void
}

const SelectDeck: React.FC<Props> = ({ next, setDeck }) => {
  const handleSelect = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDeck(event.currentTarget.value)
    next()
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Select Deck</h2>
      <div className="flex-vertical stack">
        {Object.keys(DECKS).map((theme: string) => (
          <motion.div key={theme} variants={childVariants}>
            <Button onClick={handleSelect} value={theme}>
              {theme}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default SelectDeck
```

Before going through the variant code, note that in this component, the motion component `container` has the `initial` and `animated` props defined but the motion `children` does not. As mentioned above, the children get the animation props from the parent by default, so if we set the same tags there is no need to specify others.

```tsx
// components/SelectDeck//SelectDeck.variants.ts

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export { containerVariants, childVariants }
```

- In `transition` we define two props that define the orchestration `when` and `staggerChildren`.
    - In this case, we specify `beforeChildren` so that the parent's animation runs and completes before the children's animation.
    - The `staggerChildren` parameter will apply each child animation one by one with a 0.4 sec delay between them.

Other ways of orchestration are:

- Using `delay` as we did in the first example.
- Delaying the children's animation with `delayChildren` instead of making it depend on the parent animation.
- Repeating animations with `repeat`.

With orchestration you can make powerful combinations.

### Gestures

In addition to React's built-in listeners, framer motion includes gestures that allow us to perform animations in other situations such as `hover`, `tap`, `pan`, `viewport` and `drag`.

For example, let's go back to our Play button in the intro screen, and perform other animations when we mouse over and tap the button:

```tsx
// components/Intro

import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.5,
  },
  tap: {
    scale: 0.5,
  },
}

const Intro = ({ next }: { next: () => void }) => {
  return (
    <div className="flex-vertical">
      <h1>Memory Game</h1>
      <motion.button
        onClick={next}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        Play
      </motion.button>
    </div>
  )
}

export default Intro
```

- We add the `whileHover` and `whileTap` listeners to the new `hover` and `tap` variants, as always you can name it whatever you want. With these changes, now when we mouse over the button it will scale up and when we click it, it will scale down.

You don't need to use variants to use the gestures, as in the previous examples, you can place the object directly on the listeners instead of the tag.

In this example we are only modifying the scale, but you can make complex animations and even transitions like the ones you have seen so far, think of the gestures as just another state in the animation chain.

Another very useful gesture is `whileInView`, with which you can easily control the triggering of animations when an element appears in the viewport, in one of my last articles about [how to use Redux Toolkit](https://blog.dastasoft.com/posts/how-to-get-better-easier-state-management-redux-toolkit) I made an [example project](https://github.com/dastasoft/redux-pokemon-tcg-shop) that uses this feature:

```tsx
// components/Card/Card.tsx

<motion.div
      initial="hidden"
      variants={cardVariants}
      animate={controls}
      whileInView="show"
      viewport={{ once: true }}
    >
...
</motion.div>
```

*I simplified this component for this article but you can see the actual code in the link above.

Using `whileInView` and passing in the variant we want to run is all we need to trigger the animations at that precise moment. We also use `viewport` `once` to trigger the animation only once and not every time this element returns to the view.

### Keyframes

Another way to have more control over the behaviour of the animation is to make it with keyframes, this is the way to go when you want to combine different properties and have an exact control over the values in time.

For example, let's add an animation for the cards when they are placed on the board:

```tsx
// components/Card/

import { motion } from 'framer-motion'

import { Card as TCard } from '@/types'

import styles from './Card.module.css'

const cardVariants = {
  hidden: { scale: 0, rotate: 0 },
  flip: {
    scale: [1, 0.5, 0.5, 1],
    rotate: [0, 180, 360, 0],
    transition: {
      duration: 0.8,
    },
  },
}

type Props = {
  card: TCard
  handleSelection: (card: TCard) => void
  flipped: boolean
  disabled: boolean
}

export default function Card({
  card,
  handleSelection,
  flipped,
  disabled,
}: Props) {
  const handleClick = () => {
    if (!disabled) handleSelection(card)
  }

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      animate="flip"
    >
      <div className={`${styles.inner} ${flipped ? styles.flipped : ''}`}>
        <img className={styles.front} src={card.imageURL} alt="card front" />
        <img
          src={`${card.imageURL.split('/').slice(0, -1).join('/')}/cover.jpg`}
          alt="card back"
          className={styles.back}
          onClick={handleClick}
        />
      </div>
    </motion.div>
  )
}
```

Changes made:

- Converted to `motion` div the container and added `cardVariants`, `hidden` and `flip` states.
- In `cardVariants` instead of using a value in `scale` and `rotation` , an array is used to specify the exact values in each keyframe.

If no duration is specified, the frame will space the changes placed on the keyframes evenly.

## Controlling animations

We've seen a lot of options on how to transition between animations, but there are some situations where you need to directly control when to start and/or end an animation. In those cases we can invoke a ready-to-use hook called `useAnimation`.

As a simple example, let's say we want to do two animations, apart from the transition from hidden to visible, on the Play button intro screen:

```tsx
// components/Intro

import { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'

const buttonVariants = {
  hidden: {
    x: '500vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', delay: 0.3, duration: 1 },
  },
  loop: {
    scale: 1.5,
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    },
  },
}

const Intro = ({ next }: { next: () => void }) => {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible')
      return controls.start('loop')
    }

    sequence()
  }, [controls])

  return (
    <div className="flex-vertical">
      <h1>Memory Game</h1>
      <motion.button
        onClick={next}
        variants={buttonVariants}
        initial="hidden"
        animate={controls}
      >
        Play
      </motion.button>
    </div>
  )
}

export default Intro
```

- As you can see, after the transition from `hidden` to `visible` we want to do another animation, which in this case is an Infinity yo-yo animation, one of the solutions is to take the moment of the component's mount point with `useEffect` and perform the necessary actions.
- The button now has `controls` as an `animate` value which is extracted from the `useAnimation` hook.
- When the component is mounted, we can use `controls` to trigger any animation, which returns a promise that resolves when the animation ends.

Controls supports both the variants and the JS object we saw at the beginning of the article.

## Exit animations

In addition to `initial` and `animate` there is a third state `exit` that we can use to make animations when the component is removed from the DOM.

In this case, we want each game screen to exit the screen in the opposite direction it came from to give the feeling of sliding screens.

```tsx
// components/Intro/

import { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'

const containerVariants = {
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
}

const Intro = ({ next }: { next: () => void }) => {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible')
      return controls.start('loop')
    }

    sequence()
  }, [controls])

  return (
    <motion.div
      className="flex-vertical"
      variants={containerVariants}
      exit="exit"
    >
      <h1>Memory Game</h1>
      <button onClick={next}>Play</button>
    </motion.div>
  )
}

export default Intro
```

- In this case, we add an `exit` variant that moves the content to the left, away from the viewport.

If you try this code, it won't work, you will have to specify the parent element that needs to be aware of the presence of the components with `AnimatePresence`. In this case, the parent component is the single page containing the whole game:

```tsx
// pages/index.tsx

import { useState } from 'react'

import { AnimatePresence } from 'framer-motion'
import type { NextPage } from 'next'

import Game from '@/components/Game'
import Intro from '@/components/Intro'
import SelectDeck from '@/components/SelectDeck'
import SelectDifficulty, { Difficulties } from '@/components/SelectDifficulty'
import { Deck } from '@/types'
import { DECKS } from '@/utils/Decks'

const UIStates = {
  IntroScreen: 0,
  DifficultyScreen: 1,
  DeckScreen: 2,
  GameScreen: 3,
} as const

const Home: NextPage = () => {
  const [UIState, setUIState] = useState<number>(UIStates.IntroScreen)
  const [deck, setDeck] = useState<Deck>(DECKS['Dragon Ball'])
  const [difficulty, setDifficulty] = useState(Difficulties.Normal)

  return (
    <div>
      <AnimatePresence>
        {UIState === UIStates.IntroScreen && (
          <Intro next={() => setUIState(UIStates.DifficultyScreen)} />
        )}
        {UIState === UIStates.DifficultyScreen && (
          <SelectDifficulty
            next={() => setUIState(UIStates.DeckScreen)}
            setDifficulty={setDifficulty}
          />
        )}
        {UIState === UIStates.DeckScreen && (
          <SelectDeck
            next={() => setUIState(UIStates.GameScreen)}
            setDeck={(deckName: string) => setDeck(DECKS[deckName])}
          />
        )}
        {UIState === UIStates.GameScreen && (
          <Game
            selectedDeck={deck.slice(0, difficulty)}
            backToDifficulty={() => setUIState(UIStates.DifficultyScreen)}
            backToDeck={() => setUIState(UIStates.DeckScreen)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
```

And I'm sorry to say that, despite adding `AnimatePresence`, it still doesn't work! And that's because framer doesn't distinguish which component we are trying to animate when switching screens, so you need to specify an unique key for each screen.

```tsx
{UIState === UIStates.IntroScreen && (
	<Intro
		next={() => setUIState(UIStates.DifficultyScreen)}
		key={UIStates.IntroScreen}
	 />
 )}
```

Now it's working, but you'll see some weird animation where the first screen and the second screen exist at the same time. So, to fix that and the last step to get this animation working, is to tell framer that we want to delay the following animations until the exit animation is completely finished.

```tsx
<AnimatePresence exitBefoeEnter>
```

## Animations for SVG

A cool utility is the ability to animate the SVG, and it's as easy and simple as using `pathLength` to animate the SVG path drawing process.

First, let's add this SVG to the introduction page:

```tsx
// components/Intro/index.tsx

<svg
        className={styles.Container}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <motion.path
          fill="none"
          stroke="var(--primary)"
          strokeWidth={6}
          strokeLinecap="round"
          variants={pathVariants}
          d="M256 224C238.4 224 223.1 238.4 223.1 256S238.4 288 256 288c17.63 0 32-14.38 32-32S273.6 224 256 224zM470.2 128c-10.88-19.5-40.51-50.75-116.3-41.88C332.4 34.88 299.6 0 256 0S179.6 34.88 158.1 86.12C82.34 77.38 52.71 108.5 41.83 128c-16.38 29.38-14.91 73.12 25.23 128c-40.13 54.88-41.61 98.63-25.23 128c29.13 52.38 101.6 43.63 116.3 41.88C179.6 477.1 212.4 512 256 512s76.39-34.88 97.9-86.13C368.5 427.6 441 436.4 470.2 384c16.38-29.38 14.91-73.13-25.23-128C485.1 201.1 486.5 157.4 470.2 128zM95.34 352c-4.001-7.25-.1251-24.75 15-48.25c6.876 6.5 14.13 12.87 21.88 19.12c1.625 13.75 4.001 27.13 6.751 40.13C114.3 363.9 99.09 358.6 95.34 352zM132.2 189.1C124.5 195.4 117.2 201.8 110.3 208.2C95.22 184.8 91.34 167.2 95.34 160c3.376-6.125 16.38-11.5 37.88-11.5c1.75 0 3.876 .375 5.751 .375C136.1 162.2 133.8 175.6 132.2 189.1zM256 64c9.502 0 22.25 13.5 33.88 37.25C278.6 105 267.4 109.3 256 114.1C244.6 109.3 233.4 105 222.1 101.2C233.7 77.5 246.5 64 256 64zM256 448c-9.502 0-22.25-13.5-33.88-37.25C233.4 407 244.6 402.7 256 397.9c11.38 4.875 22.63 9.135 33.88 12.89C278.3 434.5 265.5 448 256 448zM256 336c-44.13 0-80.02-35.88-80.02-80S211.9 176 256 176s80.02 35.88 80.02 80S300.1 336 256 336zM416.7 352c-3.626 6.625-19 11.88-43.63 11c2.751-12.1 5.126-26.38 6.751-40.13c7.752-6.25 15-12.63 21.88-19.12C416.8 327.2 420.7 344.8 416.7 352zM401.7 208.2c-6.876-6.5-14.13-12.87-21.88-19.12c-1.625-13.5-3.876-26.88-6.751-40.25c1.875 0 4.001-.375 5.751-.375c21.5 0 34.51 5.375 37.88 11.5C420.7 167.2 416.8 184.8 401.7 208.2z"
        />
</svg>
```

And the real magic behind it, the `pathVariants`

```tsx
// components/Intro/Intro.variants.ts

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 4,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
}
```

I've overcomplicated this with a bunch of additional properties that we already know about at this point but the key is to go from 0 `pathLenght` to 1, framer motion will follow the path description of our SVG and draw that path with the animation values we specify.

## Conclusion

With this simple project we have seen how easy, reliable and aligned with our current skills it is to include both simple and complex animations in our projects.

This is just an introductory guide to framer-motion, there is a lot more inside the library, especially a lot of utility hooks to make even crazier animations effortlessly and advanced topics like 3D animations by combining this library with [react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) for example.

Be sure to check out [the official documentation](https://www.framer.com/docs/introduction/) and try out different animations to take your projects to a new level.
