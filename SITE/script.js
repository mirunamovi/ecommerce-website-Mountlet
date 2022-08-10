const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

function signupToggle(){
	       
	var popup = document.querySelector('.signup-form');
	popup.classList.toggle('active');
 }
function loginToggle(){
	
	var popup = document.querySelector('.login-form');
	popup.classList.toggle('active');
 }

const sr = ScrollReveal ({
	distance: '30px',
	duration: 1600,
	reset: true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})

sr.reveal('.featured,.cta,.new,.brand,.contact',{delay:200, origin:'bottom'})

