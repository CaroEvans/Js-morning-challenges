x/*
Pluck
A convenient version of what is perhaps the most common use-case for map:
extracting a list of property values.
Example:
var stooges = [{name: 'moe', age: 40},
               {name: 'larry', age: 50}
             ];
pluck(stooges, 'name');
=> ['moe', 'larry']
*/

const pluck = (arr, key) => {
  return arr.map(x => {
    return x[key]
  })
}


// Check your solution by running the tests: mocha *this_filename*
const assert = require('assert');

describe('Pluck', () => {

  const people = [{name: 'moe', age: 30}, {name: 'curly', age: 50}];

  it('pulls names out of objects', () => {
    assert.deepEqual(pluck(people, 'name'), ['moe', 'curly'], '');
  })
  it('missing properties are returned as undefined', () => {
    assert.deepEqual(pluck(people, 'address'), [void 0, void 0]);
  })
  it('handles edgecases', () => {
    assert.deepEqual(pluck([{'[object Object]': 1}], {}), [1]);
  })
})\\
adrgaert

/*
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]*/
