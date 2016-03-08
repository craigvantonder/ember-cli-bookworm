import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      books: this.store.findAll('book')
    });
  },

  setupController: function(controller, models) {
    return controller.setProperties(models);
  }

});
