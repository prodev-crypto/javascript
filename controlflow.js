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
	c++;																//in loop: 1 
}																			//in loop: 2
																			//in loop: 3 
																			//in loop: 4
	


const countries = ['kenya', 'italy', 'tanzania'];

let d = 0;

while(d < countries.length) {
	console.log(countries[d]); //you get kenya
	d++;														   //italy
}																	   //tanzania


//DO WHILE LOOP

let f = 5;

do{
	console.log('val of f is: ', f);
	f++;
} while(f<5); //we get val of i is 5

let g = 4;

do{
	console.log('val of g is: ', g);
	g++;
} while(g<5); //gives val of g is 4

let h = 3;

do{
	console.log('val of h is: ', h);
	h++;
} while(h<5); //gives the val of h is 3
												//val of h is 4
												//gives two values because the loop runs twice till h is 5.