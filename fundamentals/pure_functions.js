/* pure functions vs procedural functions


PURE FUNCTIONS
Creates and returns values based on Input and creates no side effects

 - must have input paramters
 - no stateful values
 - return based on input
 - no side effects : causes a change outside of itself
    - e.g.
    - saving something in a database
    - saving something to a file
    - changing state in a web app

BENEFITS:
- Reusable
- Composable
- Easy to Test
- Easy to Cache

GOALS IN WEB APPS:
- Eliminate state to as little AS NEEDED
- Tightly control state when it's needed

*/

// pure function examples
function add(x, y) {
  return x + y;
}

const add2 = (x, y) => x * y;

// ------ breaking pure function rules ------ //

let counter = 0;

function increment() {
  counter++;
}

// better described as a procedure than a function




