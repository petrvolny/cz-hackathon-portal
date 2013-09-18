CzHackathonPortal.ApplicationRoute = Ember.Route.extend();
CzHackathonPortal.RegistrationCompleteRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('/');
  }
});


