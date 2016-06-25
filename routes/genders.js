var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:gender');

/* GET gender listing. */
router.get('/', function(req, res, next) {
	sql = "select * from gender";
	connection.query(sql,function(err, results){
		res.send(results);
	});
});

module.exports = router;