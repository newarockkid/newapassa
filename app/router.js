import Ember from 'ember';

var Router = Ember.Router.extend({
  location: NewapassaENV.locationType
});

Router.map(function() {
	this.resource('home');
	this.resource('snaps');
	this.resource('blogs');
	this.resource('contact');
});

export default Router;
