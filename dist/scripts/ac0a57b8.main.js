!function(){var a=window.CzHackathonPortal=Em.Application.create();a.ApplicationView=Em.View.extend({classNames:["app"]})}(),function(){CzHackathonPortal.NavigationController=Em.Controller.extend({collapsed:!0,$viewport:$("body,html"),scrollDown:function(){this.get("$viewport").animate({scrollTop:$("#description").offset().top},1e3,"swing")},scrollTo:function(a){this.get("$viewport").animate({scrollTop:$("#"+a).offset().top},600,"swing"),this.set("collapsed",!0)},toggleNavigation:function(){this.set("collapsed",!this.get("collapsed"))},collapsedDidChange:function(){var a=this.get("collapsed");a?($(".navigation-arrow").animate({left:"0px"},200),$(".navigation").animate({left:"-270px"},200)):($(".navigation-arrow").animate({left:"-100px"},200),$(".navigation").animate({left:"0px"},200))}.observes("collapsed")})}(),function(){CzHackathonPortal.PhotosController=Ember.Controller.extend({nextPage:"https://api.instagram.com/v1/tags/czhackathon/media/recent?client_id=899426d0f7f445ff9f744fff5260e134",content:[],init:function(){this._super(),this.set("content",this.loadPhotos())},loadPhotos:function(){var a=Ember.ArrayProxy.create({content:[],isLoaded:!1});return Ember.$.ajax({url:this.nextPage,dataType:"jsonp",context:this,success:function(b){var c=b.data;c.forEach(function(b,c){c>=12||a.pushObject({lowRes:b.images.low_resolution.url,instagramLink:b.link})}),a.set("isLoaded",!0)}}),a}})}(),function(){CzHackathonPortal.ReposController=Ember.Controller.extend({init:function(){this._super(),this.set("content",this.loadRepos)},loadRepos:function(){var a=Ember.ArrayProxy.create({content:[],isLoaded:!1});Ember.$.ajax({url:"https://api.github.com/repos/petrvolny/cz-hackathon-portal/branches",dataType:"jsonp",context:this,succes:function(b){b.forEach(function(b){a.pushObject({name:b.name})}),a.set("isLoaded",!0)}})}})}(),function(){CzHackathonPortal.SubscriptionController=Em.Controller.extend({registered:!1,unableToSubscribe:!1,msg:void 0,MAIL_U:"2a2c44025cf4b6d1ddf24be51",MAIL_ID:"404fd162e8",MAIL_PREFIX:"http://posterous.us4.list-manage.com",submit:function(){var a=encodeURIComponent(this.get("email")),b=encodeURIComponent(this.get("first")),c=encodeURIComponent(this.get("last")),d="MERGE0=%@1&MERGE1=%@2&MERGE2=%@3".fmt(a,b,c);Em.$.ajax({type:"get",url:"%@1/subscribe/post-json?u=%@2&id=%@3&c=?".fmt(this.MAIL_PREFIX,this.MAIL_U,this.MAIL_ID),data:d,cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",error:function(){this.set("msg","Oops. Server error occured..."),this.set("unableToSubscribe",!0)},success:function(a){"success"!==a.result?(this.set("msg",a.msg),this.set("unableToSubscribe",!0)):(this.set("msg",a.msg),this.set("registered",!0),this.set("email",""),this.set("first",""),this.set("last",""))}.bind(this)})}})}(),function(){CzHackathonPortal.TwitterController=Ember.Controller.extend({twitterQuery:"http://search.twitter.com/search.json?q=hackathon",content:[],init:function(){this._super(),this.set("content",this.loadTweets())},loadTweets:function(){var a=Ember.ArrayProxy.create({content:[],isLoaded:!1});return Ember.$.ajax({url:this.twitterQuery,dataType:"jsonp",context:this,success:function(b){var c=b.results;c.forEach(function(b,c){if(!(c>=4)){var d=b.text.split(" ");d=d.map(function(a){return"#"===a.substring(0,1)?'<a href="https://twitter.com/search?q=%23'+a.substring(1,a.length)+'&src=hash">'+a+"</a>":"http://"===a.substring(0,7)||"https://"===a.substring(0,8)?'<a href="'+a+'">'+a+"</a>":a});var e=d.join(" ");a.pushObject({tweet:e,user:b.from_user,userUrl:"https://twitter.com/"+b.from_user,createdAtAgo:$.timeago(b.created_at)})}}),a.set("isLoaded",!0)}}),a}})}(),function(){CzHackathonPortal.ApplicationRoute=Ember.Route.extend()}(),function(){CzHackathonPortal.Router.map(function(){})}();