var express = require('express');
var app = express();
console.log("Hello World");

/*app.get("/", function(req, res) {
  res.sendFile( __dirname + "/views/index.html");
});

app.use("/", function(req, res) {
  res.sendFile( __dirname + "/style.css");
});*/

/*app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});*/

/******5*****//*app.get("/json", (req, res) => {
  res.json({
    message: "Hello json
  });
});
*/
app.use('/json', (req, res) => {
  let message = "Hello json"
  
  if (process.env.MESSAGE_STYLE==='uppercase') {
    return res.json({"message": message.toUpperCase()});
  }
  else {
    return res.json({"message": message})
  };
});


































 module.exports = app;
