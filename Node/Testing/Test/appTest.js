const assert = require('chai').assert;
const app = require('../App/app');

describe('App', function(){
    it('App should return hello', function(){
        assert.equal(app(), 'hello');
    });
});