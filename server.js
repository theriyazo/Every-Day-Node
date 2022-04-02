const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log(req, res);
  //   res.send("Hello World");

  //We can even send html elements
  res.send("<h1 style='color:blue;'>This is heading 1</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<p>mailto:theriyazion@gmail.com</p>");
});

app.listen(3000, function () {
  console.log("Server started on port: 3000");
});
