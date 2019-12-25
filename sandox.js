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