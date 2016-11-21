var angapp = angular.module('myApp', []);
angapp.controller('AppCtrl', 
	['$scope', '$http', 
	function($scope, $http){
     console.log('Hello!');

     var refresh = function(){
	     $http.get('/contactsl').success(function(response){
	     	 console.log('Should display in the browser console');
	  	     $scope.contacts = response;     	
	  	     $scope.contact = "";
	     });
     };

     refresh();

     $scope.addcontact = function(){
     	console.log($scope.contact);
     	$http.post('/contactlist', $scope.contact).success(function(response){
     		console.log(response);
     		refresh();
     	});
     };

     $scope.remove = function(id){
     	console.log(id);
     	$http.delete('/contactlist/' + id).success(function(response){
     		console.log(response);
     		refresh();
     	});
     };

    }]
);