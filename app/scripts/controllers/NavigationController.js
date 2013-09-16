/* globals Em, $ */
CzHackathonPortal.NavigationController = Em.Controller.extend({
    collapsed: true,

    $viewport: $('body, html'),

    scrollDown: function() {
        this.get('$viewport').animate({
            scrollTop: $("#description").offset().top
        }, 1000, "swing");
    },

    scrollTo: function(id) {
        this.get('$viewport').animate({
            scrollTop: $("#" + id).offset().top
        }, 600, "swing");
        this.set('collapsed', true);
    },

    toggleNavigation: function() {
        this.set('collapsed', !this.get('collapsed'));
    },

    collapsedDidChange: function() {
        var collapsed = this.get('collapsed');

        if (collapsed) {
            $('.navigation-arrow').animate({left: '0px'}, 200);
            $('.navigation').animate({left: '-270px'}, 200);
        } else {
            $('.navigation-arrow').animate({left: '-100px'}, 200);
            $('.navigation').animate({left: '0px'}, 200);
        }
    }.observes('collapsed')
});
