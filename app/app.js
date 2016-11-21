var app = angular.module('gajre', []);
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