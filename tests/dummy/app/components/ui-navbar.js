import Component from '@ember/component';

export default Component.extend({
  tagName: 'nav',
  classNames: ['navbar'],
  classNameBindings: ['fixed:fixed:unfixed'],
  attributeBindings: ['name:data-name'],

  fixed: true
})
