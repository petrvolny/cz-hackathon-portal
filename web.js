var express = require("express");
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/'));
app.get('/', function(request, response) {
  response.render('index.html');
});
app.get('/robots.txt', function(request, response) {
  response.render('robots.txt');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
