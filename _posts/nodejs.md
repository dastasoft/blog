---
title: 'Node'
excerpt: 'Node'
coverImage: '/assets/posts/preview/node-express.webp'
date: '2021-07-23T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/node-express.webp'
tags: ['beginners', 'node', 'express']
section: 'backend'
---

I'm sure you've heard of Node.js but maybe you haven't delved into it or you only have a general idea of what it is and what it's for. I want to explain what Node is and why you should use it, especially if you are in web development and want to expand your tool belt or your job opportunities. We are also going to see why to use some libraries and frameworks that are built on top of Node to make our life easier and our code cleaner.

Through this guide we will see what `Node` and `Express` is and how it works, build a REST API to store and retrieve data, test endpoints and upload our application.

By the end of this series you will have a complete overview of the MERN stack (MongoDB, Express, React and Node) and testing skills.

## Roadmap

I want to give you also a roadmap of this series, the idea is that starting from a basic knowledge of Node and Express, we will see how to store and retrieve data from the server but for now using only the file system. In future guides we will see how to transform this into a real database data retrieval/storage and even how to deploy to the cloud.

In this series we will also create a React application that will use this back-end we are creating now. If you use or have just started using Next.js you may have noticed that Next.js comes with a Node "inside", the `api.js`. I think it is important to experiment with flat Node before you first encounter it inside Next.js but we will see how much of the code we are building today is reused in a project built with Next.js too.

## TypeScript

