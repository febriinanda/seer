var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:feed');


var date = new Date();
var now = date.getFullYear()+"-"+getMonth(date.getMonth())+"-"+date.getDate();
/* GET feed listing. */
router.get('/', function(req, res, next) {
	sql = "select b.fullname,a.notes,a.create_date from feed a left join people b on a.id_people = b.id_people;";
	connection.query(sql,function(err, results){
		res.send(results);
	});
});

router.get('/count/', function(req, res, next){
	sql = "select count(*) as count from feed";
	connection.query(sql, function(err, results){
		res.send(results);
	});
});

router.get('/:id', function(req, res, next) {
	sql = "select * from feed where id_feed="+req.params.id;
	connection.query(sql,function(err, results){
		getResult(res, err, results);
	});
});

router.post('/',function(req, res, next){
	param = req.body;
	debug(param);
	sql = "insert into feed(id_people,notes,status,create_date) values("+param.id_people+",'"+param.notes+"',1,'"+now+"')";
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.put('/:id',function(req, res, next){
	var param = req.body;
	sql = "update feed set name='"+param.name+"',update_date='"+now+"' where id_feed="+req.params.id;
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});
router.delete('/:id', function(req, res, next){
	sql = "delete from feed where id_feed="+req.params.id;
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