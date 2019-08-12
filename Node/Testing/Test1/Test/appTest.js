const assert = require('chai').assert;
const sayHello = require('../App/app').sayHello;
//const app = require('../App/app');


describe('App', function(){
    it('App should return Hello World', function(){
        let result = sayHello();
        assert.equal(result, 'Hello World');
    });
});