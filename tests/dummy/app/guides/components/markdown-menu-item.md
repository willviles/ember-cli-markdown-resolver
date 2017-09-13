---
title: markdown-menu-item
order: 1
---

Here's some test code examples

```shell
ember install ember-cli-markdown-resolver
```

```js
// routes/guides/single.js
import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  markdownResolver: inject(),

  model({ path }) {
    return get(this, 'markdownResolver').file('guides', path);
  }
});
```
