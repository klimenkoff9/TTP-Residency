function pairSum(nums, target) {

  if (nums.length <= 1) {
    throw Error;
  }

  for  (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;