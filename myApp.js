require('dotenv').config({path:__dirname + '/.env'});
var bodyParser = require("body-parser");
var express = require('express');
var app = express();
console.log("Hello World");

// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' ' + '-' + ' ' + req.ip)
  next()
  })
  
  // --> 11)  Mount the body-parser middleware  here
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 
  
  /** 1) Meet the node console. */
  app.use('*', (req, res, next) => {
  console.log('Hello World')
  next()
  })
  
  /** 2) A first working Express Server */
  //app.get('/', function (req, res) {
  //  res.send('Hello Express')
  //})
  
  /** 3) Serve an HTML file */
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
  })
  
  /** 4) Serve static assets  */
  app.use('/', express.static(path.join(__dirname, 'public')))
  
  /** 5) serve JSON on a specific route */
  app.get('/json', (req, res) => {
    let message = 'Hello json'
    if (process.env.MESSAGE_STYLE === 'uppercase') {
      return res.json({"message": message.toUpperCase()})
    }
    return res.status(200).json({"message": message})
  })
  
  /** 6) Use the .env file to configure the app */
   var message ="Hello json";
  var msgObj ={};
  msgObj = {"message":message};
      if(process.env.MESSAGE_STYLE=="uppercase")
      {
        message = message.toUpperCase();
        msgObj.message = message;
      }
        
      app.get("/json", function(req, res) {
        return res.json(msgObj);
        });
   
  /** 7) Root-level Middleware - A logger */
  //  place it before all the routes !
  
  
  /** 8) Chaining middleware. A Time server */
  app.get('/now', (req, res, next) => {
    req.time = new Date().toISOString()
   
    next()
  }, (req, res) => {
    res.status(200).json({"time": req.time})
  })
  
  /** 9)  Get input from client - Route parameters */
  app.get('/:word/echo', (req, res) => {
    res.status(200).json({"echo": req.params.word})
  })
  
  /** 10) Get input from client - Query parameters */
  //
  // /name?first=<firstname>&last=<lastname>
  app.route('/name').get((req, res) => {
    res.status(200).json({"name": req.query.first + ' ' + req.query.last})
     
  }).post((req, res) => {
    res.status(200).json({"name": req.query.first + ' ' + req.query.last})
  })
    
  /** 11) Get ready for POST Requests - the `body-parser` */
  // place it before all the routes !
  
  
  /** 12) Get data form POST  */
  app.post('/name', (req, res) => {
    let name = req.body.first + ' ' + req.body.last;
    res.json({name: 'firstname lastname'});
  });
  
  
  // This would be part of the basic setup of an Express app
  // but to allow FCC to run tests, the server is already active
  /** app.listen(process.env.PORT || 3000 ); */
  
  //---------- DO NOT EDIT BELOW THIS LINE --------------------














 module.exports = app;
