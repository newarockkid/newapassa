import Ember from "ember";

export
default Ember.Route.extend({

    model: function(params) {
        return this.get('store').find('album', params.album_id);
    },

    afterModel: function(model) {
        var albumsController = this.controllerFor('albums');
        albumsController.set('selectedAlbum', model);
    }

});