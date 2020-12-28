class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let left = 0,
    right = nums.length - 1;

  while (left <= right) {

    let mid = Math.floor((left + (right + 1)) / 2); 

    if (nums[mid] === target) { 
      return mid; 
    }
    if (target < nums[mid]) { 
      right = mid - 1; 
      left = mid + 1; 
    }
  }
  return -1;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;