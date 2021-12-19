const express = require("express");
const bodyParser = require("body-parser");
const req = require("express/lib/request");

const app = express();

app.set("port", process.env.PORT || 4000);

// app.use( bodyParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//GET
app.get("/", function (req, res) {
 res.end(JSON.stringify(req.query));
    // res.sendFile("index.html", { root: __dirname });
});

//POST`

app.post("/", (req, res) => {
  console.log("req.body", req.body);
  res.end(JSON.stringify(req.body));
});

app.listen(app.get("port"), function () {
  console.log(`Express started on http://localhost:${app.get("port")}`);
});
