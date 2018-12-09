import hyper from 'hyperscript';
import hhelper from 'hyperscript-helpers';

const { div, button } = hhelper(hyper);

const initModel = 0;

function update(msg, model) {
  switch (msg) {
    case 'plus':
      return model + 1;
    case 'minus':
      return model - 1;
    default:
      return model;
  }
}

function view(dispatch, model) {
  return div([
    div({ className: 'mv2' }, `Count: ${model}`),
    button({ className: 'pv1 ph2 mr2', 
      onclick: () => dispatch('plus') }, '+'),
    button({ className: 'pv1, ph2',
      onclick: () => dispatch('minus') }, '-'),
  ]);
}

// impure code below

function app(initModel, update, view, node) {
  let model = initModel; 
  let currentView = view(dispatch, model);
  node.appendChild(currentView);

  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

const rootNode = document.getElementById('app');

app(initModel, update, view, rootNode);

