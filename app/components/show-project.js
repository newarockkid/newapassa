import Ember from "ember";

export
default Ember.Component.extend({

    /**
     * Property that is used to store the expanded state of project details
     *
     * @property 'expanded'
     * @type {boolean}
     */
    expanded: true,

    languages: null,

    classNames: ['space-bottom-sm'],

    didInsertElement: function() {
        this.set('languages', this.get('project.languages').toArray().join(", "));
    },

    actions: {

        /**
         * Toggles property expanded
         *
         * @action 'toggleExpand'
         */
        toggleExpand: function() {

            var self = this;
            if (this.get('expanded')) {
                Ember.$(this.get('element')).find(".project-details").slideUp({
                    duration: 400,
                    complete: function() {
                        self.toggleProperty('expanded');
                    }
                });
            } else {
                Ember.$(this.get('element')).find(".project-details").slideDown({
                    duration: 400,
                    complete: function() {
                        self.toggleProperty('expanded');
                    }
                });
            }

        }

    }
});