var express = require('express');

var app = express.createServer(express.logger());
var content;
app.get('/', function(request, response) {
    var fs = require("fs");
    fs.readFileSync('index.html','utf8', function (err, data){
      if (err) {
	  throw err;
      }
  //content = data.toString("utf8", 0, data.length);
  response.send(data);
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
