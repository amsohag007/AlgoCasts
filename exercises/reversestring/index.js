// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//way-1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//way2
// function reverse(srt) {
//   return srt.split("").reduce((prev, curr) => curr + prev);
// }

//way-3
function reverse(str) {
  reverse = "";
  for (let char of str) {
    // console.log(char);
    reverse = char + reverse;
    // console.log(reverse);
  }
  return reverse;
}

module.exports = reverse;
