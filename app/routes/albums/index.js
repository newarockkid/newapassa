import Ember from "ember";

export
default Ember.Route.extend({

    beforeModel: function() {
        var albums = this.modelFor('albums');
        this.transitionTo('albums.album.photos', albums.objectAt(0));
    }

});