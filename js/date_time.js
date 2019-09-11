let valDate;

const today1 = new Date();
let birthday = new Date('2-16-1967 11:21:00');
birthday = new Date('July 10 1981');
birthday = new Date('9/2/1987');

valDate = today1.getMonth();
valDate = today1.getDate();
valDate = today1.getDay();
valDate = today1.getFullYear();
valDate = today1.getHours();
valDate = today1.getMinutes();
valDate = today1.getSeconds();
valDate = today1.getMilliseconds();
valDate = today1.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1978);
birthday.setHours(3);
birthday.setMinutes(2);

console.log(birthday);
console.clear()