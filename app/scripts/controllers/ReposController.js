CzHackathonPortal.ReposController = Ember.Controller.extend({
    init: function() {
        this._super();
        this.set('content', this.loadRepos);
    },

    loadRepos: function() {
        var result = Ember.ArrayProxy.create({
            content: [],
            isLoaded: false
        });

        Ember.$.ajax({
            url: 'https://api.github.com/repos/petrvolny/cz-hackathon-portal/branches',
            dataType: 'jsonp',
            context: this,
            succes: function(data) {
                data.forEach(function(branch) {
                    result.pushObject({
                        name: branch.name
                    });
                });
                result.set('isLoaded', true);
            }
        });
    }
});
