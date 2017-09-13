---
title: Trees
order: 1
---

SMMRY offers an official Node.js SDK for interacting with the SMMRY API.

Firstly, install the NPM module:

```shell
npm install smmry
```

The SMMRY module exposes a summarize function. Here’s an example using ES6 async/await.

```js
import smmry from 'smmry';

async function summarize(text) {
  const summary = await smmry.summarize(text);
  console.log(summary); // => Your summary
}
```
