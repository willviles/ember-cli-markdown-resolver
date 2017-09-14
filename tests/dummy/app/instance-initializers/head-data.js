import { get, set, setProperties } from '@ember/object';
import { assign } from '@ember/polyfills';
import Route from '@ember/routing/route';
import Router from '@ember/routing/router';
import { inject } from '@ember/service';
import { typeOf } from '@ember/utils';


export function initialize() {

  Router.reopen({
    headData: inject(),
    setTitle(title) { set(get(this, 'headData'), 'title', title); }
  });

  Route.reopen({
    headData: inject(),
    afterModel(model) {
      this._super(...arguments);
      if (typeOf(this.metadata) === 'function') {
        const metadata = this.metadata(model);
        const url = get(this, 'routeURL');
        setProperties(get(this, 'headData'), assign(metadata, { url }));
      }
    }
  });

}

export default {
  name: 'head-data',
  initialize
};
