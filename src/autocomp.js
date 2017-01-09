require('../css/main.css');

const angular = require('angular');
const wordService = require('./word.service');
const wordList = require('raw!../assets/words.txt');

const autocomp = angular.module('autocomp', []);

autocomp.value('wordService', wordService(wordList.split('\n')));	

autocomp.controller('searchBoxController', ['$scope', 'wordService', function($scope, wordService) {
	$scope.suggested = [];
	
	$scope.getSuggestions = function() {
		$scope.suggested = wordService.getMatched($scope.typed);
	};
	
	$scope.setWord = function(word) {
		$scope.typed = word;
		$scope.suggested = [];
	};
	
	$scope.showSuggestions = function() {
		return $scope.suggested.length !== 0;
	};
}]);	

autocomp.directive('searchBox', function() {
	  return {
		  restrict: 'AE',
		  controller: 'searchBoxController',
		  replace: 'true',
		  template: require('../template/searchBox.html')
	  };
});	

