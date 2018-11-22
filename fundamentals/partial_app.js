
/*
 * Currying vs Partial Application
 *
 * Curring: coding function
 *
 * Partial Application: using function
 *
 *
*/

// curry:
function greet(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  }
}

// partial application: 
const goodMorning = greet('Good morning'); // partial application
const greetName = goodMorning('Nate');

// partial: allows for partial application

function add(x, y) {
  return x + y;
}

// partial is...??????
const add3 = partial(add, [3]);
console.log(add3(2));
