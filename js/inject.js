(async () => {
    console.log('Blue');
    const text = document.all[0].innerText;
    console.log(text);
})();
console.log('inserted log');
(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	alert('inserted self... giggity');

})();