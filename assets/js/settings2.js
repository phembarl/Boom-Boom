var firstname2 = document.querySelector('#first_name');
var lastname2 = document.querySelector('#lastname');
var first2 = document.querySelector('#first');
var second2 = document.querySelector('#second');
var email2 = document.querySelector('#email');
var mobile2 = document.querySelector('#mobile');
var car = document.querySelector('#car');
var plate = document.querySelector('#plateno');
var values = document.querySelectorAll('.value');
var save = document.querySelector('#save');
var settings = document.querySelector('.fa-cog');


settings.addEventListener('click', function(){
	firstname2.setAttribute('contenteditable', 'true');
	lastname2.setAttribute('contenteditable', 'true');
	email2.setAttribute('contenteditable', 'true');
	mobile2.setAttribute('contenteditable', 'true');
	car.setAttribute('contenteditable', 'true');
	plate.setAttribute('contenteditable', 'true');
	save.style.display = 'block';
	for(var i = 0; i < values.length; i++){
		values[i].style.borderBottom = '1px solid #000';
	}
});

if(localStorage.getItem('firstname2')){
	firstname2.innerHTML = localStorage.getItem('firstname2');
	first2.textContent = firstname2.innerHTML;
}
if(localStorage.getItem('lastname2')){
	lastname2.innerHTML = localStorage.getItem('lastname2');
	second2.textContent = lastname2.innerHTML;
}
if(localStorage.getItem('email2')){
	email2.innerHTML = localStorage.getItem('email2');
}
if(localStorage.getItem('mobile2')){
	mobile2.innerHTML = localStorage.getItem('mobile2');
}
if(localStorage.getItem('car')){
	car.innerHTML = localStorage.getItem('car');
}
if(localStorage.getItem('plate')){
	plate.innerHTML = localStorage.getItem('plate');
}

save.addEventListener('click', function() {
	localStorage.setItem('firstname2', firstname2.innerHTML);
	localStorage.setItem('lastname2', lastname2.innerHTML);
	localStorage.setItem('email2', email2.innerHTML);
	localStorage.setItem('mobile2', mobile2.innerHTML);
	localStorage.setItem('car', car.innerHTML);
	localStorage.setItem('plate', plate.innerHTML);
	firstname2.setAttribute('contenteditable', 'false');
	lastname2.setAttribute('contenteditable', 'false');
	email2.setAttribute('contenteditable', 'false');
	mobile2.setAttribute('contenteditable', 'false');
	firstname2.style.border = 'none';
	first2.textContent = firstname2.textContent;
	second2.textContent = lastname2.textContent;
	this.style.display = 'none';
	for(var i = 0; i < values.length; i++){
		values[i].style.borderBottom = 'none';
	}
});

// firstname2.innerHTML = localStorage.getItem('firstname2');
