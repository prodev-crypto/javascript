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
  console.log(`good day ${name}!`);
};

talk('wendy'); // gives good day wendy (here, wendy is an argument of the function)


///PASSING MORE THAN ONE PARAMETER

const speak2 = function(name2, time) {
  console.log(`good ${time} ${name2}`);
};

speak2('cheryl', 'morning'); //gives good day wendy


///RETURNING VALUES

// const calcArea = function(radius) {
//   let area = 3.14 * radius**2;
//   return area;
// };

// const area = calcArea(5);
 
// console.log(area); //gives 78.5

//or we can write it like this:

const calcArea = function(radius) {
  return 3.14 * radius**2;
};

const area = calcArea(5);

console.log(area); //gives 78.5

//we can use the area in another function

const calcVol = function (area) {
  
};

calcVol(area);


///ARROW FUNCTIONS

//Offer us a cleaner and shorter way to write functions

const calcArea2 = (radius) => {
  return 3.14 * radius**2;
};

const area2 = calcArea2(5);

console.log(area2); //gives 78.5

//if it is one parameter we can write:

const calcArea3 = radius => 3.14 * radius**2;

const area3 = calcArea3(5);

console.log(area3); //gives 78.5


///PRACTISE ARROW FUNCTIONS

const bill = function(products,tax ) {
  let total = 0;
  for(let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
}

// console.log(bill([10, 15, 30], 0.2))
// // bill([10, 15, 30], 0.2);

const result = bill([10, 15, 30], 0.2);
console.log(result); //gives 66

const bill2 = (products, tax) => {

}

///Difference between invoking functions and methods

const lotion = 'Luron';

//functions

const greetOne = () => 'hey, sunshine'

let resultOne = greetOne();
console.log(resultOne);

//methods

let resultTwo = lotion.toUpperCase();
console.log(resultTwo); //methods are invoked during dot notation

//so the difference is where they are defined and how they are invoked.
