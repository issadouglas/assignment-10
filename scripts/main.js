const clicker = document.querySelector('#special');
const image = document.querySelector('#alligator');
// hide the image
image.style.display = 'none';
const div = document.querySelector('#caption');

// event handler
clicker.onclick = () => {
   image.style.display = 'block';
   div.style.display = 'none';
};

// another event handler
image.onclick = () => {
   image.style.display = 'none';
   div.style.display = 'block';
};


let answers = document.querySelectorAll('dd');
let questions = document.querySelectorAll('dt');


answers.forEach(function(el) {
  el.style.display = 'none';
});

questions.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display = 'block';
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
    }
  };
});

{

// designate elements to be used
const divp = document.querySelector('div h2');
const image = document.querySelector('img');

//
const text1 = "Everything you need to know about the junior journalism major";
const text2 = "Learn more about who I am below";

// NOTE that two CLASSES are defined in the CSS:
// .rotate-right
// .rotate-left
// these make the code below work

image.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   // change text
   divp.textContent = text2;
};
image.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   // change text back
   divp.textContent = text1;
};
}
