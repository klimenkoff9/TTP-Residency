function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set();

  for (let i = 0; i < args.length; i++) {
    for(let j of args[i]) {
      union.add(j);
    }   
  }

  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;