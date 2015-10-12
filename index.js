var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use(require("./router"));

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Homes for the Lonely listening at http://%s:%s', host, port);
});
