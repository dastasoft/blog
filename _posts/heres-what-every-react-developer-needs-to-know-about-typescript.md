---
title: 'Here is what every React Developer needs to know about TypeScript - Part 1'
excerpt: 'Is it worth using TypeScript with React in 2021? Find out why through examples, you do not need to have any previous TypeScript knowledge.'
coverImage: '/assets/posts/preview/typescript-react.webp'
date: '2021-05-28T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/typescript-react.webp'
tags: ['beginners', 'react', 'typescript', 'javascript']
section: 'frontend'
---

If you've been using React for a while, you'll have noticed some cases where the freedom and wild nature of JavaScript works against you (and not because of JS 😄), especially if you're working in a team. **You may not know it, but you need TypeScript or at least, you need to test it**.

Let me be clear, I love JavaScript and the freedom it provides, for a long time I was "against" TypeScript.

So I want to go on a journey together, figuring out if TypeScript is worth using or TS is only for people who don't know how to code properly (this was an inside joke in my team a time ago!).

The idea behind this article is to go through the basics of TS and understand the benefits so you can decide if you want those benefits or not, in a second part I will cover the specifics of TS with React.

## Resources

If you want you can go directly to [sample project](https://shopping-list.dastasoft.com/) or [source code](https://github.com/dastasoft/shopping-list) that is a very simple project to test the TypeScript developer experience without Webpack or any other add-ons, just plain TypeScript converted to JavaScript.

The other resources I provide in this article are boilerplates for [React](https://reactjs.org/) and [NextJS](https://nextjs.org/):

- [React TypeScript Boilerplate](https://github.com/dastasoft/react-boilerplate/tree/typescript)
- [Nextjs TypeScript Boilerplate](https://github.com/dastasoft/nextjs-boilerplate/tree/typescript)

If you like programming games, try [PhaserJS](https://phaser.io/) you be able to make games for the browser with TypeScript and it's a fun way to learn TS.

Also be sure to check out [The Official Handbook of TS](https://www.typescriptlang.org/docs/handbook/intro.html) with tons of useful documentation and examples.

## Why ESLint, Prettier and Husky

On the boilerplates I use Airbnb's ESLint rules, Prettier's recommended rules and Husky's pre-commits actions, this will be very useful especially in a team environment where you need everyone to follow the same style of code, but you can also benefit as a solo developer or as a learner.

The Airbnb rules can be strange at some points, but they provide a great explanation and examples so you can decide if the rule makes sense for you or not, and if not you can disable it in the `.eslintrc` file. 

I found that for junior profiles or people who are just starting out with JS or TS these rules are very useful, so I recommend you at least try to include them in a project and check the results 😉

## What is TypeScript

[TypeScript](https://www.typescriptlang.org/) or TS is an open source language developed and maintained by Microsoft, TS is also:

- A multi-paradigm language (like JavaScript).
- An alternative to JavaScript (more precisely a superset)
- Allows the use of static types
- Extra features (generics, interfaces, tuples, etc which will be explained in detail below)
- Allows for gradual adoption*.
- Can be used for front-end and back-end development (just like JS)

*You can turn an existing project into a TS project by changing the files one by one, it's not a big bang change.

The browser does not understand TS code, it must be *transcompiled* into JS. JS has a dynamic type mapping value and TS has static types which is less error prone.

In React you already *transcompile* JS with [Babel](https://babeljs.io/), so having to *transcompile* the code is not an extra inconvenience nowadays.

## Why bother dealing with TS?

That's the thing, why bother with TS when you are happy with JS and everything is fine? A while back, as I said before we had an inside joke about languages like TS with types (I was doing Java at the time by the way), that you need types if you don't know how to code correctly.

TypeScript, Java and a bunch of other languages have **static typing** that will define a type associated with a variable and the type will be checked during compile time. Once you define something to be a *string* or a *boolean* you can't change its type.

JavaScript on the other hand has **dynamic typing**, you can assign a string to a variable, and later convert it to a boolean, a number or whatever you want, the type will be dynamically assigned at run time.

But when you look at the TS code on the Internet, you can see...

![sintactic sugar](/assets/posts/content/typescript/syntaxsugar.jpeg "Syntactic Sugar, syntactic sugar everywhere.")

So going back to my team's old joke, yes indeed **it was correct**, if you know exactly what you're doing, you don't need someone constantly telling you that this is a string and only a string, and if at some point it becomes a boolean or something else.... I know what I'm doing!

But the truth is that we are not perfect, and things happen:

- Work in a hurry.
- Having a bad day.
- Leaving an idea on Friday and when you come back on Monday you don't have the same picture of the situation.
- Working in a team, and not everyone has the same level and/or vision.

For the same reasons we use an IDE, IDE extensions, syntax highlighting and linterns instead of the notepad app. TypeScript can fit into these aids.

![airbnb bugs](/assets/posts/content/typescript/airbnb.jpg "Airbnb claims that 38% of bugs on Airbnb could have been prevented by using TypeScript.")


### Some mistakes in examples

Let's look at some basic examples with and without TS in the equation:

### Please, I know what I'm using

```jsx
// App.js
import { MemoryRouter as Router } from 'react-router-dom'

import Routes from './routes'

export default function App() {
  return (
    <Router basename="/my-fancy-app">
      <Routes />
    </Router>
  )
}
```

Do you see anything unusual in the code above? If so, congratulate yourself.

This file was in my boilerplate for a long time, it's not a bug but... `MemoryRouter` doesn't need any `basename` at all. This happens because at some point in the past `BrowserRouter` was used which in fact needs a `basename` property.

With TS you will be notified by `No overload matches this call` which tells you that there is no signature for that component with that property.

**TypeScript not only works as static typing, but it helps you better understand the needs of other libraries,** and by others I mean components and functions from third parties or your co-workers.

Yes I can hear the answer, you must properly know the libraries you are using, and again yes you are right but assuming that everyone involved in a project knows every "external" library and the nuances of the versions can be a daunting task.

### The devil's flag

```tsx
let isVerified = false;
verifyAmount();

// isVerified = "false"
if (isVerified) proceedPayment();
```

I have seen this error many times, I don't have the exact code and each time it has a different nuance but you can get the point, you have a boolean variable that is responsible for letting some code run or not and at some point someone else or maybe yourself in an error, turn the boolean into a string and a non-empty string is a true value.

With TypeScript you would have had the error: `The type 'string' is not assignable to the type 'boolean'` and this error will occur at compile time, even if you don't have your application running at the time, so the chances of the error making it to production are very small.

Again, we can apply the same rule as before, if you code correctly this doesn't happen, if you follow the rules of Clean Code and be careful with what you are doing this can also be avoided, **TypeScript is not meant to allow us to be lazy and disorganized but it can be a good ally**, as syntax highlighting can help to avoid some errors or detect unused variables.

### I though the cat was alive inside that box

```tsx
const MONTH_SELECT_OPTIONS = MONTHS.map((month) => ({
  label: getMonthName(month),
  value: month,
}))

export default function PaymentDisplayer() {
  const [currentMonthFilter, setCurrentMonthFilter] = useState(
    MONTH_SELECT_OPTIONS[0]
  )

  const onChangeHandler = option => {
    setCurrentMonthFilter(option.value)
  }

  return (
    <select onChange={onChangeHandler}>
      {MONTH_SELECT_OPTIONS.map(({ label, value }) => (
        <option key="value" value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
```

It is very common (and perhaps not recommended) to change the state's type, sometimes it is on purpose like having an `isError` flag and suddenly changing it from boolean false to error message string (and again not recommended at all!), but in other scenarios it is by mistake, like the example above.

The person who wrote this in the first instance thought that in `currentMonthFilter` he would store the actual option of the select, an `HTMLOptionElement` with label and value. Later, the same person on another day or perhaps another developer makes the `changeHandler` and sets the value instead of the full option.

The above example works, and is simplified for learning, but imagine this on a large scale, especially in those components where actions are passed underneath as props.

Here TypeScript would help us in two ways:

- Static typing will throw an error when trying to change the type of `currentMonthFilter` from `{label: string, value: number}` to `number`.
- The person coding the next step of calling a service to retrieve payments with that filter will know through *IntelliSense* what type they will get from the state and whether it matches the type the service needs.

**So TypeScript also allows us to inspect from the IDE the different functions, parameters and documentation of third-party libraries and components of our peers**.

Through these examples (which are perhaps not too representative to be honest) we can conclude that TypeScript tries to help us in a React environment with:

- Being coherent in typing and consistent with static types
- Providing documentation and *IntelliSense* of the available possibilities
- Detecting bugs early

## Setup TypeScript

In this article we will use the Global Installation, because I think it is better to first dive into TypeScript in isolation without any Webpack, React or any other variables and see how it works and what problems it solves, but let's see how to install in the different environments:

### Installation with CRA (Create-React-App)

- You can use the CRA template for TS with `yarn create react-app my-app --template typescript`
- You can use the ready-to-go boilerplate provided in the resources section.

If it is an existing project, you can use the following command, and convert your js files to ts/tsx files.

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

### Installation with Nextjs

- If you install TypeScript as a dependency, Nextjs will create a `tsconfig` file for you once you start it.
- If you create a `tsconfig` file, Nextjs will provide instructions for installing TypeScript into the project once you start it.
- You can use the ready-to-use boilerplate provided in the resources section.

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

### Global Installation

```bash
npm install -g typescript

#or

yarn install --global typescript
```

### TypeScript Compiler (tsc)

Once you have installed TypeScript on your system or with any of the other options mentioned above, you can use the TypeScript compiler, the `tsc` command.

Let's test the compiler with the minimum configuration:

- Create a new empty folder
- Place an `index.html` with the basic HTML5 structure inside.
- Create an empty `index.ts` file at the same level as `index.html`.
- Open a terminal and type `tsc --init` (assuming you have installed global typescript) this will create for you a `tsconfig.json` (we will look at this file in detail in the next section).

You will have something like this:

```sh
- index.html
- index.ts
- tsconfig.json
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Now you need to include the ts file in the HTML but, browsers don't understand TypeScript they understand JavaScript, so you can modify your `index.html` to:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script src="./index.js"><script/>
</html>
```

Open a new terminal and type `tsc`. Your `index.ts` file will be converted into an `index.js` that the browser can read.

Instead of typing the `tsc` command every time you want to compile the TS file into a JS file, you can put TypeScript in watch mode with `tsc -w`.

Now my recommendation is that you open both TS and JS files side by side, and type regular JS into the `index.ts` file, and test what the outputs are. (We'll use this a lot in the next sections to test what TS generates).

![side by side](/assets/posts/content/typescript/side-by-side.png "Do some test using tsc -w option")

### tsconfig.json

If you are following the article, you have created this file with the `tsc --init` command which creates the `tsconfig.json` with some default configuration and a bunch of comments which are great to start with.

Let's look at some of the properties that might be useful to get you started:

- `target` is the version of JS we are converting our TS code to, depending on the browsers you want to support you may need to set some older version. It can be a good learning resource too, try playing with different versions and see what JS code is generated.
- `module` defines what kind of syntax you will use for modules, `commonjs` which is the default uses `require/module.exports` and modern JS (ES6+) uses `import/export`.*
- `lib` In React and Nextjs boilerplates I use this setting, you need it to specify additional libraries you will use in your project and check additional types, e.g. DOM related.
- `jsx` In React you will need to set it to at least `preserve` this mode assumes that another tool will compile that part (Babel in this case) but TSC will do the type checking.**
- `outDir` where the files will be placed after the compilation, for example in most React projects it will be placed in a `build` folder.
- `rootDir` where the files will be taken for compilation, on most React projects this will be `./src`
- `strict` enables a set of rules for type checking which results in a stronger check for what is considered "correct", I recommend starting with this on false when you are learning and when you feel confident enough turn it on and check what new red flags you have, but remember you will get the full potential of TS with this option enabled. This option also enables all the strict options below, which you can disable individually.
- `include` the folder(s) you want to include to be compiled, for example the `src` folder
- `exclude` the folder(s) you want to prevent from being compiled, for example the `node_modules` folder.

*If you want to use `import/export` you need to change `target` to ES6 or higher, in the example project we will use this syntax so check the rest of the article for this.

**You can set this property to `react` or `react-native` this is used if you want TSC to compile your JSX code into regular JS code, in most cases we will leave this property to `preserve` which will send the file as regular JSX and Babel/Webpack will do the rest.

In the sample project for this article, we will take the files `rootDir` from `./src` and will place it `outDir` in `public` folder.

## Shopping List

![Shopping List](/assets/posts/content/typescript/shopping-list.png "Shopping List in a desktop web browser")

The sample project is very basic stuff, you can insert different items and their quantities in different sections and later you can remove them while you shop and check what you have to buy next.

The idea behind this example project is to get used to TypeScript and the general workflow, because once you get into the React environment a lot of the magic is done for you by Webpack or any other bundler, so I think it's important to know the very basic things and later enjoy the work that the bundler does for us.

Let's see what we can use from TS to get a better, less error-prone code base.

### Modules

If you want to use ES6 `import/export` modules you must configure `tsconfig` with:

- **target**: es6 or higher
- **module**: es2015 or more

And in the `index.html` file you must add the module type:

```html
<script type="module" src="app.js"></script> 
```

However, the use of modules has two drawbacks:

- Compatibility with older browsers is less likely.
- Files in production will be split, so you will have multiple requests for each file (this can be fixed by using a bundler like Webpack).

### Types

In JavaScript types are assigned at runtime, when the interpreter sees your variable and the value, it decides what type it is, so we can do things like this:

```tsx
let job = "Warrior"; // string
let level = 75; // number
let isExpansionJob = false; // boolean

level = "iLevel" + 75 
// now it's an string
```

In TypeScript types are assigned at compile time, so once the type is defined it will be protected under that signature.

```tsx
let job: string = "Samurai";
let level: number = 75;
let isExpansionJob: boolean = true;

level = "iLevel" + 75 
// Error, Type string cannot
// be assign to type number!
```

#### Inference

In fact, it is not necessary to explicitly state the type you want the variables to be, TS can infer the type by their value.

```tsx
let job = "Samurai";
let level = 75;
let isExpansionJob = true;

level = "iLevel" + 75 
// Error, Type string cannot 
// be assign to type number!
```

In React, which we'll look at in Part 2 of this article in detail, you'll see the inference as well, for example in `useState`

```jsx
const [currentMonthFilter, setCurrentMonthFilter] = useState("January")

useEffect(() => {
   setCurrentMonthFilter(1) 
   // Error, Type number cannot 
   // be assign to type string!
}, [])
```

#### Any and Unknown

I have said all along that the TS has static types, but there is a nuance to that statement.

```tsx
let level: any = 10;

level = "iLevel" + 125; 
// OK, still type any

level = false; 
// OK, still type any
```

Welcome back to JavaScript! `any` is a dynamic type for when you don't know what type the variable will be in the future but it somehow reverses all the advantages that TS provides.

```tsx
let level: any = 10;

level = "iLevel" + 125;

level = false;

let stringLevel: string = level;
console.log(typeof stringLevel);
stringLevel.replace("false", "true");
```

When you assign `level` to `stringLevel` of type `string` it does not become a string, it is still a boolean, so the `replace` function does not exist and the code fails at runtime. `Uncaught TypeError: stringLevel.replace is not a function`

For that we have another type which is the safe counterpart of `any` type:

```tsx
let level: unknown = 10;

level = "iLevel" + 125;

level = false;

let stringLevel: string = level; 
// Error
```

With `unknown` you can assign any type as in `any` but this time the compiler gets the error when you try to assign to another type. So if you don't know what type it will be, try using unknown instead of any.

#### Arrays

```tsx
let job = "Red Mage";
let level = 75;
let isExpansionJob = false;
let jobAbilities = ['Chainspell', 'Convert'];

jobAbilities.push('Composure'); // OK
jobAbilities.push(2); // Error
jobAbilities[0] = 2; // Error
```

In the example above, we declared an array of strings `jobAbilities`, we can add more strings, but we cannot add other types or change the current values to values of other types, because in the declaration we have made the inference of type `string[]`.

```tsx
let job = "Red Mage";
let level = 75;
let isExpansionJob = false;
let jobAbilities = ['Chainspell', 'Convert'];
let swordSkill = ["B", 5, 144, 398]; 

swordSkill.push("B+"); // OK
swordSkill.push(230); // OK

swordSkill[1] = "C"; 
// OK, the type is not position related

swordSkill.push(true); // Error
```

As in the previous example, type inference is done in the declaration, we now declare an array of strings and numbers for `swordSkill`.

If you want to explicitly declare the types for the arrays we saw in the examples:

```jsx
let jobAbilities: string[] = ['Chainspell', 'Convert'];
let swordSkill: (string | number)[] = ["B", 5, 144, 398];
```

By the way `|` is for doing an `union` of different types.

#### Objects

Let's go back to the example, but now in the form of an object:

```tsx
let job = {
  name: "Summoner",
  level: 75,
  isExpansion: true,
  jobAbilities: ["Astral Flow", "Elemental Siphon"]
};

job.name = "Blue Mage"; // OK
job.level = "Four" // Error
job.avatars = ["Carbuncle"]; // Error
```

- `job.level = "Four"` cannot be done because we cannot change the type of a property, properties has static types as well.
- `job.avatars = ["Carbuncle"]` we cannot add new properties, the `job` object already has a type that has a defined structure.

```tsx
let job = {
  name: "Summoner",
  level: 75,
  isExpansion: true,
  jobAbilities: ["Astral Flow", "Elemental Siphon"]
};

job = {
  name: "Blue Mage",
  level: 4,
  isExpansion: true,
  jobAbilities: ["Azure Lore", "Burst Affinity"]
}; // OK

job = {
  name: "Corsair",
  level: 25,
  isExpansion: true
}; // Error
```

We can assign another object, because we define the object as `let` but it has to be in the exact same form.

Take a moment and think, how many times do you repeat object structures in the front-end without any kind of check like this? How many times have you made a typo by typing `data.descrption` and days later you discover the bug? If not, I can promise you that this will happen sooner rather than later.

Let's check the explicit type of our example:

```tsx
let job: {
  name: string;
  level: number;
  isExpansion: boolean;
  jobAbilities: string[];
} = {
  name: "Summoner",
  level: 75,
  isExpansion: true,
  jobAbilities: ["Astral Flow", "Elemental Siphon"]
};
```

As you can see, this gets a bit bigger for a simple object, so in this case we can use `type aliases`.

#### Aliases

```tsx
type Job = {
  name: string;
  level: number;
  isExpansion: boolean;
  jobAbilities: string[];
};

let Summoner: Job = {
  name: "Summoner",
  level: 75,
  isExpansion: true,
  jobAbilities: ["Astral Flow", "Elemental Siphon"]
};

let BlueMage: Job = {
  name: "Blue Mage",
  level: 4,
  isExpansion: true,
  jobAbilities: ["Azure Lore", "Burst Affinity"]
};
```

With type aliases we can define a common type for reuse. In React, DOM and other libraries you will find a lot of ready-to-use defined types.

### Functions

The syntax of the functions is quite similar to JS, but you can specify the type of the parameter and the type of the return.

```tsx
type Enemy = {
  name: string;
  hp: number;
  level: number;
  exp: number;
};

let attack = (target: Enemy) => {
  console.log(`Attacking to ${target.name}`);
};

attack = "Hello Enemy"; // Error
```

I use an arrow function, but you can also use normal function declarations. There are two different things for functions between JS and TS:

- You specify the type of the parameters you pass to the function, like our `target: Enemy`.
- The variable `attack` is given the type of the function's return, so you cannot change its type afterwards.

The type of the function is described as follows:

```tsx
let attack = (target: Enemy): void => {
  console.log(`Attacking to ${target.name}`);
};
```

The `void` type is used when the return type is nothing, and it is also not necessary to explicitly set the type:

```tsx
// let attack = (target: Enemy): number => {
let attack = (target: Enemy) => {
  return target.hp - 2;
};
```

As with `any` the `void` type has some nuances:

```tsx
let attack = (target: Enemy): void => {
  console.log(`Attacking to ${target.name}`);
};

attack = (target: Enemy): number => {
  return target.hp - 2;
};

// lizard has 200hp
console.log(attack(lizard)); // 198
```

The example above has no errors, even if you think you have changed `attack` from `(target: Enemy) => void` to `(target: Enemy) => number` it is still `void`.

Check what happens if you define the function with the `number` first.

```tsx
let attack = (target: Enemy) => {
  return target.hp - 2;
};

attack = (target: Enemy) => {
  console.log(`Attacking to ${target.name}`);
}; // Error

let attackResult = attack(lizard);
```

`Type '(target: Enemy) => void' is not assignable to the type '(target: Enemy) => number'`. `Type 'void' is not assignable to the type 'number'`. So, `void` works as `any` in this scenario.

For the `attackResult` the type will be `number`, there is no need to specify it, TS will infer the type from the return type of the function.

#### Optional parameters

Optional parameters can be defined in functions with `?`

```tsx
let heal = (target: Player | Enemy, spell: Spell, message?: string) => {
  if (message) console.log(message);
  return target.hp + spell.power;
};

heal(player1); // Error
heal(player1, cure, "Healing player1"); // OK
heal(skeleton, cure); // OK
```

The first call won't work because we need to pass at least two parameters, but the second and third are fine, `message` is an optional parameter, when not passed it will be received as `undefined`.

If you compare the last example with a simple JS function:

```jsx
let heal = (target, spell, message) => {
  if (message) console.log(message);
  return target.hp + spell.power;
};

heal(player1); // Error
heal(player1, cure, "Healing player1"); // OK
heal(skeleton, cure); // OK
```

The basic behavior will be the same, but the difference is that the error will appear at runtime, because in the first call you cannot call `power` from an undefined value.

As you can see from these examples, working with functions is safer in TS because you don't need to rely on what happens outside, you know what parameters must arrive and what form they take. The same goes for the people using your function, they will know exactly what parameters are needed, the form and what they will get from the function.

### Enums

With enums we can define a collection of constants.

```tsx
enum BattleMenu {
  ATTACK,
  MAGIC,
  ABILITIES,
  ITEMS,
  DISENGAGE
}

enum Equipment {
  WEAPON = 0,
  HEAD = 1,
  BODY = 2,
  HANDS = 3,
  LEGS = 4
}

console.log(BattleMenu.ATTACK, Equipment.WEAPON); 
// 0 0
```

Enums are auto-indexed by default, both statements in the example above are equivalent.

Enums can also store strings, for example in React I often use enums to store paths:

```tsx
enum Routes {
  HOME = "/",
  ABOUT = "/about",
  BLOG = "/blog"
}
```

### Generics

```tsx
const getPartyLeader = (memberList: Player[]) => {
  return memberList[0];
};

const partyLeader = getPartyLeader(partyA);
```

We want to implement a `getPartyLeader` function that returns the party leader group that is first in the array.

What if we want to support other types besides `Player`? We can come up with this solution for now:

```tsx
const getPartyLeader = (memberList: Player[] | Enemy[]) => {
  return memberList[0];
};

const partyLeader = getPartyLeader(partyA); 
// Player[] | Enemy[]
```

OK, now we can pass a `Player` group or an `Enemy` group but our `PartyLeader` constant can be either, so the type check is `Player[] | Enemy[]`.

If we want to assign the type exactly one way is to use generics:

```tsx
const getPartyLeader = <T>(memberList: T[]) => {
  return memberList[0];
};

const partyLeader = getPartyLeader(partyA); // Player
```

As `partyA` is full of `Player` types, `partyLeader` will be of type `Player`. But let's check the syntax:

- `T` is the common way to define a generic, but you can call it whatever you want.

Now the problem can be, as with `any` that T accepts everything, so we can adjust what kind of things we want to be able to pass to that function:

```tsx
type Player = {
  name: string;
  hp: number;
};

type Enemy = {
  name: string;
  hp: number;
};

type Spell = {
  name: string;
  power: number;
};

const getPartyLeader = <T extends { hp: number }>(memberList: T[]) => {
  return memberList[0];
};

const playerPartyLeader = getPartyLeader(partyOfPlayers); // Ok
const enemyPartyLeader = getPartyLeader(partyOfEnemies); // Ok
const whatAreYouTrying = getPartyLeader(spellList); // Error
```

We can now only pass types containing the `hp` property.

### Tuples

As we saw before, an Array can contain different types but is not restricted to position, the Tuple type is just to cover that:

```tsx
type Weapon = {
  name: string;
  damage: number;
};

type Shield = {
  name: string;
  def: number;
};

const sword: Weapon = {
  name: "Onion Sword",
  damage: 10
};

const shield: Shield = {
  name: "Rusty Shield",
  def: 5
};

let equipment: [Weapon, Shield, boolean];

equipment = [sword, shield, true]; // OK
equipment[2] = false; // OK

equipment = [shield, sword, false]; // Error
equipment[1] = true; // Error
```

We now have an array-like type, which cares about where the types are placed.

### Classes

With ES6 classes were added to JavaScript so there is no big difference between JS classes and TS classes.

```tsx
class Job {
  public name: string;
  private level: number;
  readonly isExpansion: boolean;

  constructor(name: string, level: number, isExpansion: boolean) {
    this.name = name;
    this.level = level;
    this.isExpansion = isExpansion;
  }
}

const whiteMage = new Job("White Mage", 75, false);

console.log(whiteMage.name); // "White Mage"
console.log(whiteMage.level); // Error
console.log(whiteMage.isExpansion); // false

whiteMage.name = "Blue Mage"; // Ok
whiteMage.level = 50; // Error
whiteMage.isExpansion = true; // Error
```

In TS classes you have access modifiers for the properties of a class:

- **public** - properties and methods will be accessible from all locations, this is the value by default.
- **private** - you can only access to the property inside the same class.
- **protected** - limits the access to the class and sub classes.
- **readonly** - mark the property as immutable.

### Interfaces

Similar to what we saw with `type aliases`, we can define a type through an `interface`.

```tsx
interface Enemy {
  name: string;
  hp: number;
}

let attack = (target: Enemy): void => {
  console.log(`Attacking to ${target.name}`);
};
```

So, it seems to be the same as `type aliases`, right? Which one to use then? Both have been gaining capabilities over the different versions of TS and the nuances between them are now very slight. I like to follow this rule of thumb from [ŧhis article which explains in detail the differences](https://konstantinlebedev.com/type-aliases-vs-interfaces/):

***If you write object oriented code - use interfaces, if you write functional code - use type aliases.***

So in React we are more used to write functional code so use `type aliases`.

### DOM Manipulation

In React we won't use (directly) much DOM manipulation but I think it's useful to know how it works.

#### Retrieving elements from the DOM

```tsx
// HTMLFormElement | null
const form = document.querySelector("form");

// HTMLElement | null
const otherForm = document.getElementById("myFancyForm");

// HTMLSelectElement
const select = document.createElement("select"); 
```

When we perform `document.querySelector("form")` our constant `form` is inferred with type `HTMLFormElement` or `null`, but in the second example, we get a form via its ID, and the TS does not know what exact HTML element it is, so it gives a more generic type `HTMLElement`.

```tsx
const form = document.querySelector("form");

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(e);
}); // Error
```

TS doesn't know if it will find anything in the HTML about the query selector, so it can't assign the `addEventListener` function to a possible null type. You can fix this in three ways.

I promise you that you will find that element:

```tsx
// HTMLFormElement
const form = document.querySelector("form")!; 
```

With `!` you tell TS not to worry, he will find it, it can't be `null`.

Do it only if it is not null:

```tsx
const form = document.querySelector("form");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(e);
});
```

You may have already seen `?` of [JS Optional Chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

It's type casting time:

```tsx
const otherForm = document.getElementById("myFancyForm") as HTMLFormElement;

otherForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(e);
});
```

You tell TS what type it will get when it finds that element, with this, you make sure it will be `HTMLFormElement` and not `null`.

## Conclusion

As we saw, TypeScript puts in a lot of extra syntax that in the final code is not present at all, but that extra effort makes us justify our data structure decisions all the time and be consistent throughout the application.

Sure, working with TypeScript is more time-consuming, especially in the beginning, but it can be a lifesaver in projects that receive a lot of updates, changing requirements or above all, staff turnover.

Coding isn't just about making an efficient algorithm, you're going to be working with other people (even if you're working as a solo developer at some point you might publish your work, seek collaboration or help), in that scenario good communication between members is key.

I like to think of TypeScript as the Babel for humans, you can optimize your code for the CPU with Babel, but you need something to scale and guide others around your ideas and vice versa.

Only one question remains, **when to use TypeScript**?

- If you work with more people or plan to publish your code, chances are you want the code to be as readable and representative of your ideas as possible.
- If you're working on a large project.*

*Every big project starts as a small project, so be careful with this statement about only using it on "big" projects.

It has been a long article no doubt, if you have reached this point I must really thank you for your effort and passion, my initial idea was not so broad but I wanted to explain the whys and wherefores. I hope you enjoy this article and if you already switched from JS to TS, are using both, are considering it, at some point thought about it but didn't like it or any other situation **I would like to read about your experience**.