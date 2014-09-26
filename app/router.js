import Ember from 'ember';

var Router = Ember.Router.extend({
    location: NewapassaENV.locationType
});

Router.map(function() {
    this.resource('home');
    this.resource('albums', function() {
        this.resource('album', {
            path: ':album_id'
        }, function() {
            this.resource('photos', function() {
                this.resource('photo', {
                    path: ':photo_id'
                });
            });
        });
    });
    this.resource('blog-categories', function() {
        this.resource('blog-category', {
            path: ':category_id'
        }, function() {
            this.resource('blogs');
        });
    });
    this.resource('contact');
});

export
default Router;