class danceboi{

		

		createLink(Name,url = '#') {
		let a = document.getElementById('Navul');
		let b = document.createElement('li');
		let c = document.createElement('a');
		b.setAttribute("class","nav-item navlinks");
		c.setAttribute("class","nav-link");
		c.id = Name;
		c.href = url;
		c.innerHTML = Name;
		b.appendChild(c);
		a.appendChild(b);
		}	
	}

	function initialiser() {
		let obj = new danceboi();
		obj.createLink("Contact Us","pathofcontactpage");
		let y = anime.timeline({
			easing: 'easeInOutSine'
		}).add({
			targets:'.navbar',
			width:['0%','100%'],
			opacity:['0','1'],
			duration:2500
		}).add({
			targets:'#headingline',
			width:['0%','100%'],
			opacity:['0','1']
		})
		.add({
			targets:'#headlinebelow',
			width:['0%','100%'],
			opacity:['0','1']
		}).add({
			targets:'#card1',
			translateY:['100','0']
		}).add({
			targets:'#card2',
			translateY:['100','0']
		}).add({
			targets:'#card3',
			translateY:['100','0']
		}).add({
			targets:'.sharpfonts',
			duration:1000,
			opacity:['0','1'],
			rotate:350
		});
	}

	document.addEventListener("DOMContentLoaded",initialiser)
	