Template.jargonEdit.events({
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
  }
});

//I feel like I shouldn't have to do this. Starting the tagsinput.
Template.jargonEdit.onRendered(function () {
    $('[data-role="tagsinput"]').tagsinput();
});