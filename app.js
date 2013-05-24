/**
 * Module dependencies.
 */
var express = require('express')
  , http = require('http')
  , path = require('path')
  , routes = require('./routes')
  , recipes = require('./routes/recipes')
  , login = require('./routes/login')
  , user = require('./routes/user')
  , copy = require('./data/copy')
  , Config = require('./config/config')
  , config = new Config()
  , events = require("events");
  ;

var server = express.createServer();
server.use(express.bodyParser());
server.use('/public', express.static('public'));

/**
 * Routes.
 */
server.get('/', function(req, res){
  res.render('index.ejs', copy.data.index);
});
server.get('/login', login.login);
server.get('/login/authenticate', login.loginAuthenticate);
server.get('/recipes', recipes.list);
server.get('/recipes/suggest', recipes.suggest);
server.post('/recipes/suggest', recipes.suggestPost);
server.get('/recipes/:title', recipes.single);
server.get('/users', user.list);
server.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

/**
 * Start server
 */
server.listen(config.server.port);
console.log('Server started!');
console.log('listening on port ' + config.server.port);
if(!process.env.NODE_ENV) {
   process.env.NODE_ENV = "development";
}
console.log('deployed as : ' + process.env.NODE_ENV);