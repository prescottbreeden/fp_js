const meal = {
  id: 1,
  description: 'Breakfast',
};

const updatedMeal = {
  ...meal,
  calories: 500,
};

console.log(meal, updatedMeal);

// destructuring:
// const desc = updatedMeal.desc;
// const cal = updatedMeal.calories;

const { description, calories } = updatedMeal;
console.log(description, calories);

const { id, ...mealWithoutId } = updatedMeal;
console.log(mealWithoutId);
