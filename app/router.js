import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bands', function() {
    this.route('songs');

    this.route('band', {
      path: ':slug'
    });
  });
});

export default Router;
