var express = require("express");
var url     = require("url");

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(function(req, res, next) {
    var redirect_url = "http://www.czechhackathon.cz",
        redirect_host = url.parse(redirect_url).host,
        requested_host = req.header("host").split(":")[0];

    if (requested_host === "localhost" || requested_host === "czhackathon-dev.herokuapp.com" || requested_host === redirect_host) {
        next();
    } else {
        res.redirect(301, redirect_url+req.path);
    }
});
app.use(express.static(__dirname+'/dist'));

require('coffee-script');
runHook = require(__dirname + '/src/eventbrite').run;

app.get('/', function(request, response) {
  response.render('index.html');
});
// app.post('/subscribe', mailchimp.addSubscriber);

app.get('/registration-hook', function(request, response) {
  var options = {eid: request.query.eid, oid: request.query.oid};
  response.redirect('http://www.czechhackathon.cz/#registration-complete');
  runHook(options);
});

app.get('/robots.txt', function(request, response) {
  response.render('robots.txt');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
