Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('postsList', { path: '/' });

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render('loading')
    else
      this.render('accessDenied');

    this.stop();
  }
}

Router.before(requireLogin, {only: 'postSubmit'});
