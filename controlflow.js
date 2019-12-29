///CONTROL FLOWS

//FOR LOOP

for (let i = 0; i < 5; i++) {
	console.log('in loop', i);
} //the curly braces are a codeblock so we don't need a semi colon at the end of it.

console.log('loop finished'); //to let us know the loop finished because it runs after it finishes.

const names = ['wendy', 'betty', 'cheryl'];

for (let b = 0; b < names.length; b++) {
	// console.log(b); //gives 0 1 2 in vertical order
	// console.log(names[b]); //gives wendy 
																	//betty 
																	//cheryl

	let html = `<div>${names[b]}</div>`;
	console.log(html); //gives <div>wendy</div> 
														//<div>betty</div> 
														//<div>cheryl</div>
}



//WHILE LOOP

let c = 0;

while(c < 5) {
	console.log('in loop:', c); //you get in loop: 0 
																			//in loop: 1 
																			//in loop: 2
																			//in loop: 3 
																			//in loop: 4
	c++;
}