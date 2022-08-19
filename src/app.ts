// const userName = 'Max';
// userName = 'len';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age >= 20) {
//   let isAdult = true;
// }

// console.log(isAdult);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = output => {
//   console.log(output);
// }

// printOutput(add(2));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => {
    console.log(event);
  });
}

const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(...hobbies);

// console.log(activeHobbies);

const person = {
  firstName: 'Max',
  age: 30.
};

const copiedPerson = {
  ...person,
};

// console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => { // curResult:現在の計算結果 curValue:現在の要素
      return curResult + curValue;
  }, 0); // reduceは配列に対して使えるメソットで全ての配列の要素に何らかの処理を行い その結果を1つにまとめて返す
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
