const assert = require('chai').assert;
const app = require('../app.js');

describe('App',function(){
    it('app shoul return hello',function(){
        assert.equal(app.sayhello(),'hello'); //proverka vozvrasaet li 'hello'
    });
    it('app sayHello should return string',function(){
        assert.typeOf(app.sayhello(),'string');
    });
    it('app addNumber shoul return 6',function(){
        assert.equal(app.addNumbers(2,4),6);
    });
    it('app addNumber is above?',function(){
        assert.isAbove(app.addNumbers(3,7),5);
    });
});

//assert.isAbove - addNumbers(3,7)
//asser.isAbove(app.addNumber(3,7),5);