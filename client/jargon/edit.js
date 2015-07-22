Template.jargonEdit.events(
{
	'submit form': function(e) {
		e.preventDefault();

		var item = {
			name: 		$(e.target).find('[name=name]').val(),
			lname: 		$(e.target).find('[name=lname]').val(),
			descr: 		$(e.target).find('[name=descr]').val(),
			url: 		$(e.target).find('[name=url]').val(),
			related: 	$(e.target).find('[name=related]').val()
		};

		if ($(e.target).find('[name=_id]').val()) {
				item._id = $(e.target).find('[name=_id]').val();
		}

		Meteor.call('jargonInsertOrUpdate', item, function(error, result) {
			// display the error to the user and abort
			if (error)
				return alert(error.reason);
			Router.go('term', {_id: result._id});  
		});
	},
	'keyup input[name="name"]': function (e) {
		//value the user entered
		var val = $(e.target).val();
		if (!val) {
			$('#otherTerms ul li').remove();
			$('#otherTerms').hide();
			return;
		}
		//search Jargon for val at any position in the name field
		var regex = new RegExp([val].join(""), "i");
		var terms = Jargon.find({name: regex});
		if (terms.count() > 0) {
			$('#otherTerms').show();
		} else {
			$('#otherTerms').hide();
			$('#otherTerms ul li').remove()
		}

		$('#otherTerms ul li').remove();
		var printed = [];
		terms.forEach(function(doc) {
			if (!_.contains(printed, doc.name)) {
				Blaze.renderWithData(Template.jargonExists, doc, $('#otherTerms ul')[0]);
				printed.push(doc.name);
			}
			
		})
	},
	'click #hideList': function (e) {
		e.preventDefault();
		$('#otherTerms').hide();
	},
	'click .deleteJargon': function (e) {
		e.preventDefault();
		var yesDelete = confirm("Are you sure you want to delete '"+$(e.target).data('term')+"'?");
		if (yesDelete) {
			Meteor.call('jargonRemove', $(e.target).data('jid'), function(error, result) {
				if (error)
					return alert(error.reason);
				Router.go('home');  
			});
		}
	}
});

//I feel like I shouldn't have to do this. Starting the tagsinput.
Template.jargonEdit.onRendered(function () {
		$('[data-role="tagsinput"]').tagsinput();
});
