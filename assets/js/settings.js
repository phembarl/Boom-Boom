var firstname = document.querySelector('#first_name');
var lastname = document.querySelector('#lastname');
var first = document.querySelector('#first');
var second = document.querySelector('#second');
var email = document.querySelector('#email');
var mobile = document.querySelector('#mobile');
var values = document.querySelectorAll('.value');
var save = document.querySelector('#save');
var settings = document.querySelector('.fa-cog');


settings.addEventListener('click', function(){
	firstname.setAttribute('contenteditable', 'true');
	lastname.setAttribute('contenteditable', 'true');
	email.setAttribute('contenteditable', 'true');
	mobile.setAttribute('contenteditable', 'true');
	save.style.display = 'block';
	for(var i = 0; i < values.length; i++){
		values[i].style.borderBottom = '1px solid #000';
	}
});

if(localStorage.getItem('firstname')){
	firstname.innerHTML = localStorage.getItem('firstname');
	first.textContent = firstname.innerHTML;
}
if(localStorage.getItem('lastname')){
	lastname.innerHTML = localStorage.getItem('lastname');
	second.textContent = lastname.innerHTML;
}
if(localStorage.getItem('email')){
	email.innerHTML = localStorage.getItem('email');
}
if(localStorage.getItem('mobile')){
	mobile.innerHTML = localStorage.getItem('mobile');
}

save.addEventListener('click', function() {
	localStorage.setItem('firstname', firstname.innerHTML);
	localStorage.setItem('lastname', lastname.innerHTML);
	localStorage.setItem('email', email.innerHTML);
	localStorage.setItem('mobile', mobile.innerHTML);
	firstname.setAttribute('contenteditable', 'false');
	lastname.setAttribute('contenteditable', 'false');
	email.setAttribute('contenteditable', 'false');
	mobile.setAttribute('contenteditable', 'false');
	firstname.style.border = 'none';
	first.textContent = firstname.textContent;
	second.textContent = lastname.textContent;
	this.style.display = 'none';
	for(var i = 0; i < values.length; i++){
		values[i].style.borderBottom = 'none';
	}
});

