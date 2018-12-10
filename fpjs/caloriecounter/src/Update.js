import * as R from 'ramda';

const EVENTS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_INPUT: 'MEAL_INPUT',
  CALORIES_INPUT: 'CALORIES_INPUT',
  SAVE_MEAL: 'SAVE_MEAL',
  DELETE_MEAL: 'DELETE_MEAL',
  EDIT_MEAL: 'EDIT_MEAL',
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

export function deleteMealEvent(id) {
  return {
    type: EVENTS.DELETE_MEAL,
    id,
  };
}

export function editMealEvent(editId) {
  return {
    type: EVENTS.EDIT_MEAL,
    editId,
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
      return { ...model, calories };

    case EVENTS.SAVE_MEAL: {
      const { editId } = model;
      const updatedModel = editId !== null ?
        edit(model) :
        add(model)
      return updatedModel;
    }
      

    case EVENTS.DELETE_MEAL: {
      const { id } = event;
      const meals = R.filter(
        meal => meal.id !== id,
        model.meals
      );
      return { ...model, meals };
    }

    case EVENTS.EDIT_MEAL: {
      const { editId } = event;
      const meal = R.find(
        meal => meal.id === editId,
        model.meals);

      const { description, calories } = meal;

      return { 
        ...model,
        editId,
        description,
        calories,
        showForm: true,
      };
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

function edit(model) {
  const { description, calories, editId } = model;
  const meals = R.map(meal => {
    if (meal.id === editId) {
      return { ...meal, description, calories };
    }
    return meal;
  }, model.meals);

  return {
    ...model,
    meals,
    description: '',
    calories: 0,
    showForm: false,
    editId: null,
  };
}
export default update;
