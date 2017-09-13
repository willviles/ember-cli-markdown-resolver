import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject } from '@ember/service';
import RSVP from 'rsvp';

const { hash } = RSVP;

export default Route.extend({

  markdownResolver: inject(),

  model({ path }) {
    return hash({
      guide: get(this, 'markdownResolver').file('guides', path)
    });
  },

  afterModel({ guide }) {
    if (!guide) {
      this.transitionTo('error', { type: '404' });
    }
  },

  setupController(controller, model) {
    controller.setProperties(model);
  }

});
