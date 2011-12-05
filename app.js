
/**
 * Module dependencies.
 */
var querystring = require('querystring');
var http = require('http');
var request = require('request');

var ec_eng = require('./post.js')

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer(express.logger());

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


// Error Handling
function EmptyField(msg){
  this.name = 'EmptyField';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}

EmptyField.prototype.__proto__ = Error.prototype;

app.get('/404', function(req, res){
  throw new EmptyField;
});

app.get('/500', function(req, res){
  throw new Error('keyboard cat!');
});


// Persistence
var mongolian = require("mongolian");
var db = new mongolian("mongodb://app:app@flame.mongohq.com:27043/ai_test");


// Routes

app.get('/', routes.index);

/*
app.put('/', function(req, res) {
  var deal = req.body.deal_description;
  var tags = req.body.all_tags;
  console.log("deal is : "  + deal + " and tags are " + tags);
  res.contentType('json');
  res.send(JSON.stringify({ status: "success" }));
});
*/

app.put('/', function(req, res){
  console.log("*********************************");
  console.log(req.body.user);

  if (req.body.user != undefined && !!req.body.user.email && !!req.body.user.name) {
    console.log("Inserting . . . ");
    db.collection("users").insert({
      email: req.body.user.email,
      name:  req.body.user.name 
    });
    console.log("Inserted!");
    
    var data = querystring.stringify({
        'email' : req.body.user.email,
        'name'  : req.body.user.name
    });
    console.log("Posting . . .");

    //ec_eng.PostToCommerceEndPoint(data); 
    request('http://www.google.com', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("http request okay") // Print the google web page.
        res.redirect('http://www.google.com');
      }
    })

    console.log("Posted!");
  }
  else console.log("OOOPS.... " + JSON.stringify(req.body.user));

  //res.contentType('json');
  //res.send(JSON.stringify(req.body.user));
  
  console.log("*********************************");
 
  //res.send(JSON.stringify({ status: "success" }));
  //res.redirect('back');
});

/*
app.post('/', function(req, res){
    console.log("*********************************");
    console.log(req.body.user);
  res.contentType('json');
  res.send(JSON.stringify(req.body.user));
  //res.send(JSON.stringify({ status: "success" }));
  //res.redirect('back');
});
*/

app.listen(34376);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