In the sample project I will be using TypeScript instead of plain JavaScript, you can follow it without worries because the syntax is quite similar but if you wonder why you should bother dealing with TS instead of JS I recommend you read [my last post](https://blog.dastasoft.com/posts/heres-what-every-react-developer-needs-to-know-about-typescript).

My last post was for TypeScript on the front-end but everything explained there is applicable here. If in the front-end TS is useful in the back-end it is even more useful because back-end development usually has more logic and let's say more critical than front-end development, but take this statement with a grain of salt.

## Resources

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [Project Sample](https://github.com/dastasoft/mars-pot-backend)

## Project Sample

In this guide we are going to work on a simple REST API that stores and retrieves data from JSON files stored on the server. This REST API is intended to build a job posting application, where users can enter a company, and different job postings.

## What is Node.js?

As you know, we are divided into front-end and back-end, until Node.js was released, if we think of JavaScript it was directly targeted at front-end development.

With Node.js, we can run JavaScript on the server side or even directly on a computer. Well, technically a server is a computer, but you get the point. But JavaScript only runs inside the browser, so how can it now run directly on a computer? Node.js is mainly built in C++, Node inside has Google's V8 engine, this engine converts the JavaScript directly into native machine code.

So basically you write your normal JavaScript, which Node passes to V8 which generates machine code and the computer is able to read that code.

![node diagram](/assets/posts/content/node-express/node.png)

But Node is much more than a bridge between your JS and V8, through different modules Node allows us, to give some examples, to communicate with the computer's file system or to set up a server that reacts to requests and serves content from/to a database.

That's great but, I'm a web developer who doesn't intend to write applications for Windows or any other OS, how do you put Node.js on the server and replace my fancy Java Spring Boot + Hibernate dynamised with Lombok annotations?

![node responses diagram](/assets/posts/content/node-express/node-responses.png)

You'll send a request to the server, from your React or whatever front-end you have, on the server we have a Node.js running that will listen to the request and make a response back to the client. That response, it can be a file, because we have access to the file system, like a full HTML and image or any other binary data.

It can also communicate with a database, retrieve some data, do some calculations and give us back a beautiful JSON ready to use in our front-end.

## Why to use Node.js?

- It's all JavaScript → Even if you look at this from the perspective of your own or the point of view of a company it is still true, just one language and you can make a complete application, both sides. For you it's interesting, reusing your current skills with a language in another field, but for companies this is a good point too, they can reuse the current expertise of their workers.
- It's all JavaScript x2 → Because both sides are JavaScript, it's very possible to reuse code between both sides, do you already have a function that validates ID cards? Use exactly the same on the front-end and back-end.
- Community → There are a lot of utilities, packages and even frameworks built on top of Node.js, you will get a lot of support and there are tons of ready to use tools available.
- It's highly used → Take a look at this screenshot from [State of JS 2020](https://2020.stateofjs.com/), Express which is built on top of Node.js is in terrible shape. But yes, the "everyone uses it" argument should be taken very carefully.

![state of js 2020](/assets/posts/content/node-express/state-of-js.png)

## Setup

The easiest way to install Node.js on your system is to go to the official website, especially [https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/) where all the platforms and options are listed. You can choose between the Long Term Support or the latest version, choose what you want, for the case of this guide both options are good, personally I am using the current version which is 16.5.0.

For Windows and Mac there is no mystery with the installation so if you are Linux user like me, you will find [this resource](https://github.com/nodesource/distributions/blob/master/README.md) more useful.

For example for Ubuntu users:

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Installing Node.js also installs npm which stands for Node Package Manager, if you come from web development with React or any other library you are more than used to using it.

To check that everything is OK, run the following commands in your terminal

```bash
node --version
npm --version
```

If you type `node` in your terminal, you will be able to execute JavaScript code in the same way as you do in a Developer Tools inside the browser. If you want to exit, type `.exit` or use `Ctrl+C`.

Open your favourite IDE and create a `server.js` file (the name is totally up to you), in this JS file you can write your normal JavaScript and run it by typing `node server` on your terminal.

Congratulations, you are now running JavaScript code outside the browser!

## Differences running JS on Front and Back

As we have already seen Node.js allows us to execute JavaScript in the back-end of our project but as that JavaScript is executed outside the browser there are some minor differences.

### Global Object

In the front-end our global object is the `window` object, if you inspect that object you will find a number of utilities and variables such as the fancy `window.document.getElementById`. In Node.js the `window` object is replaced by the `global` object.

Use your `server.js` file created earlier to make `console.log(global)` and check what's inside. You'll find some familiar functions like `setTimeout` or `setInterval`.

```jsx
console.log(global);

/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: [Getter/Setter],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
} */
```

If you look closely, you'll miss a few things, such as the fact that Node doesn't have a `document` object or any of the other objects related to DOM manipulation.

As in the front-end, you don't need to type `global` every time you need to access something inside this object, you can use `setTimeout` directly instead of going to `global.setTimeout`.

### dirname and filename

There are two new utilities available in `global` that you will use a lot:

- `__dirname` will tell you the path to the directory in which the current script is running.
- `__filename` returns the name and absolute path of the currently running script.

```jsx
console.log(__dirname); // /workspace/my-new-project
console.log(__filename); // /workspace/my-new-project/server.js
```

## Splitting Code

If you want to split your code into different files you might be used to `import` and `export` from ES6 JavaScript, in Node it's also possible but a lot of the code you'll find on the internet will be with `commonJS` modules so I think it's important to know that too.

To export members from your current module to others you can use these options:

```jsx
// module1.js
const name = "dastasoft";
const ultimate = "instant sleep";

module.exports = { name, ultimate };

// module2.js
const animes = ["Death Note", "Jujutsu Kaisen"];

module.exports = animes;

// module3.js
module.exports.today = () => new Date().getDay();
```

The difference is not only the number of parameters you want to export, but how you use the values:

```jsx
// module4.js
const { name, ultimate } = require("/module1");
const animes = require("./module2");
const aFunction = require("/module3");

console.log(name); // dastasoft
console.log(ultimate); // instant sleep
console.log(animes); // ["Death Note", "Jujutsu Kaisen"]
console.log(aFunction.today()); // 5
```

As you can see instead of importing we use `require` as a keyword to include other modules. The `module` is just a simple JavaScript variable that is included in all Node modules.

If you try to use ES6 modules you will most likely get the following error:

```bash
(node:22784) Warning: To load an ES module, set "type": "module" in 
the package.json or use the .mjs extension.(node:22784) 
Warning: To load an ES module, set "type": "module" in the package.json 
or use the .mjs extension.
```

There are different ways to solve this:

- Using the `.mjs` extension for files you want to use and consume as a module.
- Setting the `type` to `module` in your `package.json`.
- Using TypeScript and in the `tsconfig.json` set the module to `commonjs` so the TS you write will be transformed into JS using commonjs and Node will be happy with that.

## Built-in modules

Along with Node there are some utility modules that you can use without any additional installation, let's see some examples:

### OS

The operating system module provides a lot of information about the system it is running on:

```jsx
const os = require("os");

console.log(os.arch()); // x64
console.log(os.version()); // #86-Ubuntu SMP Thu Jun 17 02:35:03 UTC 2021
console.log(os.platform()); // linux
```

### FS

The filesystem module is one of Node's game changers, you can access the filesystem and perform a lot of actions.

Let's create a `filesystem.js` to do some testing with the filesystem module:

```js
// filesystem.js
const fs = require("fs");

fs.readFile("./assets/test.txt", (error, data) => {
  if (error) console.log(error);
  else console.log(data.toString());
});
```

If you do `node filesystem` you will get the following error message `Error: ENOENT: no such file or directory, open './assets/test.txt'`.

Create a folder called `assets` and a `test.txt` file with some content in it, try again.

Let's add a `writeFile` function:

```js
// filesystem.js
const fs = require("fs");

fs.readFile("./assets/test.txt", (error, data) => {
  if (error) console.log(error);
  else console.log(data.toString());
});

fs.writeFile("./assets/test.txt", "I'm soooo fast", () => {
  console.log("Done sir");
});
```

If you try this code, you will see that before you can read the file it is already written with the new text and when `readFile` does its job it prints the new content. This happens because these two methods are asynchronous and do not block the execution of the code, the code continues to execute line by line and `writeFile` terminates first.

Try this code instead:

```js
console.log(fs.readFileSync("./assets/test.txt").toString()); // I'm soooo fast

fs.writeFileSync("./assets/test.txt", "I'm actually faster");
```

Now you are using the synchronous methods and the code is enclosed in those statements.

FS allows a lot more actions but you have the basic idea, with this module we can, for example, read a file, do some calculations, modify it and return its content to the front-end.

### http/http

With these modules we can configure our Node as a HTTP/HTTPS server, this will be the module we will use to create the REST API.

```js
// server.js
const http = require("http");

const HOSTNAME = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(res);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});
```

If you use `node server` and open a browser with `localhost:3000` you will see in the server console those `console.log` which contain two useful parameters: the request and response objects. These objects contain some useful information that we'll look at in detail later, but for now you can take a look at what is printed.

- We use the built-in `http` module.
- The `hostname` from which the server will respond will be our `localhost`.
- As a convention, port `3000` is used for local development, but you can use any port you like if it is available.
- We use the `createServer` function.
- We start the server with `listen`.

As you can see, the `console.log` is not printed to the browser console it is only printed to the server console, this is because we are running server code here, in the next section we will see how to send data to the front-end which will be the core of our REST API.

## Creating a Server

```js
// server.js
const http = require("http");

const HOSTNAME = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello from the Server!");
  res.end();
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});
```

Now try accessing `localhost:3000` in your browser and check the results.

We set up the server to respond (using the response object) to incoming requests with plain text, indicating a `200` status code and terminating the communication.

If you look closely at the example in the previous section, once you access `localhost:3000` the browser never resolves the request, that was because we were not using `end` to notify the end of the communication.

### Status Codes

If you do not know what status codes are [see this list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), in short the status code serves to notify whether the communication has been successful or what kind of problem has occurred.

### Content Type

This header is used to tell the client what is the type of content returned. If you want to check the different types [see this list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types%3E%5D).

## Useful external packages

We already saw some useful built-in modules, but the community has developed tons of well-done packages worth mentioning and you will find many when you check the internet.

If you don't already, you can initialize your project with `npm` in your project folder:

```bash
npm init -y
```

This will generate a simple `package.json` which will be useful in the next sections and is necessary to install external packages.

### nodemon

If you try to modify the code above with the server running, you will probably have noticed that the changes require a restart of the node process. The nodemon external package watches for changes to our files and applies them automatically without the need for a restart.

See [the official nodemon page](https://nodemon.io/) but in short

```bash
npm install -D nodemon
```

Install as a development dependency and configure your `start` script as follows:

```bash
"start": "nodemon server.js"
```

And execute it:

```bash
npm start
```

Your server will automatically react to changes.

## Express

We will see this package in detail in the next section, for now let's say that Express is a web framework for Node, it simplifies the process of developing a web application and aims to build efficient and fast web applications. Express is also the E of the MEAN/MERN/MEVN stack.

You can achieve that result without Express or even with other packages but let's look at the advantages of this particular package.

To add Express to your project:

```bash
npm install express
```

### Morgan

Morgan is an external package that is part of Express, this package allows us to log events in an easy and simple way, it is very convenient for these first steps to check what is happening in our server.

In the next section we will see how to use it, for now let's add it to our project:

```bash
npm install -D morgan
```

One tip, when using an external package, even if you have seen it in a tutorial, make sure that it really solves a problem, for example `body-parser` is a package that is present in almost all such guides but `Express` really has its own solution nowadays.

## Express

As we saw in the last section we will use Express in our project but I think the most important thing when you add a new package to your project is to know why and what problem it actually solves.

We are going to build a simple REST API as an example. You can achieve this behavior without installing Express and just using Node.

First let's create a `database` folder and a `companies.json` inside it, this file will act as a simple database.

```json
// companies.json
[
  {
    "id": "0",
    "name": "Capsule Corp",
    "about": "Like WinRAR but we accept more file extensions.",
    "industries": ["automobile", "house", "engineering"],
    "numberEmployees": 2,
    "yearFounded": 1990
  },
  {
    "id": "1",
    "name": "Red Ribbon",
    "about": "We deliver the best Android you can ever had",
    "industries": ["militar", "artificial intelligence", "engineering"],
    "numberEmployees": 2000,
    "yearFounded": 1000
  }
]
```

```js
// server.js
const fs = require("fs");
const http = require("http");

const HOSTNAME = "localhost";
const PORT = 3000;
const DB_PATH = `${__dirname}/database/companies.json`;

const getCompanies = res => {
  fs.readFile(DB_PATH, (error, data) => {
    if (error) {
      console.error(error);
      res.statusCode = 500;
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(data);
    }
  });
};

const deleteCompany = (res, id) => {
  fs.readFile(DB_PATH, (error, data) => {
    if (error) {
      console.error(error);
      res.statusCode = 500;
      res.end();
    } else {
      const companies = JSON.parse(data);
      const filteredData = JSON.stringify(
        companies.filter(company => company.id !== id),
        null,
        2
      );

      fs.writeFileSync(DB_PATH, filteredData);

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(filteredData);
    }
  });
};

const server = http.createServer((req, res) => {
  const baseURL = "http://" + req.headers.host + "/";
  const url = new URL(req.url, baseURL);

  if (url.pathname === "/companies" && req.method === "GET") {
    getCompanies(res);
  } else if (url.pathname === "/companies" && req.method === "DELETE") {
    deleteCompany(res, url.searchParams.get("id"));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});
```

Starting with the `createServer` as before we set up a server that listens for requests and depending on the URL and method used executes one logic or another.

Within the two different methods we read the JSON file and return the content, in `deleteCompany` we look for a specific `Company` and filter the array and write to the file while returning the resulting array.

If you want to try the previous example, I recommend you to use [Postman](https://www.postman.com/), an application that we will see in detail later, with which you can execute different requests to a specific endpoint using different methods.

As you can see, the REST API above is incomplete, we only have the `get`, `delete` and `not found` endpoints, but it's enough to see some advantages of using Express, so let's compare it with an Express version of the same application.

Create a new file `app.js`:

```js
// app.js
const express = require("express");
const fs = require("fs");

const HOSTNAME = "localhost";
const PORT = 3000;
const DB_PATH = `${__dirname}/database/companies.json`;
const app = express();

const getCompanies = (req, res) => {
  fs.readFile(DB_PATH, (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).end();
    } else {
      res.status(200).send(JSON.parse(data));
    }
  });
};

const deleteCompany = (req, res) => {
  const { id } = req.params;

  fs.readFile(DB_PATH, (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).end();
    } else {
      const companies = JSON.parse(data);
      const filteredData = JSON.stringify(
        companies.filter(company => company.id !== id),
        null,
        2
      );

      fs.writeFileSync(DB_PATH, filteredData);
      res.status(200).send(JSON.parse(filteredData));
    }
  });
};

app.get("/companies", getCompanies);

app.delete("/companies/:id", deleteCompany);

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, HOSTNAME, () => {
  console.log("Server running");
});
```

Let's check the differences between the two versions.

### Server listening

The server does not need to specify the default value of `localhost`.

You can also use an extended version:

```js
app.listen(PORT, HOSTNAME, () => {
  console.log("Server running");
});
```

### Routes

As you can see the routes section is simplified, cleaner and more readable. Each route is declared with a function that uses the same name as the method being used, e.g. the endpoint to list all companies is a `get` method and the endpoint to delete a particular company is a `delete` method.

All routes accept a function that receives the request and response objects:

```js
app.get("/companies", (req, res) => {
  // Do something
});
```

With this in mind we can isolate that logic within a function and pass the function directly:

```js
// app.get("/companies", (req, res) => getCompanies(req, res));
app.get("/companies", getCompanies);
```

For the deletion endpoint, we need to know the `id` of the Company, for that we can use identifiers with `:` those identifiers will travel under `req.params.identifierName` where `identifierName` is `id` in this case.

Finally, in case someone tries to access a route we don't have defined, we define 404 Not Found. The `app.use` method is a special method that we will cover in the next section.

### Response

In the Node version we send back and end the communication with `end` method which still it's available but Express allows us to do in a simpler way:

```js
res.send(data);
```

`send` will automatically set the `Content-Type` for us.

### Status codes

Setting status codes is also easier with Express, most of them will be handled automatically by Express, but if you need to define something explicitly:

```jsx
res.status(200).send(data);
```

### Middlewares

Remember the `app.use` we saved for later? Now is the time. Try pasting the `app.use` lines at the beginning of the file, put them before the other routes and see what happens when you make a request.

```js
// app.js

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.get("/companies", getCompanies);

app.delete("/companies/:id", deleteCompany);

app.listen(PORT, HOSTNAME, () => {
  console.log("Server running");
});
```

As you can see, now every request is responding with `Not found` because `use` is catching all requests and doing an action. Now remove that and try these statements at the top of the file:

```jsx
// app.js

app.use((req, res, next) => {
  console.log("I'm watching you");
  next();
});

app.get("/companies", getCompanies);

app.delete("/companies/:id", deleteCompany);

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, HOSTNAME, () => {
  console.log("Server running");
});
```

Now every request prints this console log first but executes correctly. To understand why this happens you first have to learn about middlewares.

Middleware functions have access to the request and response object and are executed on every execution between a request and a response. If you think about the definition you come to the conclusion that the whole Express is made up of middleware functions, not just `app.use`.

The difference with other functions like `app.get` or `app.delete` is that those functions are limited to those methods, but `app.use` is executed with any request.

Middleware functions have two possible exits, continue to the next middleware function using `next` or make a response and terminate the chain.

![middlewares on express](/assets/posts/content/node-express/middlewares.png)


In the diagram above you can see the following:

- A `request` arrives at the server.
- The first `app.use` is executed and performs `next`.
- The second `app.use` is executed and performs `next`.
- The request was a get method that asked for the path /, so the `app.get` executes and sends a response.

Sending a response is what breaks the middleware chain so it is important to note the order.

### Built-in middlewares

It is likely that if you are building a front-end that submits data to a REST API, to submit a form for example, you will need to read those values. In the past, to do this we used an external middleware called `body.parser` to read these values from the `req.body`. Nowadays this is already integrated in Express and is one of the built-in middlewares.

```js
app.use(express.urlencoded({ extended: true }));
```

### External middlewares

There are lots of external packages for Express, but earlier I mentioned `morgan`, this package is just an external middleware that if I show you now how to use it you will understand the idea perfectly:

```js
import morgan from "morgan";

app.use(morgan("dev"));
```

Extending the capabilities of Express with external middleware as you can see is simple and clean.

## Best practices

### MVC

MVC stands for Model-View-Controller and is a well-established software design pattern in different backend systems that can be useful here as well. A graphical summary of what MVC is:

[mvc-diagram](/assets/posts/content/node-express/mvc-diagram.png)

At this stage of the tutorial we will only use the `Controller`, the `Model` we will add later when we define a model for the database and the `View` in this case is not applicable because we are not serving HTML from the server, the view will be our React application in any case.

Even the lack of certain parts, splitting our code following the MVC pattern is useful for readability and maintainability purposes, so let's isolate all the different functions for manipulating data that we have seen before in the controller.

Under the `controller` folder, we'll place the `company.js` and `joboffer.js` files, with code similar to the following: (check out the example project for the full code)

```js
// controller/company.js
import path from "path";
import fs from "fs";

const DB_PATH = path.resolve("database/companies.json");

const list = (req, res) => {
  fs.readFile(DB_PATH, (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).end();
    } else {
      res.status(200).send(JSON.parse(data));
    }
  });
};

const delete = (req, res) => {
  const { id } = req.params;

  fs.readFile(DB_PATH, (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).end();
    } else {
      const companies = JSON.parse(data);
      const filteredData = JSON.stringify(
        companies.filter(company => company.id !== id),
        null,
        2
      );

      fs.writeFileSync(DB_PATH, filteredData);
      res.status(200).send(JSON.parse(filteredData));
    }
  });
};

export { list, delete }
```

*The other methods can be found in the example project.

By doing so, we have isolated the code relating to working with the data in a single file, which we can then reuse as needed, as in the next section.

### Routes using router

There is a better way to organise the routes, especially now that we want to add another context, so far we only talked about routes about `company` but now we want to add routes for `job offer`. Let's use the `router` to organise the routes in a better way.

Inside the `routes` folder, we'll place two files `company.js` and `joboffer.js`, which will contain something similar to this code: (check the example project for the full code)

```js
// routes/company.js
import express from "express";

import { list, create, details, update, remove } from "../controller/company";

const router = express.Router();

router.get("/", list);
router.post("/", create);
router.get("/find/:id", details);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
```

Let's check what happens there:
- We use the `Router` function of Express.
- With the router, we can add routes in the same way as we did with `app`.
- Finally we export the router.

Later, we can use this router to define all routes:

```js
import express from "express";

import { companyRoutes, jobOfferRoutes } from "../routes";

const app = express();

// routes
app.use("/company", companyRoutes);
app.use("/job-offer", jobOfferRoutes);
```

With `app.use` we define a context for that path (this is entirely optional) and add the paths we defined earlier. The advantage of using the context is that the routes in the example above are simpler and easier to move between contexts.

So instead of declaring all your routes in your `app.js` or whatever main file you have, isolate them in their own files, it will be easier and less error prone for other developers to modify in the future.


### TypeScript

As I said at the beginning of this guide, TS can be useful in this project, and if you check the example project is entery in TS, in later stages of the guide it will be even more useful because of the type checking of the model, but for now here are some benefits:

#### Clear data structure

```ts
// types.ts

type Company = {
  id: string;
  about: string;
  industries: string[];
  name: string;
  numberEmployees: string;
  yearFounded: number;
};

type JobOffer = {
  id: string;
  availablePositions?: number;
  companyId: string;
  description: string;
  function: string;
  industry: string;
  location: string;
  numberApplicants?: number;
  postDate: Date;
  published: boolean;
  requirements: string[];
  salary?: number;
  workType: string;
};

export { Company, JobOffer };

```

Declaring the types of our objects gives us, and other developers, a snapshot of what we are talking about. Looking at a single file, you now have a clear picture of the form of the data, which parameters are mandatory and which are optional.

This will be even more useful later, but for now we can use these types in the controller to implement less error-prone functions, use `IntelliSense` efficiently and include these types in our tests.

#### Readable code

Let's check for an updated version of the `remove` function in the company's controller:

```ts
// controller/company.ts
import { Request, Response } from "express";
import path from "path";
import fs from "fs";

import { Company } from "../types";

const DB_PATH = path.resolve("database/companies.json");

const remove = (req: Request, res: Response) => {
  const { id } = req.params;

  const companies: Company[] = JSON.parse(fs.readFileSync(DB_PATH).toString());
  const company: Company | undefined = companies.find(company => company.id === id);
  const newCompanies: Company[] = companies.filter(company => company.id !== id);

  if (company) {
    fs.writeFile(DB_PATH, JSON.stringify(newCompanies, null, 2), error => {
      if (error) {
        console.error(error);
        res.status(500).end();
      } else {
        res.status(200).send({ message: `Company with id ${id} removed.` });
      }
    });
  } else {
    res.status(404).send({ message: `Company with id ${id} not found.` });
  }
};
```

Most of the types are inferred and it is not necessary to write it explicitly, but I added it here so that it is better understood that we now know at each step what type of data we are handling and more importantly, the IDE is checking that it follows that form.

#### Better understand of external tools

Do you see this in the previous example?

```ts
import { Request, Response } from "express";

const remove = (req: Request, res: Response) => {}
```

Good luck finding out what is inside the `req` and `res` params, you will need to check the documentation or debug, with TS you will automatically have access to the object form and documentation, directly from the IDE, this is one of the main reasons why I am currently using TS in my projects.

### Postman

## Publish

Let's review what the different options are for publishing our backend so that it is accessible to others, due to the current size of the guide, I will keep this section as a summary but will consider making a more focused guide on this point if I feel it is necessary.

### Local

### AWS

You can use Amazon Web Services to host your Node.js application, I will list the steps but I won't go into the details because using AWS requires some prior knowledge about AWS and is beyond the scope of this guide.

- Request an Elastic Cloud Computer (EC2) instance with Ubuntu for example.
- Upgrade the system.
- Install Node.js on the system as we did in the the Setup section for Ubuntu.
- Clone your back-end project or the example project from git.
- Perform `npm install && npm start` which will make the Node.js server available.

*This is a simple step-by-step for this guide, there are actually better ways to deal with disconnects, restarts, and so on, check out [pm2](https://pm2.keymetrics.io/) if you are more interested in this part.*

Be careful with this option because AWS has a free tier but may have additional charges for usage.

### Heroku

One of the easiest options and the one I will cover here in more detail is to use [Heroku](https://id.heroku.com). Heroku is a Platform as a Service (PaaS) that will simplify the process of having to configure your system to be visible from the outside and act as a server or the AWS option which as I said before requires some knowledge.

One of the cool things about Heroku is that we can do this kind of testing without any kind of credit card or fee, so it's perfect for a guide like this and your first tests developing backends with Node.js.

*With the example project, I needed to add a `postinstall` script for TypeScript so that Heroku compiles down to JS code before starting the server.*

There are two ways to upload a back-end project like the example project in this guide:

#### Heroku CLI

Heroku provides a command line interface that we can use to deploy the project in a few steps. First install the cli directly from npm:

```sh
npm install -g heroku
```

Once installed, we need to log in:

```sh
heroku login -i
```

If you want to verify that everything works before uploading to Heroku, you can check it with:

```sh
heroku local web
```

`web` will check your `package.json` and look for the `start` script.

Once everything is verified, let's create the project in Heroku and push it:

```sh
heroku create
git push heroku main
```

After `create` you will get the URL where it is stored and you are ready to go, if you are using the example project, you can try with your new url + `/company` for example. In my case [https://mars-pot-backend.herokuapp.com/company](https://mars-pot-backend.herokuapp.com/company).


#### Directly on the web.



- Railway