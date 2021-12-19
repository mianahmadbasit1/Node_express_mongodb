const express = require("express");
//npm i body-parser
const bodyParser = require("body-Parser");
//npm i express-session
const sessions = require("express-session");

var session;

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  sessions({
    secret: "&hksf^kdj^jdkjk^jjs",
    resave: false,
    saveUninitialized: true,
  })
);

//static folder
//ok
app.use("/public", express.static(__dirname + "/public"));
//ok
app.get("/", function (req, res) {
  res.sendFile("./index.html", {
    root: __dirname,
  });
});
//fault
app.get("/login", function (req, res) {
  session = req.session;
  if (Session.uniqueID) {
    res.redirect("/redirects");
  } else {
      //fault
    res.sendFile('./express/Login/login.html',
      {
        root: __dirname,
      });
  }
});
//ok
app.post("/login", function (req, res) {
  session = req.session;
  if (req.body.username == "admin" && req.body.password == "admin") {
    session.uniqueID = req.body.username;
  }
  res.redirect("/redirects");
});
//ok
app.get("/redirects", function (req, res) {
  session = req.session;
  if (session.uniqueID) {
    res.redirect("/admin");
  } else {
    res.send("Who are u");
  }
});
//ok
app.get("/admin", function (req, res) {
  res.send('wow you are admin...! <a href="/logout">Logout</a>');
});
//ok
app.get("/logout", function (req, res) {
  req.session.destroy |
    function (err) {
      console.log("Err", err);
      res.redirect("/login");
    };
});
app.get("*", function (req, res) {
  res.end("what Exactly you want?");
});

app.listen(1717, function () {
  console.log(`Express Started on http://localhost:${1717}`);
});
