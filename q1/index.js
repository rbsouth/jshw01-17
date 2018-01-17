// Create an HTML page with two buttons that argue with each other. 
// When one button is clicked, the box in the middle of them will say, 
// "I'm right!". When the other button is clicked, the text is replaced with, 
// "No, I'm right!"

var pickMe = document.getElementById('me');
pickMe.addEventListener('click', function(){
	document.getElementById('input-box').value = "I'm Right!"
});

var noMe = document.getElementById('noMe');
noMe.addEventListener('click', function(){
	document.getElementById('input-box').value = "No, I'm Right!"
});