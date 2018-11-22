// const R = require('ramda');

// const greet = (greeting, name) => `${greeting} ${name}`;
// console.log(greet('good morning', 'james'));
// console.log(greet('Good Morning')('James'));

const greet = R.curry((greeting, name) => `${greeting} ${name}`);
console.log(greet());
