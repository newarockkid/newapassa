import Ember from "ember";

export
default Ember.ArrayController.extend({
	
    actions: {

        viewPhoto: function(photo) {
            this.transitionToRoute('albums.album.photos.photo', photo);
        }

    }
});