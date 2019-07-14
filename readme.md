* Initiate package.json that can be used to manage packages for the project
```
npm init
```
* Install mocha framework and include it to the package.json
```
npm install mocha -D
```
* Add next script to the package.json
```
"scripts": {
  "test": "mocha"
}
```
* Now you can call Mocha with the following command:
```
npm test
```
* In Mocha we group tests using the `describe` function and define tests using the `it` function. These two functions can be used to make your test suite *complete*, *maintainable*, and *expressive*.
*  nest `describe` blocks inside parent `describe` to resemble the structure of your implementation code and write individual tests in `it` blocks. This makes your test suite *isolated*, *maintainable*, and *expressive*.
* separating a test into **setup**, **exercise**, and **verify** phases. This distinct and well-defined separation of steps makes your test more *reliable*, *maintainable*, and *expressive*. use the `assert` method provided by Node.js. As a Node module, assert can be imported at the top of your files with  `const assert = require('assert');`. 
Some tests require a fourth phase called **teardown**. This step makes your test *isolated*. *Teardown* - reset any conditions that were changed during the test. The *teardown* phase is used to reset the environment before the next test runs.
* An *expressive* test is easy to read and descriptive, making it useful as a form of documentation for your implementation code. One way to make a test more expressive is clarifying its **verify** phase — the step where expected outcome is compared to actual outcome.
* If you need to compare the values within two objects, you can use `assert.deepEqual()`. This method compares the values of each object using loose (==) equality.
* Learn more about assertion https://nodejs.org/api/assert.html
* You will next test that implementation function throws an error if its argument is not a valid argument (less than 0 or greater, or not string as input value, etc.). Test both **bounds** (boundary values) to make your test suite complete. Test each bound in a separate `it` block to make it *maintainable*.
*  https://mochajs.org/#hooks 
```
describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
```