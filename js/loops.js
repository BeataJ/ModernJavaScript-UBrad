// FOR LOOP-------

// for(let i = 0; i < 10; i++) {
  
//   if(i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5) {
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('NUMBER ' + i);
// }

// WHILE LOOP----------

// let i = 0;

// while(i < 10) {
//   console.log('Number while loop ' + i);
//   i++;
// }

// DO WHILE LOOP------

// let i = 100;

// do {
//   console.log(i);
//   i++;
// }
// while(i < 10);

// LOOP TFROUGH ARRAY-----------------------
// const cars = ['fiat', 'syrenka', 'mydelniczka', 'zuk'];

// // for(let i = 0; i < cars.length; i++) {
// //   console.log(cars[i]);
// // }

// // FOREACH
// cars.forEach((car, index, array) => {
//   console.log(`${index} : ${car}  ${array}`);
//   // console.log(array)
// })

// MAP------------------
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Bob'}
// ];

// const ids = users.map((user) => {
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP -----------------

const user = {
  firstName: 'Bob',
  lastName: 'Doe',
  age: 40
};

for(let x in user){
  console.log(`${x}; : ${user[x]}`);
}

console.clear();