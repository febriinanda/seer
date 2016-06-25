var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:religion');

/* GET religion listing. */
router.get('/', function(req, res, next) {
	sql = "select * from religion";
	connection.query(sql,function(err, results){
		res.send(results);
	});
});

module.exports = router;