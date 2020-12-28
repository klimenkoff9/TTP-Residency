function productOfAnyAmountOfNumbers(...args) {
  return args.reduce((acc, curr) => {
    return acc * curr;
  });
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;