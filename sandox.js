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

let age = null;
console.log(age, age + 3, `the age is ${age}`); //you get null 3 "the age is null"