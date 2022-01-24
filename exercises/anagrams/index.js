// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aMap = generateCountMap(stringA);
  const bMap = generateCountMap(stringB);

  const map = Object.keys(aMap).length > Object.keys(bMap).length ? aMap : bMap;

  for (key of Object.keys(map)) {
    if (aMap[key] !== bMap[key]) {
      return false;
    }
  }

  return true;
}

function generateCountMap(str) {
  const lowerStr = str.toLowerCase();
  const lowerStrCounter = {};

  for (const letter of lowerStr) {
    if (letter !== " " && !".,:;?!".includes(letter)) {
      if (!lowerStrCounter[letter]) {
        lowerStrCounter[letter] = 0;
      }

      lowerStrCounter[letter] += 1;
    }
  }

  return lowerStrCounter;
}

module.exports = anagrams;
