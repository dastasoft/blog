---
title: 'Simple Static Blog with Next.js and dev.to as CMS'
excerpt: 'We are going to set up a static blog using Next.js and dev.to as a headless CMS.'
coverImage: '/assets/posts/preview/nextjs-blog.jpg'
date: '2020-11-03T00:00:00.000Z'
author:
  name: dastasoft
  picture: '/assets/authors/dastasoft.jpeg'
ogImage:
  url: '/assets/posts/preview/nextjs-blog.jpg'
tags: ['nextjs', 'react', 'javascript']
---

We are going to set up a static blog using Next.js and dev.to as a headless CMS.

If you want to go directly to the final result [in this repo](https://github.com/dastasoft/dev-cms-static-blog) you have the final project that also serves as a boilerplate for future static blogs.

## Motivation

When I was blogging for [Nimbel](nimbel.net) I needed to make a blog quickly that would fit the static nature of the rest of the page. Nimbel wanted to be able to publish articles in [Dev.to](dev.to) and at the same time keep the personal blog updated.

The strategy we will follow in this tutorial will be:

- Take advantage of the static capabilities of NextJS and the Dev.to API to fetch the user's posts at build time.
- Create the static paths to all the posts we have fetched.
- Use Dev.to's webhooks so that every time the user creates and/or updates a post, a new build of our static site is generated.
- Create a base template (boileplate) that will be used to create any other blog following this same strategy.

## Step by step

### Pre-requisites

- [dev.to](dev.to) account
- [Vercel](https://vercel.com/) account
- [NodeJS](https://nodejs.org/) 10.13+ installed
- [npm](https://nodejs.org/) or [yarn](https://classic.yarnpkg.com/)

### Creation of the project

In my case I used my own NextJS boilerplate with TailwindCSS that you can download from [here](https://github.com/dastasoft/nextjs-boilerplate) or simply using one of the following commands:

```sh
yarn create next-app my-app-name --example "https://github.com/dastasoft/nextjs-boilerplate"

npx create-next-app my-app-name --use-npm --example "https://github.com/dastasoft/nextjs-boilerplate"
```

This will create a new NextJS project with TailwindCSS already configured.

### Structure

In NextJS we don't need to define paths, each JS that is inside the `pages` folder will be considered an accessible path (minus `_app` and other `_` files that are considered private).

We will organize the project with the following paths:

```sh
- pages
|- blog
|-- posts
|--- [slug].js
|- _app.js
|- blog.js
|- index.js
```

- `_app.js` will contain the general layout of the application that we will apply to all the paths of our application.
- `blog.js` will contain the general structure of the blog page as well as the fetch for the posts to be able to display them in the form of cards.
- `index.js` will be our home page.
- `blog/posts/[slug].js` this point needs some additional explanation:
  - By creating a structure we're telling the router that in the path `our-domain/blog/posts/slug` it will find a `slug` element that will be dynamic and accessible via the exact path.
  - Within this JS we must define what value the dynamic parameter `slug` takes, which in our case will be the slug (url) of the post itself, so we must fetch that particular post and check its data at build time.
  - We must define all the possible paths (one for each post) so that when the user navigates or writes directly in the url `our-domain/blog/post/this-post` that slug is already created at build time, since the page is completely static and will not go to consult new data outside the build.

### SSG vs SSR vs ISR

- SSG (Static Site Generation), is the default mode in which NextJS works, it can be used in combination with the `getStaticProps` and `getStaticPaths` functions provided by the framework, the different pages are generated statically at build time.
- SSR (Server Side Rendering), pages are generated on demand for each request from the server, is used in combination with the `getServerSideProps` function.
- ISR (Incremental Static Regeneration), available from version 9.5 of NextJS. It allows you to update pages that were created as static and when a new request is entered it is detected to be in an obsolete state and must be re-rendered. To activate ISR a 're-validate' property is added to the 'object' function.

In this guide we are going to treat only SSG, for more detailed information of the other methods [see the official documentation](https://nextjs.org/docs/basic-features/data-fetching), NextJS does not need any special configuration to change (or even combine!) between the different modes, it all lies in the use of the special functions linked to each type.

This is a complex and very extensive section and it is precisely where NextJS shines by the possibility of easily choosing between them or even combining them. I leave it for a future guide :) which should explain when to use some methods or others according to the nature of each page.

In our case, because we have all the data available at build time, since we are going to look for it in the dev.to API and we don't have to change anything on our website unless something changes in our CMS (dev.to) it doesn't make sense to be repeating the same queries for each user that enters.

### Environment Variables

Throughout the following sections we will use an environment variable to access the dev.to user and download the published articles. For local development we will use the `.env.development` file in which we will add the following environment variable:

```sh
DEV_USERNAME=dastasoft
```

If you use the [boilerplate](https://github.com/dastasoft/dev-cms-static-blog) directly, you only have to change the value of this variable.

This environment variable will also need to be configured at the time of deployment, in this tutorial we will deploy the application using [Vercel](https://vercel.com/) so you can check the section of `Deployment`.

### Creating the Blog

We will start by creating the `blog.js` in our `pages` folder.

The most important part is how we fetch all the posts of a user at build time to be able to display the posts as cards, for this we will use one of the SSG functions provided by NextJS, `getStaticProps`:

```js
export const getStaticProps = async () => {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
  )

  const res = await devDotToPosts.json()

  return {
    props: {
      devDotToPosts: res,
    },
  }
}
```

### Creating the Article

The next step to make the static generation possible is to define all the possible paths that the user can visit when entering this page, to be accessible we have to pre-render them at build time and NextJS needs to know the complete list, this will be achieved with another of the functions provided by NextJS `getStaticPaths`.

```js
export async function getStaticPaths() {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
  )
  const posts = await devDotToPosts.json()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
```

We create a route for each published post, using its `slug` as in the previous case. We define `fallback` as `false` since we do not plan to support URLs that are outside of the ones we are statically generating, having this property set to false will return a 404 if you try to query any URL that is outside of the array we provide in `paths`.

Enabling the `fallback` property has numerous applications and can be used in combination with `Incremental Static Generation` which is a very powerful option within NextJS, for more information on this topic [see official documentation](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

#### Article data

Within the specific article, we need to retrieve the data, for this we will consult the dev.to API using the same `slug` with which we have built the URL.

```js
export const getStaticProps = async ({ params }) => {
  const devDotToPost = await fetch(
    `https://dev.to/api/articles/${process.env.DEV_USERNAME}/${params.slug}`
  )
  const res = await devDotToPost.json()

  return {
    props: {
      devDotToPost: res,
    },
  }
}
```

All the data that comes from the dev.to API is passed in build time to the page of the specific article, this data will be accessible through the `prop` `devDotToPost`.

```js
export default function Post({ devDotToPost }) {
    ...
}
```

#### Style the markdown

Once we have the data of the article, among the multiple fields that come to us from the API, the content in markdown is in `body_html`, to use it:

```js
<div className="markdown" dangerouslySetInnerHTML={{ __html: body_html }} />
```

In the `markdown` class you must define how you want the elements look, since the API returns a raw version of the markdown. In the [example project](https://github.com/dastasoft/dev-cms-static-blog/blob/master/styles/index.css) you have available a simple proposal.

#### Complete [slug].js

This is how our template looks like for any article, you can see it directly in the [repo](https://github.com/dastasoft/dev-cms-static-blog/blob/master/pages/blog/posts/%5Bslug%5D.js):

```js
import Head from 'next/head'
import Link from 'next/link'

import TopButton from '../../../components/TopButton'

export default function Post({ devDotToPost }) {
  const {
    title,
    published_at,
    social_image,
    body_html,
    user,
    type_of,
    description,
    canonical_url,
  } = devDotToPost
  const date = new Date(published_at)
  const formatedDate = `${date.getDate()}/${
    parseInt(date.getMonth(), 10) + 1
  }/${date.getFullYear()}`

  return (
    <div>
      <Head>
        <meta property="og:type" content={type_of} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={social_image} />
        <meta property="og:url" content={canonical_url} />
      </Head>
      <div className="flex justify-center">
        <TopButton />
        <article className="text-xs w-full md:w-3/4 ">
          <div className="border-2 text-black bg-white md:rounded-lg overflow-hidden">
            <img className="w-full" src={social_image} alt={title} />
            <div className="p-4 md:p-32">
              <h1>{title}</h1>
              <div className="flex items-center text-gray-600">
                <img
                  className="rounded-full w-12"
                  src={user.profile_image_90}
                  alt={user.name}
                />
                <span className="mx-4">{user.name}</span>
                <span className="text-sm">{formatedDate}</span>
              </div>
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: body_html }}
              />
            </div>
          </div>
          <Link href="/blog">
            <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer text-base pb-8">
              <svg
                className="w-4 h-4 mr-2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </a>
          </Link>
        </article>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const devDotToPost = await fetch(
    `https://dev.to/api/articles/${process.env.DEV_USERNAME}/${params.slug}`
  )
  const res = await devDotToPost.json()

  return {
    props: {
      devDotToPost: res,
    },
  }
}

export async function getStaticPaths() {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
  )
  const posts = await devDotToPosts.json()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
```

### Layout

To create the layout and apply it to all the screens, we will create it in the `_app.js` file and internally NextJS will add it to all the pages:

```js
import Link from 'next/link'

import '../styles/index.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <nav className="p-4 flex justify-center items-center mb-4" id="nav">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer mr-4">Home</span>
        </Link>
        <Link href="/blog">
          <span className="text-xl font-bold cursor-pointer">Blog</span>
        </Link>
      </nav>
      <main className="container px-5 mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
```

The important thing at this point is:

- Use the NextJS `Link` component to make the navigation correct
- It is the ideal place to import the css file and apply it globally.
- Be sure to have `<Component {...pageProps} />` since without this we will not see the children components, (similar to the use of `children` in React)

### Home

Defining the main page in NextJS is as simple as creating the file `index.js` inside the `pages` folder and NextJS will automatically create a path, in this case to `/`, which will mix what we have defined in the `_app.js` file plus the `index.js` itself.

This is the proposed home page for the project:

```js
import DevDotToLogo from '../public/devdotto.svg'
import NextLogo from '../public/nextjs.svg'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="NextJS"
        >
          <NextLogo className="mr-4" width="100px" height="100px" />
        </a>
        <span className="text-2xl">Blog Boilerplate</span>
      </div>

      <div className="flex justify-center items-center">
        <span className="text-2xl">with</span>
        <a
          href="https://dev.to/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dev.to"
        >
          <DevDotToLogo className="mx-4" width="100px" height="100px" />
        </a>
        <span className="text-2xl">as a CMS</span>
      </div>
    </div>
  )
}
```

In this case normal `anchor` is used as they are links to the outside and NextJS does not have to access any internal route.

### CSS

NextJS will display errors if you try to introduce CSS that can affect globally outside the `_app.js` file, in the other sites as pages and / or components is advisable to use solutions such as `emotionjs`, `styled-components`, `css-modules` or `tailwindcss` as in this guide, which have their scope limited to the component itself.

NextJS provides its own `CSS-in-JS` solution called `styled-jsx` but lately from NextJS own quick-start projects it has been decided to implement `css-modules`.

If you want to know better what options you have for style issues you can check [my style guide in React](https://dev.to/dastasoft/styling-in-react-4fbj) which applies mostly to NextJS, the main difference is that we can not apply global styles as we discussed above.

# Deployment

We will deploy this project on the platform of the same creators of NextJS which is [Vercel](https://vercel.com/). To deploy a project in Vercel you must follow the next steps:

- Create a Vercel account
- Click on `Import Project`
- We'll import the project directly from our Git repository
- Provide the URL of the GIT repository
- In case the previous step gives you the error: `Couldn't find the Git repository. If it exists, verify that the GitHub Integration is permitted to access it in the GitHub App Settings.` click on `GitHub App Settings` and add the repository you're trying to deploy to Vercel's access list, if it's the first deployment you do it, Vercel will ask you for access as part of the process.
- Once Vercel has visibility into the Git repository, you can give it a name, a `framework preset` that you leave as it is in Next.js, `Build and Output Settings` that you don't need to change for now, and finally `Environment Variables` that you create in `.env.development`
- Inside `Environment Variables` we define the variable `DEV_USERNAME` with the value of the user about whom you want to make the queries, in my case `dastasoft` and press `Add`.
- Press `Deploy`.

It is possible that the first time the deployment failed giving errors of receiving wrong JSON answers, in my case trying the deployment a second time worked without problems.

You can see the final result by deploying the boilerplate we have built in this tutorial at [https://dev-cms-static-blog.vercel.app/](https://dev-cms-static-blog.vercel.app/)

# Automatic update

We're almost done, but the most important step is missing, right now we have a blog that is generated in a static way at build time, that means that when the project is deployed in Vercel, all the necessary queries are launched to dev.to to obtain the necessary information and with that a totally static website is built in which no matter how many visits we have, dev.to is not consulted again to retrieve articles.

But what if we publish/edit an article? We need a way to tell Vercel that it must go back to that build phase and recover the most updated information, for that we will use webhooks.

## Create a URL to access the display

Within the project in Vercel, we must go to `Settings` to the section referring to `Git` and look for the box `Deploy Hooks`, here we will create a new hook to which we can give the name that we want and that this in our main branch of git, in my case:

- Name: dev.to
- Git Branch Name: master

This will generate a URL of the type `https://api.vercel.com/v1/integrations/deploy/xxxx`

## Create webhooks on dev.to

In the `README.md` of the [boilerplate](https://github.com/dastasoft/dev-cms-static-blog/blob/master/README.md) you have the commands available to view, create and delete webhooks in your dev.to account.

You will need access to a Terminal and curl package, in your dev.to account you will need to create a dev.to API Key, this can be done by logging into dev.to with your account in the `Settings`, `Account` and `Dev API Keys` section.

To create the DEV API Key you have to provide a name and click on `Generate API Key`, this will generate a hash that we will need in the following commands.

With a terminal open we use the following command to create the webhook in our dev.to account

```sh
curl -X POST -H "Content-Type: application/json" \
  -H "api-key: API_KEY" \
  -d '{"webhook_endpoint":{"target_url":"TARGET_URL","source":"DEV","events":["article_created", "article_updated"]}}' \
  https://dev.to/api/webhooks
```

Where `API_KEY` is the DEV API Key that we have created in dev.to and `TARGET_URL` (important to keep the ") is the display access URL that we have created in `Deploy Hooks` from Vercel. In this example we are using the webhook for the events of creation of articles and also for the edition, you can leave the events that you need.

## Check webhook

In a terminal with curl available, execute the following command:

```sh
curl -H "api-key: API_KEY" https://dev.to/api/webhooks
```

Where `API_KEY` is the DEV API Key we have created on dev.to.

The service must answer us with an array which must not be empty, because in the previous step we created a webhook. If you get an empty array in response, check the previous step.

# Conclusion

If the webhook has been successfully created, what we will have achieved is that every time an article is created or edited (depending on the events you have used) it will call the URL we have provided it with, this URL will trigger a new build in Vercel that will again check the dev.to API and find the new article generating again a totally static version of our blog.

With this we would have already completed the requirements that we had set at the beginning of this tutorial! I encourage you to investigate further in the project [boilerplate](https://github.com/dastasoft/dev-cms-static-blog) on which this tutorial is based so that you can use it as a basis for future projects.

Now it's your turn, what is your experience creating blogs? Do you think it's easier the way you're currently doing it or with this form? You already used this form or a similar one, tell me your success story or your questions :D

Hopefully, this post will create a new entry in [Nimbel's Blog](https://nimbel.net/blog)

Enjoy!
