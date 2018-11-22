function greet(greeting, name) {
  return `${greeting} ${name}` ;
}

console.log(greet('Good Morning', 'Dave'));

const friends = ['Nate', 'Dave', 'Frank', 'Joe'];

const greeting = 'Good Morning';
const friendGreetings = friends.map(ele => greet(greeting, ele));
console.log(friendGreetings);

console.log('------------  CURRIED  ------------')

function greet2(greeting) {
  return function(name) {
    return `${greeting} ${name}`;
  }
}

const friendCurried = greet2('Screw you')('Bob');
console.log(friendCurried);

const friendsCurried = friends.map(greet2(greeting));
console.log(friendsCurried);


