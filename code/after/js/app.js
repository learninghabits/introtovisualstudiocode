/// <reference path="libs/ember-1.6.0.js" />


App = Ember.Application.create({
    rootElement: '#emberMainContent',
    LOG_TRANSITIONS:true
});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});