// Arrays are iterable
var veggies = ['onion','parsley','carrot'];
for(var i=0;i<veggies.length;i++){
    console.log(veggies[i]);
}

// Strings are iterable, too!
var greetings = 'hello';
for(var i=0;i<greetings.length;i++){
    console.log(greetings[i]);
}

// strings !== arrays
var greet = 'Hello ';
var user = 'Ayushi';
// we can't run all the array method on string
//console.log(greet.pop());
console.log(greet + user);
console.log(greet.concat(user));

/* Method which we can use with string
   charAt() 
   concat() 
   indexOf() 
   lastIndexOf() 
   split() 
   toUpperCase() 
   toLowerCase()  
*/