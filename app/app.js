var mongodb = require('mongodb');
var app = angular.module('gajre', []);
var mongoUrl = "mongodb://localhost:27017/db";

app.controller('TestController', function TestController(){
   this.name = "Yuvaraj";
   this.names = ["Test1", "Test2", "Test3", "Test4"];

   this.setName = function(n){
   	this.name = n;
   }

   this.getName = function(){
   	return this.name;
   }

   this.clic = function(){
   	window.alert("You Clicked Me!");
   }

   this.findDocuments = function() {
     var db = mongodb.MongoClient.connect(mongoUrl);
     console.log('Connected to MongoDB successfully');
   	 var collection = db.colelctions('restaurants');
   	 return collection.find({}).toArray(function(docs){callback(docs)});
   }
}).directive('myDirective', function($log){
  
   return {
      restrict: 'E',
      // templateUrl: 'my-template.html'
      template: '<p>template</p>',
      link: function(scope, el, attrs){
      	$log.log('el.html()');
      }
   };

});