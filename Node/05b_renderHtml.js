var http = require("http");
var fs = require("fs");

function sendFile(path, res, mime) {
  fs.readFile(path, function (err, data) {
    if (err) {
      //   errorHandling (err,res);
      return;
    }
    res.writeHead(200, {
      "content-Type": mime,
    });
    res.end();
  });
}
http
  .createServer(function (req, res) {
    if (req.url == "./ahmad.js") {
      sendFile("./ahmad.js", res, "text/javascript");
      return;
    }

    fs.readFile("./ahmad.html", function (err, data) {
      res.writeHead(200, {
        "content-Type": "text/html",
      });
      res.write(data);
      res.end();
    });
  })
  .listen(7000);
