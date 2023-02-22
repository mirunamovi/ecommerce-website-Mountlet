//sticky header
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

//sign in and sign up
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

 menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


// scroll reveal delay 

const sr = ScrollReveal ({
	distance: '30px',
	duration: 1600,
	reset: true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})

sr.reveal('.featured,.cta,.new,.brand,.contact',{delay:200, origin:'bottom'})


//canvas mountains
var canvas = document.querySelector('canvas');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

c = canvas.getContext('2d');
//let mountainColors = ['#813945', '#7B3647', '#753146', '#663047'];
let mountainColors = ['#8B8099', '#E1D9D8', '#975433', '#473437'];

function drawBackground() {
  let gradient = c.createLinearGradient(windowWidth / 2, 0, windowWidth / 2, windowHeight);
  gradient.addColorStop(0, "#303461");
  gradient.addColorStop(0.3, "#85536E");
  gradient.addColorStop(0.6, "#D46A4B");
  gradient.addColorStop(0.9, "#EB7337");
  c.fillStyle = gradient;
  c.fillRect(0, 0, windowWidth, windowHeight);
}

//only draws one mountain range (across the screen);
function drawMountain(mountainColor) {
  let x = 0;
  let y = windowHeight * ((Math.random() * 0.2) + 0.7); 
  c.strokeStyle = mountainColor;
  c.beginPath();
  c.moveTo(x, y);
  while (x < windowWidth) {
    let dx = (Math.random() * 20) + 50; 
    let dy = (Math.random() - 0.5) * 100; 
    x = x + dx;
    y = y + dy;
    if (y < 0 || y > windowHeight) { 
      y = y - 2 * dy; 
    }
    if (x > windowWidth) {
      x = windowWidth;
    }
    c.lineTo(x, y);
  }

  c.lineTo(windowWidth, y);
  c.lineTo(windowWidth, windowHeight);
  c.lineTo(0, windowHeight);
  c.lineTo(0, windowHeight * 0.4);

  c.stroke();
  c.fillStyle = mountainColor
  c.fill();
}

function drawMountains () {
  for (let i = 0; i < mountainColors.length; i++ ) {
    drawMountain(mountainColors[i]);
  }
}

let starLowerBound = windowHeight * 0.3;

function drawStar() {
  c.beginPath();

  let randomX = Math.random() * windowWidth;
  let randomYSeed = Math.random();
  let randomY = randomYSeed * starLowerBound;

  let randomOpacity = 0.7 - (Math.random() * randomYSeed); 
  c.fillStyle = `rgba(255,255,255, ${randomOpacity})`;

  c.arc(randomX, randomY, 1, 0, 2 * Math.PI);
  c.fill();
}

let numberOfStars = 100;
function drawStars() {
  for (let i = 0; i < numberOfStars; i++) {
    drawStar();
  }
}

 function drawScene() {
   drawBackground();
   drawStars();
   drawMountains();
 }

drawScene();
context.font = "30px Arial";
context.strokeText("Text", 50, 50);



