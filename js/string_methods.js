const firstName = 'Bobik';
const lastName = 'Jas';
const ag = 36;
const str = 'My name is beata';
const tags = 'web dev,programming,css,html';

let s;

s = firstName + lastName;

// concatenation
s = firstName + ' ' + lastName;

// Append
s = 'Brad';
s += ' Traversy';

s = "Hello my name is " + firstName + ' and I am ' + ag;

// Escaping
// s = "That's awesome, I can't wait";
s = 'That\'s awesome, I can\'t wait';

// Length
s = firstName.length;

// concat()
s = firstName.concat(' ', lastName);

// Change case
s = firstName.toUpperCase();
s = firstName.toLowerCase();

s = firstName[1];

// indexOf()
s = firstName.indexOf('B');
s = firstName.lastIndexOf('b');

// charAt()
s = firstName.charAt(2);
// Get last char
s = firstName.charAt(firstName.length -1);

// substring()
s = firstName.substring(1,3);

// slice()
s = firstName.slice(1,5);
s = firstName.slice(-3);

// split()
s = str.split(' ');
s = tags.split(',');

// replace()
s = str.replace('beata','bob');

// includes();
// s = str.includes('beata');

console.log(s);
console.clear();