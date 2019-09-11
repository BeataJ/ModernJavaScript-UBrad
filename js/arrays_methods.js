// create some arrays
const number = [12.34,56,78,98];
const numbers2 = new Array(34,67,56,12,1);
const fruit = ['Apple', 'Banana', 'Orange', 'Peer'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let valArr;

// Get array length
valArr = number.length;
// check if is array
valArr  = Array.isArray(number);
// Get single value
valArr = number[2];
// Insert into array
number[1] = 100;
// find index of value
valArr = number.indexOf(78);

// Mutating arrays
// -----------------------------------

// add on to end of array
number.push(250);
// add on to front
number.unshift(120);
// take off from end
number.pop();
// take off from front
number.shift();
// Splice value
number.splice(1,1);
number[1] = 100;
//  Reverse
number.reverse();

// -----------------------------------

// Concatenate array
valArr = number.concat(numbers2);

// Sorting
valArr = fruit.sort()
valArr = number.sort()

// Use the "compare" function
valArr = number.sort(function(x, y) {
  return x - y;
});

// Reverse sort
valArr = number.sort(function(x, y) {
  return y - x;
});

function over50(num) {
  return num > 50;
}

valArr = number.find(over50);

console.log(number);
console.log(valArr);
// console.clear();