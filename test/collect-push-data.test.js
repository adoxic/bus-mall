import emotions from '../src/data/emotions.js';
import movingData from '../src/data/collect-push-data.js';
import randomNumber, { selectThreeObjects, noRepeat, replaceRepeats } from '../src/emotion-generation.js';

const test = QUnit.test;

QUnit.module('Are things being stored?');

movingData.storage = window.sessionStorage;

QUnit.testStart(() => {
    movingData.storage.clear();
});


test('sent and received test', assert => {
    const key = 'puppy';
    const puppy = { name: 'Greg' };

    movingData.save(key, puppy);
    const returnedObject = movingData.get(key);
    const expected = puppy;
    
    assert.deepEqual(returnedObject, expected);
});    


test('sending an array and bootstrap', assert => {
    
    const returnedArray = movingData.pullFromProducts();
    const expected = emotions;
    
    assert.equal(returnedArray, expected);

});  

test('add three objects to array', assert => {

    
    const returnArray = selectThreeObjects(emotions);

    assert.equal(returnArray.length, 3);
    
}); 

test('do the three objects repeat', assert => {

    
    const returnArray = [
        {
            id: 'disappointed',
            name: 'A disappointed expression.',
            unicode: '&#X1f61e',
            type: 'negative',
        },
        {
            id: 'fearful-face',
            name: 'A fearful expression.',
            unicode: '&#X1f628',
            type: 'negative',
        },
        {
            id: 'spider',
            name: 'A spider.',
            unicode: '&#X1f577',
            type: 'negative',
        },
    ];
    const actual = noRepeat(returnArray);
    const expected = true;

    assert.equal(actual, expected);
    
});

test('does replace repeat function work?', assert => {

    
    const returnArray = selectThreeObjects(emotions);
    replaceRepeats(returnArray);
    const actual = noRepeat(returnArray);
    const expected = true;

    assert.equal(actual, expected);
    
}); 