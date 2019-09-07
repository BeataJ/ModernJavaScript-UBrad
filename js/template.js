const tname = 'John';
const tage = 3;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template string (es5)
html = '<ul><li>Name: ' + tname + ' </li><li>Age: ' + tage +  ' </li><li>Job: ' + job +' </li><li>City:  ' + city +  ' </li></ul>';

html = '<ul>' +
      '<li>Name: ' + tname + ' </li>' +
      '<li>Age: ' + tage + ' </li>' +
      '<li>Job: ' + job + ' </li>' +
      '<li>City: ' + city + ' </li>' + 
      '</ul>';

function hello() {
  return 'Hello';
}      

// Whit template string (es6)
html = `
  <ul>
    <li>Name: ${tname}</li>
    <li>Age: ${tage}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${tage > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`

// document.body.innerHTML = html;
