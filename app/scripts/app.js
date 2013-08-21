/* globals Em */
var CzHackathonPortal = window.CzHackathonPortal = Em.Application.create();

CzHackathonPortal.ApplicationView = Em.View.extend({
    classNames: ['app']
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
