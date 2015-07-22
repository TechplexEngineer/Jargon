Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('jargon'); }
});

Router.route('/', {
	name: 'home',
	action: function () {
		this.redirect('terms.all')
	}
});

Router.route('/terms', {
	name: 'terms.all',
	template: 'jargonList',
	data: function() {
		switch (this.params.query.sort)
		{
			case 'new':
				return Jargon.find({}, {sort:[["submitted", "desc"], ["name", "desc"]] } )
			break;
			case 'undefined':
				return Jargon.find({}, {sort:[["lname", "asc"], ["submitted", "desc"]]})
			break;
			default:
				return Jargon.find({}, {sort:[["name", "asc"], ["submitted", "desc"]] } )

		}
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

