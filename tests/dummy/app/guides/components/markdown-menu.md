---
title: markdown-menu
order: 0
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


YAML syntax highlighting test

```yaml
stuff: true
things:
  - not cool
  - not at all cool
```

CSS syntax highlighting test

```css
.this-is-cool {
  text-transform: uppercase;
  z-index: 1;
}
```
