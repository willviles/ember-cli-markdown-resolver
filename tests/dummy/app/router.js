import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('guides', function() {
    this.route('single', { path: '/*path' });
  });

  this.route('error', { path: '/*type' });
});

export default Router;
