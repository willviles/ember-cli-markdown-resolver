import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  title(tokens) {
    return tokens.length ?
      `${tokens.join(' – ')} – Ember CLI Markdown Resolver` :
      'Ember CLI Markdown Resolver';
  },

  metadata() {
    let baseURL = get(this,'baseURL');
    return {
      appName: `Ember CLI Markdown Resolver`,
      description: `The quickest way to include static markdown content in your Ember.js application. Ember CLI Markdown Resolver is an addon for resolving markdown files in custom folders and retrieving content via a service.`,
      keywords: `ember.js, ember-addon, markdown, md, resolver, frontmatter, content`,
      image: `${baseURL}/images/facebook.jpg`,
      favicon: `${baseURL}/images/favicon`
    };
  },
})
