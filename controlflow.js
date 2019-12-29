///CONTROL FLOWS

//For loop

for (let i = 0; i < 5; i++) {
	console.log('in loop', i);
} //the curly braces are a codeblock so we don't need a semi colon at the end of it.

console.log('loop finished'); //to let us know the loop finished because it runs after it finishes.

const names = ['wendy', 'betty', 'cheryl'];

for (let b = 0; b < names.length; b++) {
	// console.log(b); //gives 0 1 2 in vertical order
	// console.log(names[b]); //gives wendy betty cheryl in vertical order

	let html = `<div>${names[b]}</div>`;
	console.log(html);
}