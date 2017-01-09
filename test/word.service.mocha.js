const wordService = require('../src/word.service');
const assert = require('chai').assert;

describe('word service', () => {
	
	it('should return elements starting with a', () => {
		const wordArray = ['aa', 'ab', 'ac', 'bb', 'ba', 'bc', 'bg'];
		const ws = wordService(wordArray);
		assert.deepEqual(ws.getMatched('a'), ['aa', 'ab', 'ac']);
	});
	
	it('should not return more than four elements starting with a', () => {
		const wordArray = ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag'];
		const ws = wordService(wordArray);
		assert.deepEqual(ws.getMatched('a').length, 4);
	});
	
	it('should return no elements for empty string', () => {
		const wordArray = ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag'];
		const ws = wordService(wordArray);
		assert.deepEqual(ws.getMatched('').length, 0);
	});
	
});
