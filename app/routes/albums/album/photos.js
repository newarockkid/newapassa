import Ember from "ember";

export
default Ember.Route.extend({

    model: function() {
        var album = this.modelFor('albums.album');
        return this.get('store').find('album-photo', {
            'album': album.get('id')
        });
    }



});