Meteor.methods({
	jargonInsertOrUpdate: function(item) {
		// check(Meteor.userId(), String);
		// check(item, {
		// 	name: String,
		// 	lname: String,
		// 	descr: String,
		// 	url: String
		// });

		var _id = item._id;
		var _item = _.pick(item, [
			'name',
			'lname',
			'descr',
			'url',
			'related',
			])

	
		//Since the input field returns a string
		if (typeof _item.related === "string") {
			_item.related = _item.related.split(',');
		}
		if (! _.isArray(_item.related)) {
			_item.related = [_item.related];
		}
		_item.url = addhttp(_item.url)

		// var user = Meteor.user();
		_item = _.extend(_item, {
			// userId: user._id, 
			// author: user.username, 
			updated: new Date()
		});

		if (_id) {
			//update
			
			Jargon.update(_id, {$set: _item})
			return {
				_id: _id
			};
		} else {
			//insert

			_item = _.extend(_item, {
				submitted: new Date()
			});
			var postId = Jargon.insert(_item);
			return {
				_id: postId
			};
		}
	}


});