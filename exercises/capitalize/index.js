// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let newStr = "";

  const strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    newStr +=
      strArr[i].charAt(0).toUpperCase() +
      strArr[i].slice(1) +
      (i === strArr.length - 1 ? "" : " ");
  }

  return newStr;
}

module.exports = capitalize;
