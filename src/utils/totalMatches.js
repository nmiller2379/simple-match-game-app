// Write a function that takes an array of objects and returns the total number of pairs of each value that has at least one pair.

// The function should return a number with the total number of matches.

// Algorithm:
// 1. Create a function named totalMatches
// 2. This function takes an array of objects as an argument
// 3. Create a variable named result and set it equal to an empty object
// 4. Iterate through the array of objects
// 	- On each iteration, check if the value of the current object exists in the result object
// 	- If it does, increment the value of the key by 1
// 	- If it doesn't, set the value of the key to 1
// 5. Create a variable named totalMatches and set it equal to 0
// 6. Iterate through the values of the result object
// 	- On each iteration, check if the value is greater than or equal to 2
// 	- If it is, increment the totalMatches by 1
//  - Subtact 2 from the value of the key
//  - Repeat the process until all values are less than 2
// 7. Return the totalMatches

const totalMatches = (arr) => {
  console.log(arr);
  const result = {};
  arr.forEach((obj) => {
    if (result[obj.value]) {
      result[obj.value] += 1;
    } else {
      result[obj.value] = 1;
    }
  });

  let totalMatches = 0;
  Object.values(result).forEach((value) => {
    while (value >= 2) {
      totalMatches += 1;
      value -= 2;
    }
  });
  console.log(totalMatches);
  return totalMatches;
};

export default totalMatches;
