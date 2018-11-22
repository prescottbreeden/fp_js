// example with reduce
const numbers = [1, 2, 3];


const total = numbers.reduce(sum);

// exercise with reduce
const grades = [60, 55, 80, 90, 99, 92, 75, 72];

/*
 *  1) Average Grades
 *  2) How many As, Bs, Cs
*/

function sum(acc, ele) { 
  return acc + ele; 
}

const totalG = grades.reduce(sum) ;
const count = grades.length;
const avg = totalG/count;
console.log(avg);


function groupByGrade(acc, grade) {
  const { a=0, b=0, c=0, d=0, f=0 } = acc;
  if (grade >= 90) {
    return { ...acc, a: a+1 };
  } 
  else if (grade >= 80) {
    return { ...acc, b: b+1 };
  } 
  else if (grade >= 70) {
    return { ...acc, c: c+1 };
  } 
  else if (grade >= 60) {
    return { ...acc, d: d+1 };
  } 
  else {
    return { ...acc, f: f+1 };
  }
}

const letterGradeCount = grades.reduce(groupByGrade, {});
console.log(letterGradeCount);
