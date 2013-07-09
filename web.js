var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var output_buf = fs.readFile("index.html");
  var output_str = output_buf.toString();
  response.send(output_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
