/*
Hello Friday Morning challenge `pick`

Pick
Return a copy of the object, filtered to only have values for the
whitelisted keys.
Example:
pick({name: ‘moe’, age: 50, userid: ‘moe1’}, ‘name’, ‘age’);
=> {name: ‘moe’, age: 50}
Hint: Given there’s an indefinite number of arguments, we’ll need to loop
through them. Look up the “rest parameter” syntax.
*/

// Your code here!
const _ = require('underscore')

const pick_key = (list, ...args) => {
    args.forEach(function(key_name) {
      console.log(key_name)
    })
}

const pick = (list, ...args) => {
  list.forEach(function(list_obj){
    args.forEach(function(key_name){
      var x = _.filter([list_obj], function(key){
        return key[key_name]
      })
      console.log(x)
    })
  })
}

//Underscore example
  // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){
  //     return num % 2 == 0;
  //   })
//


var stooges = [{name: 'moe', age: 40},
               {name: 'larry', age: 50},
               {name: 'curly', age: 60}];
pick(stooges,'name')


//More Underscore functions

// _.each({one: 1, two: 2, three: 3}, alert);
// _.map([1, 2, 3], function(num){ console.log(num * 3) });
//
// var sum = _.reduce([1, 2, 3], function(memo, num){
//   return memo + num;
//   },
// 0);
// console.log(sum)


// //Check your solution by running these tests: mocha *this_filename*
// const assert = require(‘assert’);
//
// describe(‘Pick’, () => {
//  const list = {a: 1, b: 2, c: 3};
//
//  it(‘can pick a single property’, () => {
//    const result = pick(list, ‘a’);
//    const expected = {a: 1};
//    assert.deepEqual(result, expected);
//  })
//  it(‘can pick multiple properties’, () => {
//      const result = pick(list, ‘a’, ‘c’);
//      const expected = {a: 1, c: 3};
//      assert.deepEqual(result, expected);
//  })
// });
//
// pick(list, ‘a’);
// pick(list, ‘a’, ‘c’);
