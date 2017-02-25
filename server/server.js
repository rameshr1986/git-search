var express = require('express');
var request = require("request");
var app = express();
app.use(express.static("./build"));
app.get("*search/*", proxy);
app.get("*repos/*", proxy);

function proxy(req, res) {
  var url = req.url;
  var newUrl = request("http://api.github.com" + url);
  newUrl.pipe(res);
  req.pipe(newUrl);
}
app.listen(8000);
