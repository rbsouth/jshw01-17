// Create an HTML page with javascript that listens for a keypress. 
// To be clear: the HTML page is what is listening. 
// Not an input box.
// When the user presses that key, the text of the h1 should show 
// the value of the key they have pressed.
// Example: If the user presses "J", 
// the text inside the h1 should be "J".

document.addEventListener('keypress', function(k){
	var x = (String.fromCharCode(k.keyCode));
	document.getElementById('header').innerText = x
});

// document.getElementById('header').innerText = '89'
//(String.fromCharCode(evt.keyCode)