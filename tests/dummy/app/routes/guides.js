import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject } from '@ember/service';
import RSVP from 'rsvp';

const { hash } = RSVP;

export default Route.extend({

  titleToken: 'Guides',

  markdownResolver: inject(),

  model() {
    return hash({
      tree: get(this, 'markdownResolver').tree('guides')
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  }

});
