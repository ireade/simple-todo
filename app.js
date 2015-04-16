
var app = angular.module('stacks', ['firebase']);


app.controller('todoController', function($scope, $firebaseArray) {

	var ref = new Firebase('https://ireade-simple-todo.firebaseio.com/');

	var items = $firebaseArray(ref);

	$scope.items = items;

	$scope.addItem = function() {
		$scope.items.$add($scope.newItem);
		$scope.newItem = '';
	};

	$scope.deleteItem = function(item) {
		$scope.items.$remove(item);
	};

	$scope.editItem = function(item) {
		$scope.items.$save(item);
	};

});