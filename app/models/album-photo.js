import DS from "ember-data";

export
default DS.Model.extend({
    album: DS.attr('string'),
    source: DS.attr('string'),
    description: DS.attr('string'),
    meta: DS.attr()
});