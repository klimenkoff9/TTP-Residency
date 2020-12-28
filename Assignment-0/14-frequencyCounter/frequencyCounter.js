function frequencyCounter(word) {
  let obj = {};
  
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    if (typeof obj[letter] === 'undefined') {
        obj[letter] = 1;
    } else {
        obj[letter] = obj[letter] + 1;
    }  
  }
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;