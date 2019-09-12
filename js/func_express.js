// FUNCTION DECLARATION ----------------------
function greet(fn = 'bib', ln = 'kik') {
  // if(typeof fn === 'undefined') {fn = 'bib'}
  // if(typeof ln === 'undefined') {ln = 'kik' }
  // console.log('Hi');
  return 'Hello ' + fn + ' ' + ln;
}

// console.log(greet());

// -------end DECL...---------------

// FUNCTION EXPRESIONS--------------

const square = function(x = 3) {
  return x*x;
};

// console.log(square());

//  -----end-------

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFEs run...')
// })();

// (function(name='bob'){
//   console.log('IIFEs run... ' + name)
// })('brad');

// ----end-----

// -----Property METHODS

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('delete todo...')
}

todo.add();
todo.edit(16);
todo.delete();
console.clear();