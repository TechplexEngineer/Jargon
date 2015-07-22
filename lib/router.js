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

Router.route('/terms', {
	name: 'terms.empty',
	action: function () {
		this.redirect('home')
	}
});

Router.route('/terms/:name', {
	name: 'terms',
	template: 'jargonList',
	data: function() {
		var terms = Jargon.find({name: this.params.name});
		if (terms.count() > 0) {
			return terms;
		} else {
			this.redirect('term.add.name', {name: this.params.name})
		}
	}
});

Router.route('/term', {
	name: 'term.empty',
	action: function () {
		this.redirect('home')
	}
});

Router.route('/term/add', {
	name: 'term.add',
	template: 'jargonEdit',
	data: function() {
		return {};
	}
});

Router.route('/term/add/:name', {
	name: 'term.add.name',
	template: 'jargonEdit',
	data: function() {
		return {name: this.params.name};
	}
});

Router.route('/term/:_id', {
	name: 'term',
	template: 'jargonMore',
	data: function() {
		return Jargon.findOne(this.params._id);
	}
});

Router.route('/term/:_id/edit', {
	name: 'termEdit',
	template: 'jargonEdit',
	data: function() {
		return Jargon.findOne(this.params._id);
	}
});

