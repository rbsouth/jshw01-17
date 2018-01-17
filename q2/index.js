// Create an HTML page with a large element on the page that says "Don't hover over me" 
// inside of it. When you hover over the element, send an alert to the user that says, 
// "Hey, I told you not to hover over me!" Bonus: on mouseover, change the text to say 
// "Don't hover over me." When you mouseout of the element, have it restore the original 
// text.

var dontHover = document.getElementById('large-element');
dontHover.addEventListener('mouseover', function(){
	alert('Hey, I told you not to hover over me!')
});