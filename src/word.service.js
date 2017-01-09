const _ = require('lodash');

module.exports = function(wordArray) {
	return {
		getMatched: getMatched
	}	
	
	function getMatched(input) {
		if (!input) {
			return [];
		}
		var i = 0;
		return _.filter(wordArray, function(word) {
			return word.startsWith(input) && i++ < 4;
		})
	}
}
