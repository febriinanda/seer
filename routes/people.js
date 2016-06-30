var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:people');

/* GET people listing. */
router.get('/', function(req, res, next) {
	sql = "select * from people";
	connection.query(sql,function(err, results){
		getResult(res, err, results);
	});
});

router.get('/count/', function(req, res, next){
	sql = "select count(*) as count from people";
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.get('/:id', function(req, res, next) {
	sql = "select * from people where id_people="+req.params.id;
	connection.query(sql,function(err, results){
		getResult(res, err, results);
	});
});

router.post('/',function(req, res, next){
	param = req.body;
	debug(param);
	sql = "insert into people(fullname, nickname, id_religion, id_gender) values('"+param.fullname+"','"+param.nickname+"','"+param.id_religion+"','"+param.id_gender+"')";
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.put('/:id',function(req, res, next){
	var param = req.body;
	sql = "update people set fullname='"+param.fullname+"',nickname='"+param.nickname+"',id_religion='"+param.id_religion+"',id_gender='"+param.id_gender+"' where id_people="+req.params.id;
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.delete('/:id', function(req, res, next){
	sql = "delete from people where id_people="+req.params.id;
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