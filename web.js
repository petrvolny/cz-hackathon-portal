var express = require("express");

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname+'/app'));

// app.post('/subscribe', mailchimp.addSubscriber);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
