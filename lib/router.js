Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('jargon'); }
});

Router.route('/', {
	template: 'jargonList',
	data: function() {
		return {
			items: Jargon.find()
		};
	}
});
Router.route('/term/:t', {
	template: 'jargonList',
	data: function() {
		return {
			items: Jargon.find({
				name: this.params.t
			})
		};
	}
});