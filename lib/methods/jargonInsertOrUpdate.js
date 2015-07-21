Meteor.methods({
	jargonInsertOrUpdate: function(item) {
		// check(Meteor.userId(), String);
		// check(item, {
		// 	name: String,
		// 	lname: String,
		// 	descr: String,
		// 	url: String
		// });

		
		var _item = _.pick(item, [
			'name',
			'lname',
			'descr',
			'url',
			'related',
			])

		// var user = Meteor.user();
		_item = _.extend(_item, {
			// userId: user._id, 
			// author: user.username, 
			updated: new Date()
		});

		if (_.has(item, '_id')) {
			//update
			
			Jargon.update(item._id, {$set: _item})
			return {
				_id: item._id
			};
		} else {
			//insert

			_item = _.extend(item, {
				submitted: new Date()
			});
			var postId = Jargon.insert(_item);
			return {
				_id: postId
			};
		}
	}


});