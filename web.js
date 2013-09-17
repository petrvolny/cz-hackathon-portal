var express = require("express");

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname+'/dist'));
app.use(function(req, res, next) {
    var others = [
            'czhackathon.herokuapp.com',
            'czechhackathon.com',
            'www.czechhackaton.cz',
            //'www.czechhackathon.cz', // <-- the final one
            'www.czechhackathon.com',
            'czechhackaton.cz',
            'czechhackathon.cz'
        ];
    if(others.filter(function(el, idx, ar) {
        return el === req.headers.host;
    }).length !== 0) {
        return res.send({'Location:': 'http://www.czechhackathon.cz' + req.url}, 301);
    }
    next();
});

app.get('/', function(request, response) {
  response.render('index.html');
});
// app.post('/subscribe', mailchimp.addSubscriber);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
