var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/', express.static(__dirname + "/"));

app.get('/', function(request, response) {
  var output_buf = fs.readFileSync("index.html");
  var output_str = output_buf.toString();
  response.send(output_str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
