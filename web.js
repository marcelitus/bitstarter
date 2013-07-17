var express = require('express');

var app = express.createServer(express.logger());
var content;
app.get('/', function(request, response) {
    var fs = require("fs");
    var buffer = new Buffer('utc-8', fs.readFileSync("index.html"));
    response.send(buffer.toString();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
