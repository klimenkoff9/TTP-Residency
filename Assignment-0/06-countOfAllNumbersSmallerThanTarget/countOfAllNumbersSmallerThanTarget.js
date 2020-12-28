function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  nums.map (i => {
    if (i < target){
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;