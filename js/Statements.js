const id = '100';

// // Equal to
// if(id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

// // Not Equal to
// if(id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

// // Equal to value & type
// if(id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

// // Not Equal to value & type
// if(id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }


// test if undefined
// if(typeof id !== 'undefined') {
//   console.log(`This ID ${id}`);
// } else {
//   console.log('NO ID');
// }


// GREATER OR LESS
// if(id > 200) {
//     console.log('CORRECT');
//   } else {
//     console.log('INCORRECT');
//   }


// If false
// const color = 'yellow';

// if(color === 'red') {
//   console.log('Color is red')
// } else if(color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// Logical Operators

const nameS = 'Steve';
const ageS = 20;

// and &&
if(ageS > 0 && ageS < 12) {
  console.log(`${nameS} is a child`)
} else if(ageS >= 13 && ageS <= 19) {
  console.log(`${nameS} is a teenager`);
} else {
  console.log(`${nameS} is adult`)
}

// or ||
if(ageS < 16 || ageS > 65 ) {
  console.log(`${nameS} can not run in race`);
} else {
  console.log(`${nameS} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else 
  console.log('INCORRECT');  