import Service from '@ember/service';
import {
  getOwner
} from '@ember/application';
import {
  A
} from "@ember/array"
import {
  computed,
  get,
  getWithDefault,
  set
} from '@ember/object';
import {
  files,
  trees
} from 'ember-cli-markdown-resolver/files';
import RSVP from 'rsvp';

const {
  resolve
} = RSVP;

export default Service.extend({

  config: computed(function() {
    return getOwner(this).resolveRegistration('config:environment')['ember-cli-markdown-resolver'] || {}
  }),

  files: computed(function() {
    return A(files);
  }),

  trees: computed(function() {
    return Object.keys(trees).reduce((allTrees, key) => {
      allTrees[key] = {
        name: this.getTreeName(key),
        path: key,
        files: this.orderFiles(trees[key])
      };
      return allTrees;
    }, {});
  }),

  _file(tree, file) {
    tree = this.getPathFromTreeName(tree);
    return get(this, 'files').findBy('path', `${tree}/${file}`);
  },

  file(tree, file) {
    return resolve(this._file(tree, file));
  },

  _tree(tree) {
    tree = this.getPathFromTreeName(tree);
    return getWithDefault(this, `trees.${tree}`, []);
  },

  tree(tree) {
    return resolve(this._tree(tree));
  },

  getTreeName(path) {
    let folders = get(this, 'config.folders');
    return Object.keys(folders).find(key => {
      return folders[key] === path;
    });
  },

  getPathFromTreeName(treeName) {
    return get(this, `config.folders.${treeName}`);
  },

  orderFiles(files) {
    files = A(files).sortBy('attributes.order').filter((file) => {
      let attrs = get(file, 'attributes');
      if (attrs.hasOwnProperty('inTree') && !get(attrs, 'inTree')) {
        return;
      }
      return file;
    });

    files.forEach(file => {
      let children = get(file, 'children');
      if (children) {
        set(file, 'children', this.orderFiles(children));
      }
    });

    return files;
  }

});
