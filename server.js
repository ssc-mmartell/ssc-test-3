var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));

app.listen(process.env.PORT || 5000, function() {
  console.log('listening');
});