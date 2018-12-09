window.onload = () => {

  // data
  const MEALS = [
    { description: 'Breakfast', calories: 460 },
    { description: 'Snack', calories: 100 },
    { description: 'Lunch', calories: 600 },
    { description: 'Dinner', calories: 1020 },
  ];


  // --- FUNCTIONS --- //
  
  function cell(value) {
    const node = document.createElement('td');
    const data = document.createTextNode(value);
    node.appendChild(data);
    return node;
  }

  function row(meal) {
    const node = document.createElement('tr');
    node.appendChild(cell(meal.description));
    node.appendChild(cell(meal.calories));
    return node;
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

  function totalRow(data, node) {
    const total = document.createElement('tr');
    total.appendChild(cell('TOTAL'));
    total.appendChild(cell(addCalories(data)));
    return total;
  }

  function createTable(data, node) {
    data.map(meal => {
      node.appendChild(row(meal));
    });
    node.appendChild(totalRow(data, node));
  }


  // --- GENERATE HTML --- //

  const node = document.getElementById("content");
  createTable(MEALS, node);
  

  // --- EVENT LISTENERS --- //
  
  const submitBtn = document.getElementById("submit_btn");
  const cancelBtn = document.getElementById("cancel_btn");

  cancelBtn.addEventListener('click', function() {
    console.log('clicked cancel');
  });

  submitBtn.addEventListener('click', function() {
    console.log('clicked save');
  });


}
