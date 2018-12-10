import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { 
  showFormEvent,
  mealInputEvent,
  caloriesInputEvent,
  saveMealEvent,
  deleteMealEvent,
  editMealEvent,
} from './Update.js';

const { 
  pre, 
  div, 
  h1, 
  button, 
  form, 
  label, 
  input, 
  table, 
  td, 
  tr, 
  th, 
  tbody, 
  thead,
  i } = hh(h);

function cell(tag, className, value) {
  return tag({className}, value);
}

const mealHeader = thead([
  cell(th, 'pa2 tl', 'Meal'),
  cell(th, 'pa2 tr', 'Calories'),
  cell(th, '', ''),
])

function mealRow(dispatch, className, meal) {
  return tr({ className }, [
    cell(td, 'pa2', meal.description),
    cell(td, 'pa2 tr', meal.calories),
    cell(td, 'pa2 tr', [
      i({
        className: 'ph1 fa fa-trash-o pointer',
        onclick: () => dispatch(deleteMealEvent(meal.id)),
      }),
      i({
        className: 'ph1 fa fa-pencil-square-o pointer',
        onclick: () => dispatch(editMealEvent(meal.id)),
      }),
    ]),
  ])
}

function totalRow(meals) {
  const total = R.pipe(
    R.map(meal => meal.calories),
    R.sum,
  )(meals);
  return tr({ className: 'bt b'}, [
    cell(td, 'pa2 tr', 'Total:'),
    cell(td, 'pa2 tr', total),
  ])
}

function mealBody(dispatch, className, meals) {
  const rows = R.map( R.partial( mealRow, [dispatch, 'stripe-dark']), meals);
  const rowsWithTotal = [...rows, totalRow(meals)];
  return tbody({ className }, rowsWithTotal);
}

function tableView(dispatch, model) {
  if (model.meals.length === 0) {
    return div({ className: 'mv2 i black-50' }, 'No meals to display...');
  }
  return table({ className: 'mv2 w-100 collapse' }, [
    mealHeader,
    mealBody(dispatch, '', model.meals),
  ]);
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
    tableView(dispatch, model),
    pre(JSON.stringify(model, null, 2)),
  ])
}

export default view;
