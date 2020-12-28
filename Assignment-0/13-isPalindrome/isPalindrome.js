function isPalindrome(word) {
  return word == word.split("").reverse().join("")
}

// Do not edit this line;
module.exports = isPalindrome;