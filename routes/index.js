var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
});

module.exports = router;

/*
// contoh connect()
connection.connect(function(err) {
  if (err) {
  	test = err.stack;
    console.error('error connecting: ' + err.stack);
    return;
  }
  else{
  	test = "Connected";
  	console.log('connected as id ' + connection.threadId);
  }
  
});
*/