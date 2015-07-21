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

    console.log($(e.target).find('[name=_id]').val());

    //item._id = Jargon.insert(item);

    //Router.go('postPage', post);
  }
});