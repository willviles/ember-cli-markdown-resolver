import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';
import fallbackAction from 'ember-cli-markdown-resolver/utils/computed-fallback-action';

import layout from 'ember-cli-markdown-resolver/templates/components/markdown-menu';

export default Component.extend({
  layout,
  classNames: ['markdown-menu'],

  // Actions
  onClick: fallbackAction(function(fragmentIdLink) {
    if (fragmentIdLink && typeof fragmentIdLink === "string" && fragmentIdLink.length) {
      scheduleOnce('afterRender', this, () => {
        location.hash = fragmentIdLink;
      });
    } else {
      location.hash = "";
    }
  })
});
