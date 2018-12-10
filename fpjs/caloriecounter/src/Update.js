import * as R from 'ramda';

const EVENTS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_INPUT: 'MEAL_INPUT',
  CALORIES_INPUT: 'CALORIES_INPUT',
  SAVE_MEAL: 'SAVE_MEAL',
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

export const saveMealEvent = { type: EVENTS.SAVE_MEAL };

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
      return { ...model, calories };
    case EVENTS.SAVE_MEAL: {
      return add(model);
    }
  }
  return model;
}

function add(model) {
  const { nextId, description, calories } = model;
  const meal = { id: nextId, description, calories };
  const meals = [...model.meals, meal];
  return {
    ...model,
    meals,
    nextId: nextId + 1,
    description: '',
    calories: 0,
    showForm: false,
  };
}

export default update;
