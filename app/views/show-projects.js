import Ember from "ember";

export
default Ember.View.extend({
    templateName: "views/show-projects",
    company: null,
    projects: null,

    didInsertElement: function() {
        var projects = (this.get('controller.model').findBy('company', this.get('company'))).get('projects');
        this.set('projects', projects);
    }
});