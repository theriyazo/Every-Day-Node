const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.text);
// app.use(bodyParser.json);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  const sum = Number(req.body.num1) + Number(req.body.num2);
  res.send(`The Sum of: ${req.body.num1} and ${req.body.num2} is: ${sum}`);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
  console.log();
});

// BMI CALCULATOR

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  const wgt = parseFloat(req.body.weight);
  const hgt = parseFloat(req.body.height);
  const result = wgt / (hgt * hgt);

  res.send(`Your Calculated BMI: ${result.toFixed(2)}`);
});
