const http = require("http");

const hostname = "127.0.0.2";
const port = 3002;
var courses = [
  { id: 1, name: "js" },
  { id: 2, name: "node" },
];
var users = ["userA", "UserB"];

var server = http.createServer((req, res) => {
  console.log("got a request!", req.url);

  if (req.url === "/api/courses") {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;

    res.write(JSON.stringify(courses));
    res.end();
  } else if (req.url === "/api/users") {
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.write("<h1>Jeet gaya pakistan </h1>:\n Ahmad" + req.url);
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
