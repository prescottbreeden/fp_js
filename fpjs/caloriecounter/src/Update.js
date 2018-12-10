import * as R from 'ramda';

const EVENTS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_INPUT: 'MEAL_INPUT',
  CALORIES_INPUT: 'CALORIES_INPUT',
};

export function showFormEvent(showForm) {
  return {
    type: EVENTS.SHOW_FORM,
    showForm,
  };
}

export function mealInputEvent(description) {
  return {
    type: EVENTS.MEAL_INPUT,
    description,
  };
}

export function caloriesInputEvent(calories) {
  return {
    type: EVENTS.CALORIES_INPUT,
    calories,
  };
}

function update(event, model) {
  switch (event.type) {
    case EVENTS.SHOW_FORM:
      const { showForm } = event;
      return { ...model, showForm, description: '', calories: 0 };
    case EVENTS.MEAL_INPUT:
      const { description } = event;
      return { ...model, description };
    case EVENTS.CALORIES_INPUT:
      const calories = R.pipe(
        parseInt,
        R.defaultTo(0),
      )(event.calories);
      // const { calories } = event;
      return { ...model, calories };
  }
  return model;
}

export default update;
