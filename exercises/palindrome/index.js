// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return palindromeHelper(str, 0, str.length - 1);
}

function palindromeHelper(str, lowIndex, highIndex) {
  if (str[lowIndex] !== str[highIndex]) {
    return false;
  }

  if (lowIndex > highIndex) {
    return true;
  }

  return palindromeHelper(str, lowIndex + 1, highIndex - 1);
}

console.log(palindrome("abba"));

module.exports = palindrome;
