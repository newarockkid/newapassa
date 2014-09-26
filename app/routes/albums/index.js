import Ember from "ember";

export
default Ember.Route.extend({

    beforeModel: function() {
        var albums = this.modelFor('albums');
        this.transitionTo('album', albums.objectAt(0));
    }

});