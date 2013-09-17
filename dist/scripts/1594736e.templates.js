Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('        <section class="hero" id="hero">\n            '),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.render,f?f.call(b,"navigation",i):k.call(b,"render","navigation",i)))),e.buffer.push('\n            <h1 class="event-name"><span>Czech Hackathon</span></h1>\n            <h1 class="event-date"><span>Oct 18 - 20, Prague</span></h1>\n        </section>\n\n        <section class="description section-small" id="description">\n            <div class="col-xs-12">\n                <h2>Prague, October 18 - 20, 2013</h2>\n                <div class="description-left">\n                    <p>Join us for a weekend full of ideas, hacking, great atmosphere and enjoy the possibility to hang out with experts from leading czech companies.</p>\n                    <div class="social-icons">\n                        <a href="https://www.facebook.com/czhackathon"><i class="icon-facebook-sign"></i></a>\n                        <a href="https://www.twitter.com/czhackathon"><i class="icon-twitter-sign"></i></a>\n                        <a href="https://plus.google.com/104719289486706904674/about"><i class="icon-google-plus-sign"></i></a>\n                    </div>\n                    <p>Registration begins on 18th September, 2013</p>\n                </div>\n            </div>\n        </section>\n\n        <section class="topics section-small" id="topics">\n            <div class="col-xs-12">\n                <h2>Cloud & Mobile</h2>\n                <div class="description-content">\n                    <p>The topics of the hackathon are cloud and mobile. Specifying topics this wide should give all the participants enough freedom to come up with great ideas. We, as organizers, will be there to support your projects and provide mentoring and help.</p>\n                    <p>We believe, in order to have real fun, that the hackathon teams and ideas should orgranically arise from the interaction between participants right at the beginning of the event, so be prepared to give a perfect pitch ;)</p>\n                    <p>During the hackathon we will take care of food, drinks and you will be allowed to use TechSquare facilities including a space to stay overnight.</p>\n                </div>\n            </div>\n        </section>\n\n        <section class="subscribe section-small" id="subscribe">\n            <h2>Keep me posted</h2>\n            '),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.render,f?f.call(b,"subscription",i):k.call(b,"render","subscription",i)))),e.buffer.push('\n        </section>\n\n        <section class="section-small superheroes" id="superheroes">\n            <h2>Our superheroes</h2>\n\n            <div class="container">\n                <div class="row">\n                    <div class="col-md-12 superhero-items">\n                        <figure class="superhero-item">\n                            <img src="../images/martin_homolka.png" width="120" height="120">\n                            <figcaption><strong>Martin Homolka</strong> - Keen interest in big data drove Martin to launch Socialbakers where he spearheads design and development of its scalable database and cloud architecture. </figcaption>\n                        </figure>\n\n                        <figure class="superhero-item">\n                            <img src="../images/petr_volny.png" width="120" height="120">\n                            <figcaption><strong>Petr Volný</strong> - Making big data understandable to anyone by creating robust visualization platform as a front end engineer in GoodData.</figcaption>\n                        </figure>\n\n                        <figure class="superhero-item">\n                            <img src="../images/jan_jezek.png" width="120" height="120">\n                            <figcaption><strong>Jan Ježek</strong> - Network security drove much of Jan&apos;s early professional life and ultimately lead him to embracing cloud security and cloud architecture for Samepage.io.</figcaption>\n                        </figure>\n                    </div>\n                </div>\n            </div>\n\n        </section>\n\n        <section class="social section-small" id="social">\n            <h2>#czhackathon</h2>\n\n            <div class="l-full">\n                <div class="feed l-aside">\n                    <a class="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=%23czhackathon" data-widget-id="379359976419913728">Tweets about "#czhackathon"</a>\n                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>\n                </div>\n\n                <div class="l-content">\n                    '),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.render,f?f.call(b,"photos",i):k.call(b,"render","photos",i)))),e.buffer.push('\n                </div>\n            </div>\n        </section>\n\n        <section class="map section-small section-fullSize" id="map">\n            <address class="map-address">\n                <i class="icon-map-marker"></i>\n                Techsquare<br>\n                <strong>Křížová</strong> 2598 / <strong>4</strong><br>\n                150 00 <strong>Praha 5</strong>\n            </address>\n            <iframe width=\'100%\' height=\'400\' frameBorder=\'0\' src=\'http://a.tiles.mapbox.com/v3/gooddata.map-bnx2noma.html#14/50.10670792159607/14.420585632324219\'></iframe>\n        </section>\n\n        <section class="section-small section-fullSize" id="sponsors">\n            <ul class="sponsors">\n                <li><a href="https://www.gooddata.com" class="sponsor-gooddata">GoodData</a></li>\n                <li><a href="http://www.kerio.com" class="sponsor-kerio">Kerio</a></li>\n                <li><a href="http://corporate.geewa.com" class="sponsor-geewa">Geewa</a></li>\n                <li><a href="http://www.inmite.com" class="sponsor-inmite">Inmite</a></li>\n                <li><a href="http://www.socialbakers.com" class="sponsor-socialbakers">Socialbakers</a></li>\n            </ul>\n        </section>\n\n        <section class="footer section-small section-fullSize" id="footer">\n            <h2 class="l-prev">Czech Hackathon!</h2>\n            <img src="../images/cat-avatar.jpg" width="78" height="78" alt="Hacking cat" class="l-next">\n        </section>\n'),j}),Ember.TEMPLATES.navigation=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="navigation">\n    <ul class="navigation-list">\n        <li class="section-item" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollTo","hero",{hash:{},contexts:[b,b],types:["STRING","STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>The Cat</li>\n        <li class="section-item" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollTo","description",{hash:{},contexts:[b,b],types:["STRING","STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>Description</li>\n        <li class="section-item" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollTo","topics",{hash:{},contexts:[b,b],types:["STRING","STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>Topics</li>\n        <li class="section-item" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollTo","subscribe",{hash:{},contexts:[b,b],types:["STRING","STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>Subscription</li>\n        <li class="section-item" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollTo","superheroes",{hash:{},contexts:[b,b],types:["STRING","STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>Superheroes</li>\n        <li class="section-item" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollTo","social",{hash:{},contexts:[b,b],types:["STRING","STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>Social</li>\n        <li class="section-item" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollTo","map",{hash:{},contexts:[b,b],types:["STRING","STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>Map</li>\n    </ul>\n</div>\n\n<a href="#" '),g={"class":b},f={"class":"STRING"},e.buffer.push(i(c.bindAttr.call(b,{hash:{"class":":navigation-arrow collapsed:icon-arrow-right:icon-arrow-left"},contexts:[],types:[],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push(" "),f={},g={},e.buffer.push(i(c.action.call(b,"toggleNavigation",{hash:{},contexts:[b],types:["STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('></a>\n<a href="#" class="navigation-scroll icon-arrow-down" '),f={},g={},e.buffer.push(i(c.action.call(b,"scrollDown",{hash:{},contexts:[b],types:["STRING"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("></a>"),h}),Ember.TEMPLATES.photos=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n        <li><a "),d={href:a},e={href:"STRING"},b.buffer.push(k(c.bindAttr.call(a,{hash:{href:"instagramLink"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("><img "),d={src:a},e={src:"STRING"},b.buffer.push(k(c.bindAttr.call(a,{hash:{src:"lowRes"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(' width="140" height="140" alt=""></a></li>\n    '),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<ul class="photos">\n    '),h={},i={},g=c.each.call(b,"content",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</ul>\n"),j}),Ember.TEMPLATES.subscription=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n    <div class="subscribe-form">\n        <div class="form-items">\n            '),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"msg",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n        </div>\n    </div>\n"),f}function g(a,b){var d,e,f,g="";return b.buffer.push("\n    "),e={},f={},d=c["if"].call(a,"unableToSubscribe",{hash:{},inverse:o.program(6,i,b),fn:o.program(4,h,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n"),g}function h(a,b){var d,e,f="";return b.buffer.push('\n        <div class="subscribe-form">\n            <div class="form-items">\n                '),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"msg",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n            </div>\n        </div>\n    "),f}function i(a,b){var d,e,f="";return b.buffer.push('\n        <div class="subscribe-form">\n            <div class="form-items">\n                <div class="form-item">\n                    <div class="form-item-text">\n                        <label for="email">Email address:</label>\n                    </div>\n                    <div class="form-inputs">\n                        '),d={valueBinding:a,name:a},e={valueBinding:"STRING",name:"STRING"},b.buffer.push(n(c.view.call(a,"Ember.TextField",{hash:{valueBinding:"email",name:"email"},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push('\n                    </div>\n                </div>\n\n                <div class="form-item">\n                    <div class="form-item-text">\n                        <label for="first">First name:</label>\n                    </div>\n                    <div class="form-inputs">\n                        '),d={valueBinding:a,name:a},e={valueBinding:"STRING",name:"STRING"},b.buffer.push(n(c.view.call(a,"Ember.TextField",{hash:{valueBinding:"first",name:"first"},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push('\n                    </div>\n                </div>\n\n                <div class="form-item">\n                    <div class="form-item-text">\n                        <label for="last">Last name:</label>\n                    </div>\n                    <div class="form-inputs">\n                        '),d={valueBinding:a,name:a},e={valueBinding:"STRING",name:"STRING"},b.buffer.push(n(c.view.call(a,"Ember.TextField",{hash:{valueBinding:"last",name:"last"},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push('\n                    </div>\n                </div>\n            </div>\n\n            <div class="form-buttons">\n                <button type="submit" '),e={},d={},b.buffer.push(n(c.action.call(a,"submit",{hash:{},contexts:[a],types:["STRING"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(">Subscribe to list</button>\n            </div>\n        </div>\n    "),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var j,k,l,m="",n=this.escapeExpression,o=this;return k={},l={},j=c["if"].call(b,"registered",{hash:{},inverse:o.program(3,g,e),fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n"),m}),Ember.TEMPLATES.twitter=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g="";return b.buffer.push('\n        <div class="feedItem">\n            <p>'),e={unescaped:a},f={unescaped:"STRING"},d=c._triageMustache.call(a,"tweet",{hash:{unescaped:"true"},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('</p>\n            <div class="feedItem-meta">\n                <a '),e={href:a},f={href:"STRING"},b.buffer.push(k(c.bindAttr.call(a,{hash:{href:"userUrl"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push(">"),f={},e={},b.buffer.push(k(c._triageMustache.call(a,"user",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push("</a>\n                <!--<span>25 mins ago</span>-->\n                <span>"),f={},e={},b.buffer.push(k(c._triageMustache.call(a,"createdAtAgo",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push("</span>\n            </div>\n        </div>\n    "),g}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div class="feedItems">\n    '),h={},i={},g=c.each.call(b,"content",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</div>\n"),j});