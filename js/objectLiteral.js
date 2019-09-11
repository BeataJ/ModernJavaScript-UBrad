const personObj = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'Fl'
  },
  getBirthYear: function() {
    return 2017 - this.age;
  }
}

let valObj;

valObj = personObj;
//  Get specific value
valObj = personObj.firstName;
valObj = personObj['lastName'];
valObj = personObj.age;
valObj = personObj.hobbies[1];
valObj = personObj.hobbies;
valObj = personObj.address;
valObj = personObj.address.state;
valObj = personObj.address['city'];
valObj = personObj.getBirthYear();


console.log(valObj);

const peopleObj = [
  {name: 'Bob', age: 50},
  {name: 'Beata', age: 46},
  {name: 'Nancy', age: 78}
]

for(let i = 0; i < peopleObj.length; i++) {
  console.log(peopleObj[i].name);
}

console.clear()