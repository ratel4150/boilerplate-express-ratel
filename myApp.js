var express = require('express');
const { get } = require('express/lib/response');
var app = express();
console.log("Hello World");


app.get("/",function(req, res) {
    res.send('Hello Express');
  });


































 module.exports = app;
