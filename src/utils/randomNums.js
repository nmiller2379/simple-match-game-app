// Generate a 2D array of random numbers to represent the cards in the game. The random numbers should be between 0 and 51, and each number must be unique. The outer array should hold three arrays. Each inner array should hold eight unique numbers between 0 and 51.

// Example output: [[23, 1, 45, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21, 22]]

const randomNums = () => {
  const nums = [];
  while (nums.length < 24) {
    const randomNum = Math.floor(Math.random() * 52);
    if (!nums.includes(randomNum)) {
      nums.push(randomNum);
    }
  }
  const randomNums = [];
  for (let i = 0; i < 3; i++) {
    randomNums.push(nums.slice(i * 8, (i + 1) * 8));
  }
  return randomNums;
};

export default randomNums;


