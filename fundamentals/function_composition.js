const R = require('ramda');
/*
  
  COMPOSING FUNCTIONS

  making functions out of other functions

*/


let sentence = "Rubber baby buggy bumpers";
// const words = sentence.split(' ');

const countWords = (string) => {
  const wordlist = string.split(' ');
  return wordlist.length;
}

const rambdaWords = R.compose(R.length, R.split);
const rambdaWords2 = R.compose(R.length, R.split(' '));
const rambdaWords3 = R.pipe(R.split(' '), R.length);

console.log(countWords(sentence));
console.log(rambdaWords(' ', sentence));
console.log(rambdaWords2(sentence));
console.log(rambdaWords3(sentence));

