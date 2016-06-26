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

router.get('/count/', function(req, res, next){
	sql = "select count(*) as count from gender";
	connection.query(sql, function(err, results){
		res.send(results);
	});
});

router.get('/:id', function(req, res, next) {
	sql = "select * from gender where id_gender="+req.params.id;
	connection.query(sql,function(err, results){
		getResult(res, err, results);
	});
});

router.post('/',function(req, res, next){
	param = req.body;
	console.log(param.name);
	sql = "insert into gender(name) values('"+param.name+"')";
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.put('/:id',function(req, res, next){
	var param = req.body;
	sql = "update gender set name='"+param.name+"' where id_gender="+req.params.id;
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});
router.delete('/:id', function(req, res, next){
	sql = "delete from gender where id_gender="+req.params.id;
	connection.query(sql, function( err, results){
		getResult(res, err, results);
	});
});

function getResult(res, err, results){
	if(err){
		res.send(err);
	}else{
		res.send(results);
	}
}

module.exports = router;