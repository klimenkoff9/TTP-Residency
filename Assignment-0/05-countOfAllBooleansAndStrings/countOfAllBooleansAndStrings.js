function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  arr.map (i => {
    if (typeof i === 'boolean' || typeof i === "string"){
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;