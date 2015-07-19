Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('jargon'); }
});

Router.route('/', {
	name: 'home',
	template: 'jargonList',
	data: function() {
		return Jargon.find();
	}
});
Router.route('/terms/:name', {
	name: 'terms',
	template: 'jargonList',
	data: function() {
		return Jargon.find({name: this.params.name});
	}
});