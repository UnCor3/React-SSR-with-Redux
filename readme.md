# React SSR with Redux "Isomorphic"

## A basic isomorphic React Redux App 

## Getting Started

First clone the repository then

```bash
npm install
# or
yarn add
```

lastly do

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) on your browser to see the app.


Tried to type it as clean as possible with hocs, helper functions etc...

Babel,nodemon,typescript,webpack all are ready to use 

When a change is made nodemon will triggered and it will restart the server



## Why SSR and more info

It's done for better SEO , there are more benefits but main purpose is to optimize for search engines.This is an isomorphic app meaning that both server and client side have to render the same thing on initial render of course then you can manipulate the states etc with hydration.


### What is hydration ?

Hydration happens when your client side code sent along with html gets executed , first react confirms if the initial render on both sides are the same and onclick or useeffect or any client side code is now useable