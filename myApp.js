require('dotenv').config({path:__dirname + '/.env'});
var bodyParser = require("body-parser");
var express = require('express');
var app = express();
console.log("Hello World");

/* 
make sure it -> asegurate de que
 app.METHOD(PATH, HANDLER)
->METHOD is an http method
->PATH is a relative path on the server
->HANDLER is a function that Express calls when the route is matched
->Handlers take the form function(req, res) {...}, 
where req is the request object, and res is the response object. For example, the handler
-----------------------------------------------------------------------------------------
Use the app.get() method to serve the string "Hello Express" to GET requests matching 
the / (root) path. Be sure that your code works by 
looking at the logs, then see the results in the preview if you are using Replit.

*/

app.get("/",function(req, res) {
  res.send('Response String');
})

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



/* app.use('/json', (req, res) => {
  let message = "Hello json"
  
  if (process.env.MESSAGE_STYLE==='uppercase') {
    return res.json({"message": message.toUpperCase()});
  }
  else {
    return res.json({"message": message})
  };
}); */





































 module.exports = app;
