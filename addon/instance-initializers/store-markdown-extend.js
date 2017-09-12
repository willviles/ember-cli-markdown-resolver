import Ember from 'ember';
import { files, trees } from 'ember-cli-markdown-resolver/files';

const {
  computed, get, getWithDefault, setProperties, RSVP: { resolve }
} = Ember;

export function initialize(applicationInstance) {

  let storeService = applicationInstance.lookup('service:store');

  setProperties(storeService, {
    markdownData: {
      files,
      trees
    },

    markdownConfig: computed(function() {
      return Ember.getOwner(this).resolveRegistration('config:environment')['ember-cli-markdown-resolver'] || {}
    }),

    markdownTreeAliasToPath(alias) {
      return get(this, `markdownConfig.folders.${alias}`);
    },

    findMarkdown(tree, file) {
      tree = this.markdownTreeAliasToPath(tree);
      return resolve(get(this, 'markdownData.files').findBy('path', `${tree}/${file}`));
    },

    findMarkdownTree(tree) {
      tree = this.markdownTreeAliasToPath(tree);
      return resolve(getWithDefault(this, `markdownData.trees.${tree}`, []));
    }
  });

}

export default {
  name: 'store-markdown-extend',
  initialize
};
