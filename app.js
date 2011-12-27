
/**
 * Module dependencies.
 */

//
// Alphabet -> Word Engine 
//
var WG = require('./models/wordgenerator.js')

//
// node modules
//
var querystring = require('querystring');
var http = require('http');
var request = require('request');

//
// express
//
var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer(express.logger());

//
// Configuration
//
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

//
// Error Handling
//
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

//
// Persistence
//
var mongolian = require("mongolian");
var db = new mongolian("mongodb://app:app@flame.mongohq.com:27043/ai_test");

//
// Routes
//
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

app.post('/fun', function(req, res){
  console.log("*********************************");
  console.log("req.body.user = " + req.body.user);
  var user = req.body.user;
  console.log("req.body.gender = " + req.body.gender);
  var gen = req.body.gender;

  if (user != null && user != "" && req.body.user != "undefined") {
    console.log("Inserting . . . ");
    db.collection("users").insert({
      name:  user,
      gender: gen 
    });
    console.log("Inserted!");

    var result = "";
    //var data = querystring.stringify({'email' : req.body.user.email, 'name'  : req.body.user.name});

    var wordGen = new WG.WordGenerator(gen);
    var result = wordGen.generate(user);
    console.log("result = " + result);
  
    var answer = {};
    answer.name=req.body.user.toUpperCase();
    answer.sentence = result.join(", ");

    //res.contentType('json');
    //res.send(JSON.stringify(answer));

    var output = "<b>" + answer.name + "</b>" + "<p>";
    output = output + "def: " + answer.sentence + ".<p>";
    output = output + "<p class=\"buy\"><a href=\"#\">buy <span>" + answer.name + "</span> mugs &amp; shirts</a></p>";
    
    //res.contentType('json');
    //res.send(JSON.stringify(answer));
    res.contentType('html');
    res.send(output);
    console.log("*********************************");
    
    /*
    console.log("Posting . . .");
    request('http://www.google.com', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("http request okay") // Print the google web page.
        res.redirect('http://www.zazzle.com');
      }
    })
    console.log("Posted!");
    */
  }
  else {
    console.log("OOOPS.... " + JSON.stringify(req.body.user));
    res.contentType('json');
    res.send(JSON.stringify({error:"Name Not Provided"}));
    console.log("*********************************");
  }
 
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
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

Array.findIndex = function(array, value) {
  var ctr = null;
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return ctr;
};
*/
