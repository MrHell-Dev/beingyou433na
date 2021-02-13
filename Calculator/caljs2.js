
const screen = document.getElementById("screen");
console.log(event);
	var perviousval = null;
	var operator = false;
	var number = false;
	var curroperator = null;
	var isfloat = false;
	function getresult(perval = 0,afterval = 0,oper = "")
	{
		console.log("getresult before values"+perval+"::"+afterval+"::"+oper);
		let result = null;
		switch(oper)
		{
			case "/":
			result = perval/afterval;
			break;
			case "*":
			result = perval*afterval;
			break;
			case "+":
			result = perval+afterval;
			break;
			default:
			result = perval-afterval;
		}
		console.log("getresult after values"+perval+"::"+afterval+"::"+oper);
		return result;
	}
	function initializezero() {
			perviousval = null;
		operator = false;
		number = false;
		curroperator = null;
		isfloat = false;
	}
	function decimalclicked(evevt)
	{
		checkscr();
		isfloat = true;
		if(number == false)
		{
			screen.value = 0;
		}
		numberclicked(event);
		console.log("decimalclicked");
	}
	function screenwrite(event,val = null) 
	{
		console.log("screenwrite before values"+curroperator+"::"+perviousval);
		if(event.key == "Enter")
		{
			screen.value = val;
			initializezero();
		}
		else
		{
			if(number == true)
			{
				screen.value = screen.value+event.key;
			}
			else
			{
				let flo = (isfloat==true?parseFloat(screen.value):parseInt(screen.value));
				if(perviousval == null)
					{
						perviousval = flo;

					}
					else
					{
						perviousval = getresult(perviousval,flo,curroperator);
					}
					
				if(operator == true)
				{
					screen.value = event.key;
					curroperator = screen.value;

				}
			}
		}
		console.log("screenwrite after values"+curroperator+"::"+perviousval);
	}
	function checkscr()
	{
		if(operator == false && number == false && isfloat == false)
		{
			screen.value = "";	
		}
		
	}
	function operatorclicked(event) 
	{
		checkscr();
		if(event.key == null)
		{
			event.key = event.target.value;
		}
		operator = true;
		number = false;
		screenwrite(event);
		console.log("operatorclicked");
	}
	function numberclicked(event)
	{
		checkscr();
		if(event.key == null)
		{
			event.key = event.target.value;
		}
		if(curroperator != null && number == false)
		{
			screen.value = "";
		}
		number = true;
		operator = false;
		screenwrite(event)
		console.log("numberclicked");
	}
	function initialiseoperator(darr) {
		for (let i = 0; i < darr.length; i++) {
			darr[i].addEventListener("click",operatorclicked);
		}
	}
	function initialisenumbers(darr) {
		for (let i = 0; i < darr.length; i++) {
			darr[i].addEventListener("click",numberclicked);
		}
	}
	function enterclicked(event) {
		checkscr();
		if(event.key == null)
		{
			event.key = event.target.value;
		}
		screenwrite(event,getresult(perviousval,parseInt(screen.value),curroperator));
		this.disabled = true;
	}

	function initialiser()
	{
		var opera = ["+","-","/","*"];
		var a = document.querySelectorAll(".operator.btn.btn-info");
		initialiseoperator(a);
		var b = document.querySelectorAll(".btn.btn-light.waves-effect");
		initialisenumbers(b);
		document.getElementById("result").addEventListener("click",enterclicked);
		document.getElementById("clearscr").addEventListener("click",function(){
			location.reload();
		});
		document.addEventListener("keyup",function(){
			let a = event.code.toString();
			if(event.getModifierState("NumLock"))
			{
				if(a.search("Numpad") != -1)
				{
					if(event.key == "Enter")
					{
						enterclicked(event);
					}
					else
					{
						if(opera.indexOf(event.key) != -1)
						{
							operatorclicked(event);
						}
						else
						{	
							if(a.search("Decimal") != -1)
							{
								decimalclicked(event);
							}
							else
							{
								numberclicked(event);	
							}

							
						}
					}
				}
			}
			else
			{
				alert("Please turn On NumLock");
			}

		});
		
		
	}
	window.addEventListener("DOMContentLoaded",initialiser);