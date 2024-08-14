const express = require("express");
const app = express();

app.use(function (req, res, next) {
  next();
});

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("index",{name:"sumit" , age:"12"});
});

app.get("/profile/:username", function (req, res) {
  res.send(`my name is ${req.params.username}`);
});

app.get("/other", function (req, res) {
  res.send("i am other page");
});

app.get("/new", function (req, res) {
  res.send("i ma new cx page");
});

app.get("/dashboard", function (req, res) {
  res.send("this is my new dashboard");
});

app.listen(3700);
