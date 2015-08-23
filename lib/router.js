Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('postsList', { path: '/' });

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postSubmit', {
    path: '/submit'
  });
});

Iron.Router.hooks.loggedUserHook = function() {
  if (! Meteor.userId()) {
    this.render('accessDenied');
  } else {
    this.next(); }
};

Router.onBeforeAction('loggedUserHook', {
  only: ['postSubmit']
});
