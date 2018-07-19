---
title: Installation
order: 0
inTree: true
---

```
ember install ember-cli-markdown-resolver
```

#### Configuration

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
