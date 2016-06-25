var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:user');


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send("Some respond");  
});

module.exports = router;
