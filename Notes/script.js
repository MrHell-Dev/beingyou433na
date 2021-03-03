function removealert() {
		document.getElementById("ifalert").innerHTML = "";
	}

	function getallnote(event) {
		let tempobj = JSON.parse(localStorage.getItem("Notedata"));
		if(tempobj != null)
		{
			for (var i = 0; i < tempobj.data.length; i++)
			{
			let title = tempobj.data[i]["noteTitle"];
			let desc = 	tempobj.data[i]["noteDesc"];
			addyournote(event,title,desc);
			}	
		}
	}



	function clearfields() {
		let x = document.querySelectorAll("textarea");
		for (var i = 0; i<x.length; i++) {
			x[i].value = "";
		}
	}

	function addalert(ty,highlightedtex,tex) {
		let tempdiv = document.createElement('div');
		tempdiv.setAttribute("class","alert alert-"+ty+" alert-dismissible fade show");
		let temphighlighted = document.createElement('strong');
		temphighlighted.innerHTML = highlightedtex;
		let temppara = document.createElement('p');
		temppara.innerHTML = tex;
		let tempbut = document.createElement('button');
		tempbut.addEventListener("click",removealert)
		tempbut.setAttribute("class","close");
		let tempspan = document.createElement('span');
		tempspan.setAttribute("aria-hidden","true");
		tempspan.innerHTML= "&times;";
		tempbut.appendChild(tempspan);
		tempdiv.appendChild(temphighlighted);
		tempdiv.appendChild(temppara);
		tempdiv.appendChild(tempbut);
		document.getElementById("ifalert").appendChild(tempdiv);
		setTimeout(function () {
			removealert();
		},5000);
	}
	
	function removeloca(a) {
		let tempobj = JSON.parse(localStorage.getItem("Notedata"));
		
		for (let i = 0; i < tempobj.data.length; i++) {
			let locatitle = tempobj.data[i]["noteTitle"];
			let locadesc = tempobj.data[i]["noteDesc"];
			if(locatitle == a[0].innerHTML && locadesc == a[1].innerHTML)
			{
				tempobj.data.splice(i,1);
				if(tempobj.data.length == 0)
				{
					localStorage.removeItem("Notedata");
				}
				else
				{	
					localStorage.setItem("Notedata",JSON.stringify(tempobj));
				}

			}
		}

	}

	function removenote() {
		if(confirm("Do you really want to delete this"))
		{
			let a = this.parentNode;
			removeloca(a.childNodes);
			a.parentNode.remove();

		}
		
	}
	function addloca(a,b){
		let da = JSON.parse(localStorage.getItem("Notedata"));
			let tempobj = {"noteTitle":a,"noteDesc":b}; 
			if(da == null)
			{
				da = {};
				let item = [];
				item.push(tempobj);
				da = {"data":item};
	
			}
			else
			{
				da.data.push(tempobj);
			}
			localStorage.setItem("Notedata",JSON.stringify(da));
	}

	function keyhandler(event) {
		if(event.keyCode == 13 || this.value == "")
		{
			searchnote(event);
		}
		
	}

	function addyournote(event,title = null,desc = null) {
		let a,b,flag;
		flag = false;
		if(title == null && desc == null)
		{
			a = document.getElementById("Title").value;
			b = document.getElementById("Description").value;
			flag = true;
			
		}
		else
		{
			a = title;
			b = desc;
		}
		removealert();
		if (a.length>0 && b.length>0)
		{
				let title = a;
				let Desc = b;
				let tempdiv = document.createElement('div');
				tempdiv.setAttribute("class","card signote ml-1 mr-1");
				let tempdivbody = document.createElement('div');
				tempdivbody.setAttribute("class","card-body");
				let temph5 = document.createElement('h5');
				temph5.setAttribute("class","card-title");
				temph5.innerHTML = title;
				let temppara = document.createElement('p');
				temppara.setAttribute("class","card-text");
				temppara.innerHTML = Desc;
				let tempbut = document.createElement('button');
				tempbut.setAttribute("class","btn btn-primary");
				tempbut.setAttribute("type","button");
				tempbut.addEventListener("click",removenote);
				tempbut.innerHTML = "Delete Note";
				tempdivbody.appendChild(temph5);
				tempdivbody.appendChild(temppara);
				tempdivbody.appendChild(tempbut);
				tempdiv.appendChild(tempdivbody);
				let mainbody = document.getElementById("notearea");
				mainbody.insertBefore(tempdiv,mainbody.childNodes[0]);
			clearfields();
			if(flag){
				addloca(title,Desc);
				addalert("success","Thank You So Much!"," to give you valuable time to add a beautiful note at here.");
			}
			
		} 
		else
		{
			addalert("warning","Holy Jesus!"," You should check in on some of those fields below. They can"+"'"+"t be empty ");	

		}
		
	}

	function searchnote() {
		let x = document.getElementById("navbarsearchinput").value;
		let z = document.getElementById("notearea");
		z.innerHTML = "";
		let tempobj = JSON.parse(localStorage.getItem("Notedata"));
		if(tempobj != null)
		{
			for (var i = 0; i < tempobj.data.length; i++)
			{
				let title = tempobj.data[i]["noteTitle"];
				if(title.match(".*"+x+".*"))
				{	
					console.log(title.match(".*"+x+".*"));
					let desc = 	tempobj.data[i]["noteDesc"];
					addyournote(event,title,desc);
				}
			}	
		}
		

	}

	function initialiser(event)
	{
		getallnote(event);
		document.getElementById('AddNote').addEventListener("click",addyournote);
		document.getElementById('navbarsearchbut').addEventListener("click",searchnote);
		document.getElementById('navbarsearchinput').addEventListener("keyup",keyhandler);
	}

	

	document.addEventListener("DOMContentLoaded",initialiser);
