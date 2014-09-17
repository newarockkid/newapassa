import DS from "ember-data";

export default DS.RESTAdapter.extend({
	host: 'http://localhost:8085',
	namespace: 'server/index.php/newapassa'
});