import Ember from "ember";

export
default Ember.Route.extend({

    model: function() {
        return this.get('store').find('album');
    },

    setupController: function(controller, model) {
        controller.set('selectedAlbum', model.get('firstObject'));
        this._super(controller, model);
    }

});