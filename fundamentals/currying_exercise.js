const studentGrades = [
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

/*
 * provide student feedback:
 * 'Nice Job Joe, you got a 88',
 * 'Excellent Job Jen, you got a 94',
 * 'Well done Steph'
 * 'What happened Allen'
 * 'Not good Gina'
*/

const messages = {
  A: 'Excellent job',
  B: 'Nice job',
  C: 'Well done',
  D: 'What happened',
  F: 'Not good',
}

function letterGrade(points) {
  if (points >= 90) { return 'A'; }
  else if (points >= 80) { return 'B'; }
  else if (points >= 70) { return 'C'; }
  else if (points >= 60) { return 'D'; }
  else { return 'F'; }
}

function feedback(feedbackRules) {
  return function(student) {
    const grade = letterGrade(student.grade);
    const message = feedbackRules[grade];
    return `${message}, ${student.name}, you got a "${grade}"`;
  }
}

const result = studentGrades.map(feedback(messages));
console.log(result);
