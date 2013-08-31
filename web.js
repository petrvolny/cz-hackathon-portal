var express = require("express");

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname+'/dist'));

require('coffee-script');
runHook = require(__dirname + '/src/eventbrite').run;

app.get('/', function(request, response) {
  response.render('index.html');
});
// app.post('/subscribe', mailchimp.addSubscriber);

app.get('/registration-hook', function(request, response) {
  var options = {eid: request.query.eid, oid: request.query.oid};
  response.end('Please, confirm your invation - received by e-mail - to Czech Hackathon portal hosted at Samepage.io.');
  //response.redirect('http://www.czechhackathon.cz/registration-complete');
  runHook(options);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
