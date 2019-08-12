const assert = require('chai').assert;
const sayHello = require('../App/app').sayHello;
//const app = require('../App/app');


describe('App.sayHello', function(){
    it('SayHello() should return Hello World', function(){
        let result = sayHello();
        assert.equal(result, 'Hello World');
    });

    it('sayHello() should return type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    });
});