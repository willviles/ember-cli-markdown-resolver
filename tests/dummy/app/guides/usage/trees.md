---
title: Trees
order: 1
---

#### `this.get('markdownResolver').tree(type)`

<span class="codelink">
[&rarr; addon/services/markdown-resolver.js#L50-L54](https://github.com/willviles/ember-cli-markdown-resolver/blob/master/addon/services/markdown-resolver.js#L50-L54)
</span>

The `tree` method returns a tree object for a given folder, allowing menu interfaces to be built from the markdown file structure.

```js
// routes/guides.js

import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  markdownResolver: inject(),

  model({ path }) {
    return get(this, 'markdownResolver').tree('guides');
  }
});
```

Adding an `order` value to a file's frontmatter will automatically order files within the tree.

```md
---
title: Quick Start
order: 0
---

Lorem ipsum dolor sit amet...
```
