/*
 * 1) create a constant named friends,
 *    which is an array that contains 2 names of your choosing
 *
 * 2) create a new constant named updatedFriends,
 *    which includes the friends array values plus one additional name
 *
 * 3) create a new constant named friendNameLengths, which is based on the
 *    array updatedFriends, but instead of having the friends' names, have 
 *    the array store the length of each persons name.
 *
 * 4) Create a new constant named shorterNamedFriends, which will be a list 
 *    of the friends except the friends with the longest name
 *
 * 5) Print each variable to the console.
*/


const friends = ['Brenan', 'Yiling'];
const updatedFriends = [...friends, 'Tim'];
const friendNameLengths = updatedFriends.map(nameToLength);

function nameToLength(name) {
  return name.length;
}

const shorterNamedFriends = updatedFriends.filter(friend => {
  return friend.length < 6;
});

console.log('----------------')
console.log(friends);
console.log('----------------')
console.log(updatedFriends);
console.log('----------------')
console.log(friendNameLengths);
console.log('----------------')
console.log(shorterNamedFriends);
