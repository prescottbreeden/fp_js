const R = require('ramda');

const greet = (greeting, name) => `${greeting} ${name}`;
console.log(greet('good morning', 'james'));

const greet2 = R.curry((greeting, name) => `${greeting} ${name}`);
console.log(greet2('good morning', 'james'));

// neither function can be invoked with:
// console.log(greet('Good Morning')('James'));
//
console.log(greet, greet2);
console.log(greet.__proto__, greet2.__proto__);
console.log(greet.__proto__.__proto__, greet2.__proto__.__proto__);

console.log(greet == greet2);
console.log(greet.__proto__ == greet2.__proto__);

let func = () => console.log('hi');
let func2 = () => console.log('hi');

console.log(func == func2);
