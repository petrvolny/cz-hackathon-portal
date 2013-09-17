var express = require("express");
var url     = require("url");

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(function(req, res, next) {
    var redirect_url = "http://www.czechhackathon.cz",
        redirect_host = url.parse(redirect_url).host,
        requested_host = req.header("host").split(":")[0];

    // console.log("=============== " + requested_host + " ===============");
    if (requested_host === "localhost" || requested_host === redirect_host) {
        next();
    } else {
        // console.log("===============R: " + redirect_url+req.path + " ===============");
        res.redirect(301, redirect_url+req.path);
    }
});
app.use(express.static(__dirname+'/dist'));

app.get('/', function(request, response) {
  response.render('index.html');
});
// app.post('/subscribe', mailchimp.addSubscriber);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
