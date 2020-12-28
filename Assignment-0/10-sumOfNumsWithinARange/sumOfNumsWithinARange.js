function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;
  nums.map (i => {
    if (i >= start && i <= end){
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;