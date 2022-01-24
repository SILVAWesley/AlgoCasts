// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const countMap = {};

  let greatest = "";
  let greatestNum = 0;

  for (letter of str) {
    if (!countMap[letter]) {
      countMap[letter] = 0;
    }

    countMap[letter]++;

    if (countMap[letter] > greatestNum) {
      greatest = letter;
      greatestNum = countMap[letter];
    }
  }

  return greatest;
}

module.exports = maxChar;
