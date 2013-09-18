/* globals Em, $ */
CzHackathonPortal.ApplicationController = Em.Controller.extend({
    collapsed: true,

    successBarVisible: false,

    closeSuccessBar: function() {
        this.set('successBarVisible', false);
    },

    init: function() {
        var hash = window.location.hash;
        if (hash === '#registration-complete') {
            this.set('successBarVisible', true);
        }
    }
});
