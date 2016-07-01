var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:religion');

var date = new Date();
var now = date.getFullYear()+"-"+getMonth(date.getMonth())+"-"+date.getDate();

/* GET religion listing. */
router.get('/', function(req, res, next) {
	sql = "select * from religion";
	connection.query(sql,function(err, results){
		getResult(res, err, results);
	});
});

router.get('/count/', function(req, res, next){
	sql = "select count(*) as count from religion";
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.get('/:id', function(req, res, next) {
	sql = "select * from religion where id_religion="+req.params.id;
	connection.query(sql,function(err, results){
		getResult(res, err, results);
	});
});

router.post('/',function(req, res, next){
	param = req.body;
	debug(param);
	sql = "insert into religion(name,status,create_date) values('"+param.name+"',1,'"+now+"')";
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.put('/:id',function(req, res, next){
	var param = req.body;
	sql = "update religion set name='"+param.name+"',update_date='"+now+"' where id_religion="+req.params.id;
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.delete('/:id', function(req, res, next){
	sql = "delete from religion where id_religion="+req.params.id;
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

function getMonth(val){
	var res = parseInt(val)+1;
	return res;
}
module.exports = router;