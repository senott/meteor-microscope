Template.postItem.helpers({
  ownPost: function() {
    //TODO: alterar userID para userId
    return this.userID == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
