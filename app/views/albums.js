import Ember from "ember";
export
default Ember.View.extend({
	/*
    albumTitleDOM: null,

    albumTitleOffset: null,

    makeAlbumHeaderFixed: function(event) {
        var scope = event.data.scope,
            header = scope.get("albumTitleDOM"),
            offset = scope.get('albumTitleOffset');

        if (Ember.$(window).scrollTop() > offset.top) {
            Ember.$(header).addClass('fixed');
        } else {
            Ember.$(header).removeClass('fixed');
        }

    },

    didInsertElement: function() {
        var albumTitleDOM = Ember.$(this.get('element')).find("#album-title").first(),
            offset = albumTitleDOM.offset();

        this.setProperties({
            'albumTitleOffset': offset,
            'albumTitleDOM': albumTitleDOM
        });

        Ember.$(window).on("scroll", {
            scope: this
        }, this.makeAlbumHeaderFixed);
    },

    willDestroyElement: function() {
        Ember.$(window).off("scroll", this.makeAlbumHeaderFixed);
        this.set('albumTitleDOM', null);
    },
    */

    hideAlbumsDropDown: function() {
        var albumsDOM = Ember.$(this.get('element')).find(".albums");

        albumsDOM.slideUp({
            duration: 400
        });
    }.observes('controller.selectedAlbum'),

    actions: {

        toggleDisplayAlbums: function() {
            var albumsDOM = Ember.$(this.get('element')).find(".albums");
            if (albumsDOM.is(":visible")) {
                albumsDOM.slideUp({
                    duration: 400
                });

            } else {
                albumsDOM.slideDown({
                    duration: 400
                });
            }

        }
    }

});