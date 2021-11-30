# tdd-practice
Github actions should pass for all tests
Each function should have a robust set of tests with at least three expect statements.
Each expect statement should have a third argument describing the specific thing being tested with this expect statement.

//IMPORT MODULES under test here:
import { 
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected);
});
