import Ember from 'ember';

var Router = Ember.Router.extend({
    location: NewapassaENV.locationType
});

Router.map(function() {
    this.resource('home');
    this.resource('snaps');
    this.resource('blog-categories', function() {
        this.route('blog-category', {
            path: ':category_id'
        }, function() {
            this.route('blogs');
        });
    });
    this.resource('contact');
});

export
default Router;