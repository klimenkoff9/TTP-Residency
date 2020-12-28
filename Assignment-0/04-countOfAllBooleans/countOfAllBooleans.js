function countOfAllBooleans(arr) {
  let count = 0;
  arr.map (i => {
    if (typeof i === 'boolean' ){
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;