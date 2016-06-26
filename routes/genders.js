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

router.get('/count', function(req, res, next){
	sql = "select count(*) as count from gender";
	connection.query(sql, function(err, results){
		res.send(results);
	});
});

router.post('/',function(req, res, next){
	res.send("add");
});

router.put('/',function(req, res, next){
	res.send("edit");
});
router.delete('/', function(req, res, next){
	res.send("delete");
});

module.exports = router;