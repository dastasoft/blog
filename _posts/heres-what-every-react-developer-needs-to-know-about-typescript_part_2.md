---
title: 'Here is what every React Developer needs to know about TypeScript - Part 2'
excerpt: ''
coverImage: '/assets/posts/preview/typescript-react-2.webp'
date: '2022-10-31T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/typescript-react-2.webp'
tags: ['beginners', 'react', 'typescript', 'javascript']
section: 'frontend'
---

Welcome to the second part of this series on TypeScript, in the first part we talked about why to use TypeScript in general, how to use it and an overview of the language. In this second post we will take a closer look at how to use TypeScript in React and how to solve the different challenges you will face when trying to develop an app with React and TypeScript.

## Why React + Typescript

If you want to know [why bother dealing with TS](https://blog.dastasoft.com/posts/heres-what-every-react-developer-needs-to-know-about-typescript) I recommend reading that section from the first part, the same arguments can be used here to defend its use in combination with React.

It's also worth adding that most of the TypeScript code in React is inferred, so in addition to the fact that everything will be examined here in detail most of the time you'll be fine with inferred types and the types already provided by React.

## AnimeTrailers aka the example project

![animetrailers](/assets/posts/content/typescript2/animetrailers-screenshot.webp)

As always a working example project is provided with the article to have real code to refer to and test real implementations.

In this case I have built [AnimeTrailers](https://animetrailers.dastasoft.com/) a dummy application that thanks to [JikanAPI](https://jikan.moe/) provides a list of anime and basic information to watch the latest trailers of your favourite anime.

## Resources

- [Example project source code](https://github.com/dastasoft/animetrailers)
- [Create React App + TypeScript + ESLint + Prettier Boilerplate](https://github.com/dastasoft/react-boilerplate/tree/cra-typescript)
- [Vite + TypeScript + ESLint + Prettier Boilerplate](https://github.com/dastasoft/react-boilerplate/tree/vite-typescript)
- [TS Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Here is what every React Developer needs to know about TypeScript - Part 1](https://blog.dastasoft.com/posts/heres-what-every-react-developer-needs-to-know-about-typescript)

## Setup

### Create React App

For [CRA](https://create-react-app.dev) users, you only need to specify the template:

```bash
npx create-react-app my-awesome-project --template typescript
```

### Vite

Creating a TypeScript project with [Vite](https://vitejs.dev) is as easy as using the CLI and choosing the TypeScript template.

```bash
npm create vite@latest my-awesome-project
```

### Add to existing project

If you want to add TypeScript to a project that is in JavaScript just add TypeScript as a development dependency.

```bash
npm install -D typescript
```

I must warn you that if this is your first encounter with TypeScript I do not recommend that you try it on a project that you have already built, because your experience will be to constantly think that you have something working and that it is all just more work for nothing, and that cannot be further from the real benefits of TypeScript.

## Typing component's props

The first and most common scenario when using TypeScript in a React project is to write the props for a component.

To correctly write the component props you need to specify what properties you are accepting on the component, the type and if it is required or not. 

```ts
// src/components/AnimeDetail/Cover/index.tsx

type CoverProps = {
  url: string
}

export default function Cover({ url }: CoverProps) {
  // ...
}
```

We only use a `url` prop which is a `string` and is a mandatory prop.

Another example with more props and optionals:

```ts
// src/components/AnimeDetail/StreamingList/PlatformLink/index.tsx

type PlatformLinkProps = {
  name: string
  url?: string
}

export default function PlatformLink({ name, url }: PlatformLinkProps) {
  // ...
}
```

With `?` we are indicating that it is an optional parameter, so TypeScript know that the type of `url` in this case will be `string` or `undefined`. Also, consumers of this component will not get an error if they do not pass a `url` prop to the component.

If you have read my previous article you will already be familiar with types, but let's look at one last, more complex example:

```ts
// src/components/AnimeDetail/Detail/index.tsx

type AnimeType = 'TV' | 'Movie'

type DetailProps = {
  liked: boolean
  toggleFav: () => void
  title: string
  type: AnimeType
  episodeCount: number
  score: number
  status: string
  year: number
  votes: number
}

export default function Detail({
  liked,
  toggleFav,
  title,
  type,
  episodeCount,
  score,
  status,
  year,
  votes,
}: DetailProps) {
  // ...
}
```

This time you can see a myriad of types, including a `function` and a custom type `AnimeType`.

So, to summarise, writing props is useful for:

- Actual validation of the prop type from the consumer's side.
  - No more guessing what a component needs.
  - No more opening components source code to check what it does with the data.
- Auto-complete and document.
  - Know directly from the consumer what props and values are needed through auto-completion without knowing in advance.

![autocomplete](/assets/posts/content/typescript2/autocomplete.webp)

Of course, this will absolutely shine on complex components and third party components that come from fancy libraries you use in your project.

### React Types

With React and a lot of libraries you will find tons of pre-built types to ease your experience as a developer. For example in React it is quite common to have the following component:

```ts
// src/components/Layout/index.tsx

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  // ...
}
```

A custom React component that receives other element as children. For those cases you will define `children` as a `ReactNode` type.

#### A warn about React.FC && React.FunctionComponent

You may find code with this syntax for declaring component props:

```ts
type PlatformLinkProps = {
  name: string
  url?: string
}

const PlatformLink: React.FC<PlatformLinkProps> = ({ name, url }) => {
  // ...
}
```

This code works using `React.FC`, or its longer version `React.FunctionComponent`, but you should know that it has some disadvantages and that is why we are not using it in this article:

- You have to use a function expression and you can't use a function declaration, this is a minor point, but I built all components with function declaration on purpose.
- You can't use generics (we'll see this later).
- In the past this caused your props to indirectly accept the `children` property and in this component you don't use it. This was true until React 18, nowadays it doesn't apply.

### Return type of a React component

Last piece of the puzzle, what does a component return? You can use React's built-in types `React.ReactElement`, `React.ReactNode` and `JSX.Element`:

```ts
export default function Favorites(): JSX.Element {
  // ...
}
```

To summarise the answer from this section: **let the TypeScript automatically infer the return type**. If you need a detailed list of the differences between those 3 types I suggest you [have a look at this SO post](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement)


### types vs interfaces

In part 1 we already talked about this but as a reminder we will follow this rule of thumb: *If you write object oriented code - use interfaces, if you write functional code - use type aliases* in combination with *Use interfaces for public API libraries and types for components, state, JSX, etc.* For that reason I included in the boilerplates that ESLint autofixes interfaces to types.

If you want to go deeper into the differences you can read [this post in TS Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) but nowadays most of the features present in an interface are in a type as well and vice versa. 

TLDR; types are more restricted and interfaces can be opened and add more properties.


### Template literals

Inside [AnimeTrailers](https://animetrailers.dastasoft.com/) I have included a simple custom UI that will be useful to demonstrate cases like this, you can check the different simple components in `src/components/UI` but most of them will be explained through this guide.

Let's take a look at the `Position` custom component:

```ts
// src/components/UI/Position/index.tsx

import React from 'react'

import { StyledPosition } from './StyledPosition'

type VPosition = 'top' | 'bottom'
type HPositon = 'left' | 'right'

export type PositionValues = `${VPosition}-${HPositon}`

type PositionProps = {
  children: React.ReactNode
  position?: PositionValues
}

export default function Position({
  children,
  position = 'top-right',
}: PositionProps) {
  return <StyledPosition position={position}>{children}</StyledPosition>
}
```

Position is a simple component to use with any other component with absolute positon and place it on any of the four edges with `top-left`, `top-right`, `bottom-left` and `bottom-right`.

Creating a new type with template literals has no secret if you are already using it in JavaScript, the clever trick here is when you combine template literals `${VPosition}-${HPositon}` with union types `top` | `bottom`, TypeScript will generate all possible combinations of both, so we can generate the four different values we need.


### Exclude

Let's take the previous example and add more values to the union:

```ts
type VPosition = 'top' | 'middle' | 'bottom'
type HPositon = 'left' | 'center' | 'right'

export type PositionValues = `${VPosition}-${HPositon}`
```

This template literal will generate all possible combinations of unions, so we will have `"top-left" | "top-center" | "top-right" | "top-left" | "center-left" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right"`. 

There is one case that is a bit strange, `middle-center`. In this case you may want to simply put `center`, in which case `Exclude` is very useful.

```ts
type PositionValues =
  | Exclude<`${VPosition}-${HPositon}`, 'middle-center'>
  | 'center'
```

Now `PositionValues` will generate `"center" | "top-left" | "top-center" | "top-right" | "middle-left" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right"`. 

With exclude you can remove the `middle-center` and add `center` afterwards with a union.

### Custom HTML components

If you want to create a component that behaves like an `input` but you don't want to write every single property and function of the input HTML, you can achieve this with:

```ts
// src/components/UI/Input/index.tsx

import React from 'react'

import styles from './StyledInput.module.css'

type InputProps = React.ComponentProps<'input'>

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return <input {...props} className={styles.StyledInput} ref={ref} />
  }
)

export default Input
```

With `React.ComponentProps` you can specify which element you are basing your new type on and get everything a real HTML input has to create a custom UI component. But what happens when you want to override some of these properties or forbid their use?

#### Omit

Remember the problem with `React.FC` or other types built in React? But what if you want to take advantage of some of the properties it provides? Let's take a look at the `Tag` UI component:

```ts
// src/components/UI/Tag/index.tsx

import React from 'react'

import { StyledTag } from './StyledTag' // aka a styled span

type TagProps = {
  variant?: 'solid' | 'outlined'
  text: string
} & Omit<React.ComponentProps<'span'>, 'children'>

export default function Tag({ text, variant = 'solid' }: TagProps) {
  return <StyledTag variant={variant}>{text}</StyledTag>
}
```

In this case, this component explicitly passes a `text` to display as `children` of the component. You may not want consumers of this component to use the original `children`, so you can omit that property from the collection given by `React.ComponentProps`.

## Typing Hooks

Now let's deep dive on how to type each of the most used hooks in React.

### useState

In most cases, typing `useState` will require nothing from you, because TS will try to infer the type, on other scenarios, for example when initial value is different than future values, you will specify directly.

```ts
// src/pages/Search.tsx

export default function Search() {
  const [animeList, setAnimeList] = useState<Anime[] | null>(null)
  const [page, setPage] = useState(1)
  // const [page, setPage] = useState<number>(1)
  // ...
}
```

From the state, `page` is type infered as number based on the initial value provided, it will be exactly the same as the version commented down. Also the state setters are automatically typed as `React.Dispatch<React.SetStateAction<number>>` being `number` replaced for the infered/specified type.

On the other hand `animeList` without any explicit type would be `null`, that it's true before the component fetches the necessary data but eventually will contain a collection of `Anime` types for that we explicitly set the type with an union of the two possible types.

Beyond setting the type to null for control initial states on useState there are other similar solutions, like:

```ts
export default function Search() {
  // const [animeList, setAnimeList] = useState<Anime[] | null>(null)
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [anime, setAnime] = useState<Anime>({} as Anime)
  // ...
}
```

*Important to take a look into the third example, in that case works because is not a collection.

The principal difference with this additional solutions is that we're not 100% honest with the compiler, we're saying that at first we have something with the shape the compiler spects because we know that eventually a correct value will be provided and that comes with a risk.


```ts
export default function Search() {
  const [anime, setAnime] = useState<Anime>({} as Anime)
  // ...

  return <div>{anime.coverURL}</div>
}
```

If we don't provide a correct value with this option this can explode and the IDE won't complain at all.

#### Passing state as props

A lot of times we need to pass the state down in the hirearchy and delegate to a children when a state is readed or even setted in those cases you will need to type the props of that component with state types, the best is to understand what types do you need to pass but if you have a hard time with it, you can hover your current state and the IDE will tell you what do you need.

```ts
type FancyComponentProps = {
  anime: Anime,
  setAnime: React.Dispatch<React.SetStateAction<Anime>>
}

const FancyComponent = ({anime, setAnime}: FancyComponentProps) => {
  // ...
}
```

### useReducer

At this point we have almost every tool to define correctly the types for `useReducer`. For the next example even if you can see the final code in the url provided you will find it different, I simplified the example here and we'll cover the real code in the Generics section.

```ts
// src/hooks/useFetch.ts

const enum ACTIONS {
  LOADING,
  FETCHED,
  ERROR,
}

type State = {
  data?: Anime[]
  loading: boolean
  error?: Error
}

type Action =
  | { type: ACTIONS.LOADING }
  | { type: ACTIONS.FETCHED; payload: Anime }
  | { type: ACTIONS.ERROR; payload: Error }

const initialState: State = {
  loading: true,
  error: undefined,
  data: undefined,
}

const fetchReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ACTIONS.LOADING:
        return { ...initialState }
      case ACTIONS.FETCHED:
        return { ...initialState, data: action.payload, loading: false }
      case ACTIONS.ERROR:
        return { ...initialState, error: action.payload, loading: false }
      default:
        return state
    }
  }

const [state, dispatch] = useReducer(fetchReducer, initialState)
```

As always we recieve a `state` and `dispatch` from useReducer when we provide a `reducer function` and an `initial state`. We don't need to anything on the useReducer itself but we must type the `state` and the `actions` because this will define how state and dispatch will behave.

#### initialState

As for the `initial state` we can simplify the process and instead of creating a `State` type we may use `typeof initialState` wherever we need to define a type according to the initial state.

```ts
const initialState: State = {
  loading: true,
  error: undefined,
  data: undefined,
}

const fetchReducer = (state: typeof initialState, action: Action) => {
  // ...
}
```

The pitfall with this version is that we're not controlling future values of `data` and `error` this can work when the type is correct and defined from the first moment, that is not our case here so for that we define a custom type `State`.

#### Actions

We need to specify which actions our reducer will be capable of handle and that is done with unions. The enum part is totally optional but helps to be less error phrone than writing strings on multiple places.


#### reducer function

We only need to specify the types of the params passed to the function that are in fact the ones we created on the above steps.

#### Passing as props

Again, if you need to pass anything from useReducer as prop you will need to type the consumer props accordignly.

- `state` will be the type you defined your `initialState` and/or a custom type `State` like in the previous example
- `dispatch` will be `React.Dispatch<Action>` where `Action` is our custom type for actions.

### useContext

Context in the example project is used to handle a list of liked animes and toggle the state on different points in the app. At this point `useContext` will have no secrets for you because is simply a combination of what you saw until now but let's see an example:

```ts
// src/context/FavContext.tsx

type FavContextType = {
  favList: Favorite[]
  // setFavList: React.Dispatch<React.SetStateAction<Favorite[]>>
  toggleFav: (id: number, favorite: Favorite) => void
}

export const FavContext = createContext({} as FavContextType)

export const FavContextProvider = ({ children }: FavContextProviderProps) => {
  const [favList, setFavList] = useState<Favorite[]>([])

  const toggleFav = (id: number, favorite: Favorite) => { /* ... */ }

  // ...

  return (
    <FavContext.Provider value={{ favList, toggleFav }}>
      {children}
    </FavContext.Provider>
  )
}
```

`useContext` follows the same rules than in `useState` for typing. In this case, initial value will be null but we trick TypeScrpt with `as` and defined an object that will contain an array of `favorited animes` and a function to toggle.

Commented you have the tipically scenario of a setter in case you needed.

For the rest of the code, you already learnt `useState` in previous section so nothing new, with the type `Favorite` useState will determine the necessary types and those types will be available directly on the consumer side.

```ts
// src/components/AnimeDetail/index.tsx

const { favList, toggleFav } = useContext(FavContext)
```

### useRef

`useRef` can be used in two different ways so the typing will be slightly different on each case.

#### DOM references

One of the uses for `useRef` is for holding a reference to a DOM element. 

In the the example project you will find this for performing infinite scroll saving a reference to an observable of the last element of the anime list, with that you can know when the user is viewing that element in the browser and trigger a new fetch.

Let's see an esier and shorter example of useRef for DOM reference, but you can [check the full version of the useRef + observer](https://github.com/dastasoft/animetrailers/blob/main/src/components/AnimeList/index.tsx)

```ts
  const myDomReference = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(myDomReference.current) myDomReference.current.focus()
  }, [])
```

A typical case can be when a page loads automatic focus on an input. You only need to specify the type of the DOM element you're referencing to, in this case `HTMLInputElement`.

A few considerations of the code above:

- The hook will return a read-only property `current`.
- You don't need to manually type `current`, React will handle it through `React.RefObject<HTMLInputElement>` in this case.
- If the DOM element is always present, you can set the initial value to `null!` and avoid the if check.

#### Mutable references

Second use for `useRef` when you want to hold mutable values, for example in cases that you need a variable unique to each instance of a component that survives between renders and does not trigger a re-render.

```ts
const isFirstRun = useRef(true)

useEffect(() => {
  if(isFirstRun) {
    // ...
    isFirstRun.current = false
  }
}, [])
```

Some consideratons you will notice compared with the previous example: 

- Now you can mutate the value inside `current`
- React provides `React.MutableRefObject<boolean>` now is a `MutableRefObject` instead of `RefObject`.

## Forwarding ref

In the example project I use refs to know where is the last element of the list and trigger a fetch of the next "page". If at some point you need to pass a reference to an HTML element like in the section `useRef` typing the props of that component will be slightly different:


```ts
// src/components/AnimeGrid/Card/index.tsx

const Card = React.forwardRef(
(
  { id, coverURL, title, status, score, type, year }: CardProps,
  ref: React.Ref<HTMLImageElement>
) => {
  // ...
})
```

In order to pass the reference you will need to wrap your component with `React.forwardRef` and that will inject alongside the regular props of the component the `ref` which will be any HTML element wrapped into `React.Ref` type.

In this case we know the type of the HTML element we're forwarding to, but if not is your case, this can be a good moment to use generics.

## Generics

If you need to review what generics are, be sure to check the [part 1 under Generics section](https://blog.dastasoft.com/posts/heres-what-every-react-developer-needs-to-know-about-typescript).

As for React concerns let's see one of the examples on where you may need the generics usage.

Let's imagine that you want to create a custom UI component wrapping existing HTML elements but giving a set of custom properties like most component libraries does.

Most of these libraries also provides the flexibility of deciding which HTML element is finally rendered with a property `as` and that is exactly the case of the `Text` UI component. This Text UI component is used to display any text with a set of sizes and colors, also we want to allow the user to choose any HTML element that they need, not contrain to an unique `p` or `span`.

In this scenario you don't know upfront which element the consumer will pass to your component so, you need to use generics to infer the type to whichever they pass. 

So the prop types for the component will be:

```ts
// src/components/UI/Text/index.tsx

type TextOwnProps<T extends React.ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'base' | 'primary' | 'secondary'
  as?: T | 'div'
}

type TextProps<T extends React.ElementType> = TextOwnProps<T> &
  React.ComponentPropsWithoutRef<T>

export default function Text<T extends React.ElementType = 'div'>({
  size = 'md',
  variant = 'base',
  children,
  as = 'div',
}: TextProps<T>) {
  // ...
}
```

Let's examine in detail what is happening there:

- We use `T` for the generic here but you can use any name you want.
- E extends from `React.ElementType` which is the most generic type for HTML elements, with that we will know that anything passed into the component is based on an HTML element instead of making a union of every HTML element possible.
- Second type `TextProps` is used for two things:
  - We need extra properties depending on the type of HTML element, when a consumer uses the Text component as label we want to verify and suggest different properties than when it's a span for that we need to use `React.ComponentProps` in this case we don't need references so we use explicitly the version without ref forwarding.
  - `React.ComponentProps` also provides the `children` prop that we use but as we don't modify it's type we don't need to deal with it like we did on `Omit` section.

With this example, we have a very flexible component that is correctly typed and provides a good developer experience by checking and suggesting props or even it's values.

Inside the example project you can examine the different custom UI components to check the implementation following this same pattern.


## Typing Fetch data

On the example project I included a simple typed hook to fetch data, isn't nothing fancy but I think is a complete example of everything that is explained on this guide.

Let's take a look at some parts of that hook but I encourague you to watch [the real file](https://github.com/dastasoft/animetrailers/blob/main/src/hooks/useFetch.ts) and try to understand all with the different sections explained on this guide.

```ts
// src/hooks/useFetch.ts

type State<T> = {
  data?: T
  loading: boolean
  error?: Error
}

function useFetch<T = unknown>(
  url?: string,
  { initialFetch, delayFetch }: Options = { initialFetch: true, delayFetch: 0 }
): State<T> {
// ...
}
```

- The hook recieves a generic type that we can't know upfront what kind of data will handle, it can be a Pokemon data, Employees data or in this case, etc, In this case Anime data.
- The hook accepts `url` on where to do the fetch and options to decide if the hook performs an initial fetch or in-demand and if there is a delay between fetches.
- Options are setted with default values.
- The hook return a `State` of the type specified by the consumer through generics.
- State type defines that optionally a data of the type defined by the consumer is returned, a looading flag or error if anything goes wrong.

Let's check the usage on the consumers side:

```ts
// src/pages/AnimeDetail.tsx

const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData>>(
    getAnimeFullById(Number(id))
  )
```

- `getAnimeFullById` returns the url for that endpoint.
- useFetch in this case will return a `data` of the type `JikanAPIResponse` which also have different possibilities, in this case `RawAnimeData`.

## Conclusion

