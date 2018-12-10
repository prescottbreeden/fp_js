import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { 
  showFormEvent,
  mealInputEvent,
  caloriesInputEvent,
  saveMealEvent,
} from './Update.js';

const { pre, div, h1, button, form, label, input, table, td, tr, th, tbody, thead } = hh(h);

function cell(tag, className, value) {
  return tag({className}, value);
}

const headerRow = tr([
  cell(th, 'pa2 tl', 'Meal'),
  cell(th, 'pa2 tr', 'Calories'),
])

const mealHeader = thead(headerRow);

function mealTable(model) {
  return table([
    mealHeader,
    mealBody('', model.meals),
    totalRow(model.meals),
  ]);
}

function mealRow(className, meal) {
  return tr({ className }, [
    cell(td, 'balls', meal.description),
    cell(td, 'balls', meal.calories),
  ])
}

function mealBody(className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
  return tbody({ className }, rows);
}

function getSum(total, num) {
  return total + num;
}

function addCalories(data) {
  const arr =[];
  data.map(meal => {
    arr.push(meal.calories)
  });
  return arr.reduce(getSum);
}

function totalRow(meals) {
  const total = R.pipe(
    R.map(meal => meal.calories),
    R.reduce((acc, calories) => acc + calories, 0),
  )(meals);
  return tr({ className: 'balls'}, [
    cell(td, 'balls', 'Total:'),
    cell(td, 'balls', total),
  ])
}

function fieldSet(labelText, inputValue, oninput) {
  return div([
    label({ className: 'db mb1' }, labelText),
    input({
      className: 'pa2 input-reset ba w-100 mb2',
      type: 'text',
      value: inputValue,
      oninput
    }),
  ])
}

function buttonSet(dispatch) {
  return div([
    button(
      {
        className: 'f3 pv2 ph3 bg-blue white bn mr2 dim',
        type: 'submit',
      },
      'Save',
    ),
    button(
      {
        className: 'f3 pv2 ph3 bg-blue white bn mr2 dim',
        type: 'button',
        onclick: () => dispatch(showFormEvent(false)), 
      },
      'Cancel'
    )
  ])
}

function formView(dispatch, model) {
  const { description, calories, showForm } = model;
  if (showForm) {
    return form(
      {
        className: 'w-100 mv2',
        onsubmit: e => {
          e.preventDefault();
          dispatch(saveMealEvent);
        },
      },
      [
        fieldSet('Meal', description,
          (e) => dispatch(mealInputEvent(e.target.value))
        ),
        fieldSet('Calories', calories || '',
          (e) => dispatch(caloriesInputEvent(e.target.value))
        ),
        buttonSet(dispatch),
      ],
    );
  }

  return button(
    { 
      className: 'f3 pv2 ph3 bg-blue white bn' ,
      onclick: () => dispatch(showFormEvent(true)), 
    },
    'Add Meal',
  );
}

function view(dispatch, model) {
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
    formView(dispatch, model),
    mealTable(model),
    pre(JSON.stringify(model, null, 2)),
  ])
}

export default view;
