// Create an HTML page with a form. The form should include inputs for a username,
//  password, an h1 tag as well as a button. In a Javascript file, write code that 
//  does the following things when the button is pressed:
// checks that the password is 12345678
// checks that the username is less than 14 characters in length
// if the info in the form is correct, have Javascript change the text in the h1
//  to say "Congrats on knowing your username and password!"
// if anything is wrong, send an alert message saying
//  "Incorrect username or password"
// Hint: You'll have to prevent the Default event from happening when the form is 
// submitted.
/*
var x = document.getElementById('password').value
var y = document.getElementById('username').value;

var check = document.getElementById('check');
check.addEventListener('click', function(e){
	e.preventDefault();
	if (x == '12345678' && y.length < 14){
		document.getElementById('header').innerText = 'Congrats on knowing your username and password!';
	} else {
		alert('Incorrect username or password.');
	}
});

console.log(y.length);
console.log(y);
*/
var y = document.getElementById('username').value;

var check = document.getElementById('check');
check.addEventListener('click', function(e){
	e.preventDefault();
	if (document.getElementById('password').value == '12345678' && y.length < 14){
		document.getElementById('header').innerText = 'Congrats on knowing your username and password!';
	} else {
		alert('Incorrect username or password.');
	}
});

console.log(y.length);
console.log(y);