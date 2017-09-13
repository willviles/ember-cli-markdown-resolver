import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject } from '@ember/service';
import RSVP from 'rsvp';

const { hash } = RSVP;

export default Route.extend({

  markdownResolver: inject(),

  model() {
    return hash({
      guide: get(this, 'markdownResolver').file('guides', 'index')
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  }

});
