---
title: Files
order: 0
---

#### `this.get('markdownResolver').file(type, path)`

<span class="codelink">
[&rarr; addon/services/markdown-resolver.js#L45-L48](https://github.com/willviles/ember-cli-markdown-resolver/blob/master/addon/services/markdown-resolver.js#L45-L48)
</span>

The `file` method returns promisified markdown content, allowing the content to be chainable via `.then()`.

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

Each markdown file exposes the path, raw content, frontmatter attributes and its children.

```hbs
<!-- templates/guides/single.hbs -->

{{model.content}} <!-- 'Lorem ipsum dolor sit amet' -->
{{model.path}} <!-- 'app/guides/examples' -->
{{model.attributes}} <!-- { title: 'Examples', order: 1 } -->
{{model.children}} <!-- Array of child content -->
```
