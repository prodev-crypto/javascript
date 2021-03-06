///CONTROL FLOWS

///FOR LOOP

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



///WHILE LOOP

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


///DO WHILE LOOP

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


///IF STATEMENTS

const age = 20;

if(age > 20) {
	console.log('you are over 20 years old'); //nothing shows because age is not greater than 20
}

if(age > 15) {
	console.log('you are over 15 years old'); //gives you are over 15 years old
}

const towns = ['nairobi', 'kisumu', 'machakos', 'mombasa'];

if(towns.length > 3) {
	console.log("that's a lot of towns"); //gives that's a lot of towns
}


//IF ELSE STATEMENTS

const password = 'judge';

if(password.length >= 8) {
	console.log('passsword is long enough');
} else {
	console.log('password is not long enough'); // gives the second one because password is only four characters long
}

//Using if else to check multiple conditions

if(password.length > 12) {
	console.log('that is a strong as hell password');
} else if(password.length >= 8) {
	console.log('that is a kinda strong password');
} else {
	console.log('stop being an idiot and type a password');
}

///Use if else to evaluate more than one condition in the same check

//we use || for OR and && for AND

const password2 = 'p@ss1515155111';

if(password2.length > 12 && password2.includes('@')) {
	console.log('that is a strong as hell password'); //gives this
} else if(password2.length >= 8) {
	console.log('that is a kinda strong password');
} else {
	console.log('stop being an idiot and type a password');
} 


const password3 = 'password123456789';

if(password3.length > 12 && password3.includes('@')) {
	console.log('that is a strong as hell password');
} else if(password3.length >= 8) {
	console.log('that is a kinda strong password'); //gives this and not one because @ is not included
} else {
	console.log('stop being an idiot and type a password');
}


const password4='p@ss';

if(password4.length > 12 && password4.includes('@')) {
	console.log('that is a strong as hell password');
} else if(password4.length >= 8 || password4.includes('@')) {
	console.log('that is a strong password'); //runs this because there's an @ and the or.
} else {
	console.log('stop being an idiot and type a password');
}


const password5='p@ss'; //let's add another condition to the or

if(password5.length > 12 && password5.includes('@')) {
	console.log('that is a strong as hell password');
} else if(password5.length >= 8 || password4.includes('@') && password5.length >= 5) {
	console.log('that is a strong password'); 
} else {
	console.log('stop being an idiot and type a password'); //this one runs
}


const password6='p@sso'; 

if(password6.length > 12 && password6.includes('@')) {
	console.log('that is a strong as hell password');
} else if(password6.length >= 8 || password6.includes('@') && password6.length >= 5) {
	console.log('that is a strong password');  //this one runs
} else {
	console.log('stop being an idiot and type a password');
}


///LOGICAL NOT (!)

//When we place ! before a boolean it reverses the boolean

console.log(!true); //gives false
console.log(!false); //gives true

let user = false;

if(!user) {
	console.log('you must be logged in to continue'); //gives this
}


///BREAK AND CONTINUE

///BREAK

const scores = [50, 25, 75, 0, 30, 100, 98, 99, 120];

for(let i = 0; i < scores.length; i++) {

	console.log('your score: ', scores[i]);

	if(scores[i] === 100) {
		console.log('congrats, you got the highest score!'); //gives this
		break; //breaks the loop at 100 so we'll no longer see 98, 99 and 120 in the console
	}
}

///CONTINUE

const scores2 = [50, 25, 0, 30, 100, 98, 120];

for(let i = 0; i < scores2.length; i++) {

	if(scores2[i] === 0) {
		continue; //basically, the 0 score won't be logged into the console. that's an embarrassing score!
	} 

	console.log('your score: ', scores2[i]);

	if(scores2[i] === 100) {
		console.log('congrats, you got the highest score!'); //gives this
		break; //breaks the loop at 100 so we'll no longer see 98, 99 and 120 in the console
	}
}


///SWITCH STATEMENTS

const grade = 'D';

switch(grade) {
	case 'A':
		console.log('you got an A!');
		break;
	case 'B':
		console.log('you got a B!');
		break;
	case 'C':
		console.log('you got a C!');
		break;
	case 'D':
		console.log('you got a D!');
		break;
	case 'E':
		console.log('you got an E!');
		break;
	default:
		console.log('not a valid grade');
}
//Switch statements use strict equality ===


///VARIABLES AND BLOCK SCOPE

let amount = 30;

if(true) {
	console.log('inside 1st code block: ', amount); 
}

console.log('outside code block: ', amount); 

//gives inside 1st code block: 30
       //outside code block: 30
//this is a global scope

let amount2 = 35;

if(true) {
	amount2 = 40;
	console.log('inside 1st code block: ', amount2); 
}

console.log('outside code block: ', amount2); 

//gives inside 1st code block: 40
			//outside code block: 40

const amount3 = 55;

if(true) {
	const amount3 = 65;
	const namee ='cheryl';
	console.log('inside 1st code block: ', amount3, namee); //gives inside 1st block: 65 cheryl

	if(true) {
		const amount3 = 75;
		var test = 'hello';
		console.log('inside 2nd code block: ', amount3, test); //gives inside 2nd code block 75 hello
	}
}

console.log('outside code block: ', amount3, test); //gives 55 hello

//therefore var can be accessed outside the code block unlike let.