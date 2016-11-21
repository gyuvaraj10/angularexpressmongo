var express = require('express');
var mongojs = require('mongojs');
var parser = require('body-parser');
var expapp = express();
var db = mongojs("contactlist", ['contactlist']);

expapp.use(parser.json());
expapp.use(express.static(__dirname + '/public'));

expapp.get('/contactsl', function(req, res){
	 console.log('I received the data');
     db.contactlist.find(function(err, docs){
     	console.log('Retrieving the data from the mongodb');
     	console.log(docs);
     	res.json(docs);
     });
});

expapp.post('/contactlist', function(req, res){
	console.log('I am writing the data to mongodb');
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

expapp.delete('/contactlist/:id', function(req, res){
	console.log('Removing the id');
	console.log(req.params.id);
	db.contactlist.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, doc){
		res.json(doc);
	});
});

expapp.listen(3000);
console.log('Server running on 3000');