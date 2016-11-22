var express = require("express");

var app = express();

app.get('*', function (req, res) {
  var header = req.headers
  var language = header['accept-language'].split(',')[0]
  var ip = header['x-forwarded-for'] || req.connection.remoteAddress
  var ua = header['user-agent'];
  var os = ua.substring(ua.indexOf('(')+1, ua.indexOf(')'));

  console.log(os);

  res.json({
    "ip": ip,
    "language": language,
    "operating system": os
  })
});



app.listen(process.env.PORT || 3000, function () {console.log('running')} );
