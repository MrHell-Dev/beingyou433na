var b1 = document.getElementById('viewanimation');
var a = document.getElementById("texttype");
function showanimation() {
	var c = document.getElementById("textishere");
	a = a.value;
	var counter = 0;
	var te = setInterval(writing,500);
	function writing() {
		if(counter<=a.length)
		{
			c.innerHTML = a.slice(0,counter)
			counter++;
		}
		else
		{
			clearInterval(te);
		}
	}
}
function checkforenter(event) {
	if(event.code == "Enter")
	{
		b1.click();
	}
}
a.addEventListener('keyup',checkforenter);
b1.addEventListener("click",showanimation);