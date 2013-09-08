/* globals Em, $ */
CzHackathonPortal.HamburgerController = Em.Controller.extend({
    collapsed: true,

    scrollDown: function() {
        $(document.body).animate({
            "scrollTop": $("#description").offset().top
        }, 1000, "swing");
    },

    scrollTo: function(id) {
        $(document.body).animate({
            "scrollTop": $("#"+id).offset().top
        }, 600, "swing");
        this.set('collapsed', true);
    },

    toggleHamburger: function() {
        this.set('collapsed', !this.get('collapsed'));
    },

    collapsedDidChange: function() {
        var collapsed = this.get('collapsed');

        if (collapsed) {
            $('.hamburger-arrow').animate({left: '0px'}, 200);
            $('.hamburger-content').animate({left: '-270px'}, 200);
        } else {
            $('.hamburger-arrow').animate({left: '-100px'}, 200);
            $('.hamburger-content').animate({left: '0px'}, 200);
        }
    }.observes('collapsed')
});
