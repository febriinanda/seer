var express = require('express');
var router = express.Router();
var debug = require('debug')('seer:people');

/* GET people listing. */
router.get('/', function(req, res, next) {
	sql = "select a.id_people,a.fullname,a.nickname,a.id_religion,a.id_gender,a.create_date,b.name genders, c.name religions from people a left join gender b on a.id_gender=b.id_gender left join religion c on a.id_religion=c.id_religion";
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
	sql = "insert into people(fullname, nickname, id_religion, id_gender,status,create_date) values('"+param.fullname+"','"+param.nickname+"','"+param.id_religion+"','"+param.id_gender+"','"+param.status+"','"+param.create_date+"')";
	connection.query(sql, function(err, results){
		getResult(res, err, results);
	});
});

router.put('/:id',function(req, res, next){
	var param = req.body;
	sql = "update people set fullname='"+param.fullname+"',nickname='"+param.nickname+"',id_religion='"+param.id_religion+"',id_gender='"+param.id_gender+"',update_date='"+param.update_date+"' where id_people="+req.params.id;
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