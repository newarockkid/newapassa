import Ember from "ember";

export
default Ember.Route.extend({

    model: function(params) {
        var categories = this.modelFor('blog-categories');
        return categories.findBy('id', params.category_id);
    },

    afterModel: function() {
        this.transitionTo('blog-categories.blog-category.blogs');
    }

});