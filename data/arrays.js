const meals = [
  { id: 1, desc: 'Breakfast', cal: 420 },
  { id: 2, desc: 'Lunch', cal: 520 },
];

const meal = {
  id: 3,
  desc: 'Snack',
  cal: 180,
};

const updatedMeals = [...meals, meal];
// console.log(updatedMeals)

function double(number) {
  return number * 2;
}

const numbers = [1, 2, 3, 4, 5, 6];
// const doubled = numbers.map(ele => double(ele));
const doubled2 = numbers.map(double);
// console.log(doubled2);

const updatedMealsDescription = updatedMeals.map(updateDescription);

function updateDescription(meal) {
  if (meal.id === 2) {
    return {
      ...meal,
      descrption: 'Early Lunch',
    };
  }
  return meal;
}

// console.log(updatedMealsDescription);

const filteredMeals = updatedMeals.filter(meal => {
  return meal.id !== 1;
});

console.log(filteredMeals);
