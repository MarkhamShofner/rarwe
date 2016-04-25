// app/routes/bands.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('band');
  },
  actions: {
    createBand: function() {
      var route = this,
          controller = this.get ('controller');

      var band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(function(){
        controller.set('name', '');
        route.transitionTo('bands.band.songs', band);
      });
      // var name = this.get('controller').get('name');
      // var band = Band.create({
      //   name: name
      // });
      // bands.get('content').pushObject(band);
      // this.get('controller').set('name', '');
      // // this.transitionTo('bands.band.songs', band);
    },
    didTransition: function() {
      document.title = 'Bands - Rock & Roll';
    },
  }
});
