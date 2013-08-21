CzHackathonPortal.SubscriptionController = Em.Controller.extend({
    MAIL_U: '8db9d4741698c36d9a9ede601',
    MAIL_ID: '7fcfb9fb29',
    MAIL_PREFIX: 'http://sdflkjslkdfjalk.us7.list-manage1.com',
    submit: function() {
        // fetch form fields
        var mail = this.get('email');
        var first = this.get('first');
        var last = this.get('last');

        $.ajax({
            type: 'get',
            url: "%@1/subscribe/post-json?u=%@2&id=%@3&c=?".fmt(this.MAIL_PREFIX, this.MAIL_U, this.MAIL_ID),
            data: "MERGE0=%@1&MERGE1=%@2&MERGE2=%@3".fmt(mail, first, last),
            cache       : false,
            dataType    : 'json',
            contentType: "application/json; charset=utf-8",
            error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
            success     : function(data) {
                if (data.result != "success") {
                    // something went wrong, handle this
                    alert(data.msg);
                } else {
                    alert('wohooooo, confirm your mail');

                    // clear form fields
                    this.set('email', '');
                    this.set('first', '');
                    this.set('last', '');
                }
            }.bind(this)
        });
    }
});
