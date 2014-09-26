import Ember from "ember";

export
default Ember.Route.extend({

    beforeModel: function() {
        var categories = this.modelFor('blog-categories');
        this.transitionTo('blog-category', categories.get('firstObject'));
    }

});