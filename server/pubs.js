Meteor.publish('jargon', function() {
  return Jargon.find();
});