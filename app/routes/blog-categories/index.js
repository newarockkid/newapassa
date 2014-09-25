import Ember from "ember";

export
default Ember.Route.extend({

    beforeModel: function(params) {
        var categories = this.modelFor('blog-categories');
        this.transitionTo('blog-categories.blog-category', categories.objectAt(0).get('id'));
    }

});