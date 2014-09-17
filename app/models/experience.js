import DS from "ember-data";

export
default DS.Model.extend({
    company: DS.belongsTo('company'),
    startDate: DS.attr('date'),
    endDate: DS.attr('date'),
    projects: DS.hasMany('project')
});