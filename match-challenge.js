/*
Is Match
Tells you if the keys and values in properties are contained in object.
Example:

=> true
*/

// var stooge = {name: 'moe', age: 32};
// isMatch(stooge, {age: 32});

// Your code here!
const isMatch = (object1, property1) => {
  // let found = true
  for (var x in property1) {
    if (object1[x] !== property1[x]) {
      return false
    }
  }
  return true
}

// const moe = {name: 'Moe Howard', hair: true};
// isMatch(moe, {hair: true});
//
// object1 = moe
// property1 = {hair: true}
//
// moe[name] = 'string'
// moe[hair] = true
//
// {hair: true}[hair] = true


// var stooge = {name: 'moe', age: 32};
// isMatch(stooge, {age: 32});

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Is Match', () => {
  it('returns a boolean', () => {
    const moe = {name: 'Moe Howard', hair: true};
    const curly = {name: 'Curly Howard', hair: false};
    assert.equal(isMatch(moe, {hair: true}), true);
    assert.equal(isMatch(curly, {hair: true}), false);
  });
});
