const title = 'Best reads of 2019';
const author = 'Mario';
const likes = '30';

//1. concantenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
// console.log(result);

//2. template string way or tenplate literal

// let result = `The blog called TITLE by AUTHOR has LIKES likes`;
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result);

//3. creating html templates

let html = `
<h2>${title}</h2>
<p>By${author}</p>
<span>This blog has ${likes} likes </span>
`;
console.log(html);

//This prints the text above in html.



//ARRAYS

let ninjas = ['shaun', 'ryu', 'chun-li'];

let ages = [20,25,30,35];
console.log(ages);

let random = ['wendy', 'cheryl', 24, 22];
console.log(random); //you get ["wendy", "cheryl", 24, 22]


//ARRAY METHODS

// let result = ninjas.join('-');
// console.log (result); //you get shaun,ryu,chun-li


// let result = ninjas.push ('ken');
// console.log(result); //nothing displays
// console.log(ninjas); // you get ["shaun", "ryu", "chun-li", "ken"]

// // let result2 = ninjas.pop();
// // console.log(ninjas); //you get ["shaun", "ryu", "chun-li"]

// result = ninjas.pop();
// console.log(result);

//NULL AND UNDEFINED

// let age;
// console.log(age, age + 3, `the age is ${age}`); // you get undefined, NaN, the age is undefined

// let age = null;
// console.log(age, age + 3, `the age is ${age}`); //you get null 3 "the age is null"


//BOOLEANS

///booleans and comparisons

console.log(true,false); //gives true false
console.log(true, false, "true", "false"); //gives true false "true" "false"

///methods can return booleans

let email = 'wendy@thenetninja.co.ke';

// let result = email.includes('@');
// console.log(result); //gives true

// let result2 = email.includes('!');
// console.log(result2); //gives false

let names = ['wendy', 'cheryl', 'wanja'];
// let result = names.includes('cheryl');
// console.log(result); //gives true

let result3 = names.includes('luigi');
console.log(result3); //gives false

///comparison operators

let age = 25;

console.log(age == 25); //gives true
console.log(age == 30); //gives false
console.log(age != 25); //gives false
console.log(age != 30); //gives true 
console.log(age > 20); //gives true
console.log(age < 20); //gives false
console.log(age <= 25); //gives true
console.log(age >= 25); //gives true

let name = 'wendy';

console.log(name == 'wendy'); //gives true
console.log(name == 'Wendy'); //gives false because of the capital W
console.log(name > 'crystal'); //gives true because w is greater than c in the alphabet
console.log(name > 'Wendy'); //gives true because small letter w is greater than capital letter W
console.log(name > 'Crystal'); //gives true because all lower case letters are greater than all uppercase letters
console.log(name > 'Zain'); //gives true
console.log(name < 'Cheryl'); //gives false

//loose comparison (different types can be equal)

console.log(age == 25); //gives true
console.log(age == '25'); //gives true
console.log(age != 25); //gives false
console.log(age != '25'); //gives false

//strict comparison (different types cannot be equal) //compares type and value

console.log(age === 25); //gives true
console.log(age === '25'); //gives false
console.log(age !==25); //gives false
console.log(age !== '25'); //gives true

//EXPLICIT TYPE CONVERSION

let score = '100';
// console.log(score + 1); //gives 1001 because the number 1 was concatenated into the string '100'.

score = Number(score); //converts the string '100' into the number 100
console.log(score + 1); //gives 101

// let result = 'hello';
// result = Number(result);
// console.log(result); //gives NaN because it does not make sense to convert 'hello' into a number

let result2 = String(50);
console.log(result2, typeof result2); //gives 50 string meaning the number 50 was converted to a string

let result = Boolean(100);
console.log(result, typeof result); //gives true boolean

let result4 = Boolean(-5);
console.log(result4, typeof result4); //gives true boolean

let result5 = Boolean(0);
console.log(result5, typeof result5); //false boolean
//So all positive and negative values are truthy and zero is falsy.

let result6 = Boolean('0');
console.log(result6, typeof result6); //gives true boolean

let result7 = Boolean('');
console.log(result7, typeof result7); //gives false boolean

let result8 = Boolean('cheryl');
console.log(result8, typeof result8); //gives true boolean
//Therefore strings of any length give a true boolean unless empty