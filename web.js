var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());
var content;
app.get('/', function(request, response) {
  fs.readFileSync('./index.html', function read(err, data){
      if (err) {
	  throw err;
      }
  content = data;
  response.send(data.toString());
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
