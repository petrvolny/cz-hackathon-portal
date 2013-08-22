/* globals Em, $, window */
CzHackathonPortal.SubscriptionController = Em.Controller.extend({

    registered: false,
    unableToSubscribe: false,
    msg: undefined,

    MAIL_U: '2a2c44025cf4b6d1ddf24be51',
    MAIL_ID: '404fd162e8',
    MAIL_PREFIX: 'http://posterous.us4.list-manage.com',
    submit: function() {
        // fetch form fields
        var mail = encodeURIComponent(this.get('email')),
            first = encodeURIComponent(this.get('first')),
            last = encodeURIComponent(this.get('last')),
            data = "MERGE0=%@1&MERGE1=%@2&MERGE2=%@3".fmt(mail, first, last);

        Em.$.ajax({
            type: 'get',
            url: "%@1/subscribe/post-json?u=%@2&id=%@3&c=?".fmt(this.MAIL_PREFIX, this.MAIL_U, this.MAIL_ID),
            data        : data,
            cache       : false,
            dataType    : 'json',
            contentType: "application/json; charset=utf-8",
            error       : function(err) {
                this.set('msg', 'Oops. Server error occured...');
                this.set('unableToSubscribe', true);
            },
            success     : function(data) {
                if (data.result !== 'success') {
                    this.set('msg', data.msg);
                    this.set('unableToSubscribe', true);
                } else {
                    this.set('msg', data.msg);
                    this.set('registered', true);


                    // clear form fields
                    this.set('email', '');
                    this.set('first', '');
                    this.set('last', '');
                }
            }.bind(this)
        });
    }
});
