/*
Hello Friday Morning challenge `pick`

Pick
Return a copy of the object, filtered to only have values for the
whitelisted keys.
Example:
pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {name: 'moe', age: 50}
Hint: Given there's an indefinite number of arguments, we'll need to loop
through them. Look up the “rest parameter” syntax.
*/

// Your code here!
const _ = require('underscore')

const pick_key = (list, ...args) => {
    args.forEach(function(key_names) {
      console.log(key_names) // returns strings
      // console.log(args) //returns as an array
    })
}

const pick = (list, ...args) => {
  const new_obj = {}
    args.forEach(function(key_name){
      new_obj[key_name] = list[key_name]
    })
  return new_obj
}
// var stooges = {name: 'moe', age: 40}
// console.log(pick(stooges,'name'))

//Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Pick', () => {
 const list = {a: 1, b: 2, c: 3};

 it('can pick a single property', () => {
   const result = pick(list, 'a');
   const expected = {a: 1};
   assert.deepEqual(result, expected);
 })
 it('can pick multiple properties', () => {
     const result = pick(list, 'a', 'c');
     const expected = {a: 1, c: 3};
     assert.deepEqual(result, expected);
 })
});
