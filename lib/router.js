Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('jargon'); }
});

Router.route('/', function () {
	this.render('jargonList', { data: { 
		terms: Jargon.find() 
	}})
});

Router.route('/term/:t', function () {
	this.render('jargonList', { data: { 
		terms: Jargon.find({ name:this.params.t })
	}})
});

