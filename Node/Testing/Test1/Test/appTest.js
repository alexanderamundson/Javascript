const assert = require('chai').assert;
const app = require('../App/app');


describe('App.sayHello', function(){
    it('SayHello() should return Hello World', function(){
        let result = app.sayHello();
        assert.equal(result, 'Hello World');
    });

    it('sayHello() should return type string', function(){
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });

    it('AddNumbers() should be == 10 when both inputs are 5', function() {
        let result = app.addNumbers(5, 5);
        assert.equal(result, 10);
    });

    it('addNumbers() should return type number', function() {
        let result = app.addNumbers(5, 5);
        assert.typeOf(result, 'number');
    });
});