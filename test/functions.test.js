


//skip('this test should be skipped', (expect) => {
  //  const expected = true;

   // const actual = true;

   // expect.equal(actual, expected);
//});

import {
     addExclamationPoints, multiplyBy12ThenHalve, multiplyBySeven,} from '../functions.js';

const {test, skip} = QUnit;

test('test should retrun string with three exclamation points added to the end of it', (expect) => {
    const expected1 = 'puppy!!!';
    const actual1 = addExclamationPoints ('puppy');
    const expected2 = 'guppy!!!';
    const actual2 = addExclamationPoints ('guppy');

    expect.equal(actual1, expected1,)
    expect.equal(actual2, expected2,)

})

test('test should return a number that is multiplied by 7', (expect) => {
    const expected1 = 1;
    const actual1 = multiplyBySeven();
    const expected2 = 1;
    const actual2 = multiplyBySeven();
    const expected3 = 'boolean';
    const actual3 = typeof multiplyBySeven();

    expect.equal(expected1, actual1,);
    expect.equal(expected2, actual2,);
    expect.equal(expected3, actual3,);

    test('This function should take in a number and multiply it by 12 then cut the result in half', (expect) => 
    
    {const expected1 = 12;
     const actual1 = multiplyBy12ThenHalve(2);
     expect.equal(expected1, actual1);
    })
})


//Github actions should pass for all tests
//Each function should have a robust set of tests with at least three expect statements.
//Each expect statement should have a third argument describing the specific thing being tested with this expect statement.
