const meal = {
  description: 'Dinner',
};

/*
 * 1) In an immutable way, add a property to the meal called calories
 *    setting its value to 200, then log the result to the console
 *
 * 2) In an immutable way, increase the calories by 100 and print the result
 *    to the console
 *
 * 3) In an immutable way, remove the calories property and log the results
*/

const mealWithCal = {
  ...meal,
  calories: 200,
};

console.log(mealWithCal);

const boostCals = {
  ...mealWithCal,
  calories: mealWithCal.calories += 100,
};

console.log(boostCals);

const { calories, ...noCals } = boostCals;

console.log(noCals);
console.log(calories);
