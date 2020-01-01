///FUNCTIONS
//Fall under object type in data type.
//Allows us to define a block of code that we can call and execute whenever we want.
//Values can also be passed into the function so the function takes the value, does 
//something with it and then spits out an updated value in the end.


///FUNCTION DECLARATION

function greet() {
  console.log('hello there!')
}

greet(); //this calls the function thus displaying on the console 


///FUNCTION EXPRESSION

const speak = function() {
  console.log('good day!');
}; //function expressions always have a semi-colon at the end of the code block


///ARGUMENTS AND PARAMETERS

const talk = function(name) { //here, name is the parameter.
  console.log(`good day ${name}`);
};

talk('wendy'); // gives good day wendy (here, wendy is an argument of the function)


