/*
Sample
Produce a random sample from an array. Pass a number to return n random elements
from the list. Otherwise a single random item will be returned.
Example:
sample([1, 2, 3, 4, 5, 6]);
=> 4
sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
*/

// Your code here!
// const sample = (myArr, num) => {
//     if ( num === undefined || num < 0 ) {
//     //return myArr[Math.floor(Math.random() * myArr.length)]
//     return myArr[Math.floor(Math.random() * myArr.length)]
//     } else if (num > 0) {
//         const results = [];
//         const newArr = myArr;
//         let x = num
//         while ( x !== 0){
//             let y = newArr[Math.floor(Math.random() * (myArr.length-1))]
//             results.push(y)
//             x--
//         }
//       return results
//     } else {
//         return 'Not a number'
//     }
// }


const sample = (array, samples) => {
  // If samples is undefined, zero or negative, set it to one
  samples = !samples || samples < 0 ? 1 : samples

  // Copy the array, we'll cut samples out of here to avoid duplicates
  const copy = array
  const count = [...array]

  // We'll store items in results
  const results = []

  // Loop for each sample (maximum array.length times)
  for (let i=1; i<=samples && i<=count.length; i++) {
    // Find a random index in the copy
    const randomIndexInCopy = Math.floor(Math.random()*copy.length)

    // Cut (splice) that random index out of copy (splice returns an array)
    const randomItem = copy.splice(randomIndexInCopy, 1)
    
    // Push the first element from the splice (there's only one) into results
    results.push(randomItem[0])
  }
  console.log(array)
  console.log(copy)
  console.log(count)
  return results
}

sample([1,2,3,4,5], 2)


// Check your solution by running these tests: mocha *this_filename*

const assert = require('assert');

describe('Sample', () => {
  it('behaves correctly when no second parameter is given', () => {
    assert.equal(sample([1]), 1);
  });
  it('behaves correctly on negative n', () => {
    assert.equal(sample([1], -2), 1);
  });
  it('returns a sample without duplicates', () => {
    assert.deepEqual(sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10).sort(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("handles too many n's", () => {
    assert.deepEqual(sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 11).sort(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

