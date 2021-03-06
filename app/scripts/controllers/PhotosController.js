/* globals Em */
CzHackathonPortal.PhotosController = Ember.Controller.extend({

    nextPage: 'https://api.instagram.com/v1/tags/czhackathon/media/recent?client_id=899426d0f7f445ff9f744fff5260e134',

    content: [],

    init: function() {
        this._super();
        this.set('content', this.loadPhotos());
    },

    loadPhotos: function() {
        var result = Ember.ArrayProxy.create({
            content: [],
            isLoaded: false
        });

        Ember.$.ajax({
            url: this.nextPage,
            dataType: 'jsonp',
            context: this,
            success: function(data) {
                var instaPhotos = data.data;

                instaPhotos.forEach(function(photo, index) {
                    if (index >= 12) return;
                    result.pushObject({
                        lowRes: photo.images.low_resolution.url,
                        instagramLink: photo.link
                    });
                });
                result.set('isLoaded', true);
            }
        });

        return result;
    }
});
