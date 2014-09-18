import Ember from "ember";

export
default Ember.View.extend({
    templateName: "views/show-projects",

    company: null,

    projects: null,

    selectedProject: null,

    initialize: function() {
        var projects = this.get('experience.projects');
        if (projects) {
            this.set('projects', projects);
            this.set('selectedProject', projects.objectAt(0));
        }
    }.on('init'),

    fadeOutProject: function(callBack) {
        Ember.$(this.get('element')).find(".project").fadeOut({
            duration: 400,
            complete: callBack
        });
    },

    fadeInProject: function(callBack) {
        Ember.$(this.get('element')).find(".project").fadeIn({
            duration: 400,
            complete: callBack
        });
    },

    activateSelectedProject: function(project) {
        Ember.$(this.get('element')).find(".project-list li").each(function(index, li) {
            if (Ember.$(li).attr('project-id') === project.get('id')) {
                Ember.$(li).addClass('active');
            } else {
                Ember.$(li).removeClass('active');
            }

        });
    },

    didInsertElement: function() {
        this.activateSelectedProject(this.get('selectedProject'));
    },

    actions: {

        selectProject: function(project) {
            var self = this;

            if (this.get('selectedProject') !== project) {

                this.activateSelectedProject(project);

                self.fadeOutProject(function() {
                    self.set('selectedProject', project);
                    self.fadeInProject();
                });


            }

        }

    }
});