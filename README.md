<img src="https://user-images.githubusercontent.com/2046935/30438539-5e23da9e-9969-11e7-8fc1-1d67a7a23aa4.png" width="auto" height="50">

Ember CLI Markdown Resolver
======
[![Build Status](https://travis-ci.org/willviles/ember-cli-markdown-resolver.svg)](https://travis-ci.org/willviles/ember-cli-markdown-resolver) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-markdown-resolver.svg)](http://emberobserver.com/addons/ember-cli-markdown-resolver) [![Download count all time](https://img.shields.io/npm/dt/ember-cli-markdown-resolver.svg)]((https://www.npmjs.com/package/ember-cli-markdown-resolver)) [![npm](https://img.shields.io/npm/v/ember-cli-markdown-resolver.svg)](https://www.npmjs.com/package/ember-cli-markdown-resolver)

Ember CLI Markdown Resolver is the quickest way to include static markdown content in your Ember.js application using [Broccoli Markdown Resolver](https://github.com/willviles/broccoli-markdown-resolver).

## Installation

```
ember install ember-cli-markdown-resolver
```

## Configuration

The addon requires you specify the locations of markdown files:

```js
// config/environment.js

ENV['ember-cli-markdown-resolver'] = {
  folders: {
    'guides': 'app/guides'
  }
};
```

And to populate your folder with markdown content:

```shell
.
└── app/
    └── guides/
        ├── quick-start.md
        ├── examples.md
        └── examples/
            └── first.md
```

## Usage

Ember CLI Markdown Resolver enables markdown content to be retrieved via the `markdownResolver` service.

### `this.get('markdownResolver').file(type, path)`

The `file` method returns promisified markdown content, allowing the content to be chainable via `.then()`.

```js
// routes/guides/single.js

import Route from '@ember/routing/route';
import { get } from '@ember/object';
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

### `this.get('markdownResolver').tree(type)`

The `tree` method returns a tree object for a given folder, allowing menu interfaces to be built from the markdown file structure.

```js
// routes/guides.js

import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Route.extend({
  markdownResolver: inject(),

  model() {
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

Additionally, adding a `fragmentIdLinks` object to a file's frontmatter will generate a list local fragment identifier links which are used within the `{{markdown-menu-item}}` component. This is handy when you want to link to several individual sections of a large parent markdown file instead of having individual child markdown files.

The `fragmentIdLinks` object expects child key-value pairs where each `key` represents the hash fragment id link and each `value` represents the text label to be shown as a child on the `{{markdown-menu}}` component.

```md
---
title: Fragment Identifier Links
order: 4
fragmentIdLinks:
  iamsectionone: "Section One"
  section-two: "Section Two"
---

### I am section one
Lorem ipsum dolor sit amet...

<a id="section-two">Lorem ipsum dolor sit amet...
```

By default, when you click on each `fragmentIdLinks` child link within the `{{markdown-menu-item}}` component it will update the url hash. You can easily override this default behavior by passing an `onClick` closure action into the `{{markdown-menu}}` component.

```hbs
{{!-- templates/guides.hbs --}}
{{markdown-menu onClick=(action "clickedMenuItemLink")}}
```

```js
// controllers/guides.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    clickedMenuItemLink(fragmentIdLink) {
      document.querySelector(`#${fragmentIdLink}`).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
});
```

The addon ships with a `markdown-menu` component which builds a nested list from your file tree and can be styled using your own css.

```hbs
<!-- templates/guides.hbs -->

{{markdown-menu
    title="My Markdown Menu"
    tree=model}}
{{outlet}}
```

## Helpers

Ember CLI Markdown Resolver defines the following template helpers:

```hbs
<!-- Gets the title property of the markdown file -->
{{get (get-markdown-file 'guides' 'nested/page-slug') 'title'}}

<!-- Shorthand to get content from markdown file -->
{{my-render-component content=(get-markdown-content 'guides' 'nested/page-slug')}}

<!-- Get the markdown tree -->
{{markdown-menu tree=(get-markdown-tree 'guides')}}
```

## Demo

Check out the [Ember CLI Markdown Resolver guides](https://willviles.github.io/ember-cli-markdown-resolver), which is generated using the addon.

Code for the guides can be found [here](https://github.com/willviles/ember-cli-markdown-resolver/tree/master/tests/dummy).

## Node Version

Ember CLI Markdown Resolver currently supports Node >=6.

## Contributing

### Installation

* `git clone https://github.com/willviles/ember-cli-markdown-resolver.git`
* `cd ember-cli-markdown-resolver`
* `yarn install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
