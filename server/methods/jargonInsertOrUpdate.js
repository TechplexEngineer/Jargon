Meteor.methods({
	jargonInsertOrUpdate: function(item) {
		// check(Meteor.userId(), String);
		// check(item, {
		// 	name: String,
		// 	lname: String,
		// 	descr: String,
		// 	url: String
		// });

		if (_.has(item, '_id')) {
			//update

			// var user = Meteor.user();
			var item_ = _.extend(item, {
				// userId: user._id, 
				// author: user.username, 
				updated: new Date()
			});
			
			Jargon.update(item._id, {$set: item_})
			return {
				_id: item._id
			};
		} else {
			//insert

			// var user = Meteor.user();
			var item_ = _.extend(item, {
				// userId: user._id, 
				// author: user.username, 
				submitted: new Date(),
				updated: new Date()
			});
			var postId = Jargon.insert(item_);
			return {
				_id: postId
			};
		}
	}

	
});