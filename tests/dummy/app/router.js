import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
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
