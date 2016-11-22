var express = require("express");

var app = express();

app.get('*', function (req, res) {
  var header = req.headers
  var language = header['accept-language'].split(',')[0]
  var ip = header['x-forwarded-for'] || req.connection.remoteAddress

  res.json({
    "ip": ip,
    "language": language,
    "operating system": ""
  })
});



app.listen(process.env.PORT || 3000, function () {console.log('running')} )
//I can get the IP address, language and operating system for my browser.
