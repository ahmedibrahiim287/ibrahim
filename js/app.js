

/**
 * Define Global Variables
 * 
*/

const navbarToggler = document.querySelector(".navbar-toggler");
const sections =Array.from( document.querySelectorAll("section"));
const menu = document.getElementById("navbar__list");
let numberOfListItem = sections.length;



// build the nav

function creatItem() {
document.addEventListener('scroll', toggelClass);
navbarToggler.addEventListener("click", navbarTogglerClick);
function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  menu.classList.toggle("open");
}
  for (let section of sections) {
     
   let sectionName = section.getAttribute("data-nav");
   let sectionLink = section.getAttribute('id');
   let listItem = document.createElement('li');
   listItem.innerHTML =`<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`
   

     listItem.addEventListener('click',navbarLinkClick)
     
function navbarLinkClick(event) {

  smoothScroll(event); 

  if(menu.classList.contains("open")) { 
    navbarToggler.click();
  }

}  
     function smoothScroll(event) {
  event.preventDefault();
  const targetId = `#${
            event.target.innerText.replace(/\s/g, "").toLowerCase()}`
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);

    function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

  }
}

    menu.appendChild(listItem);
}
}

// Add class 'active' to section when near top of viewport

function sectionInViewPort(elm) {
  let setctionPos = elm.getBoundingClientRect();
  return (setctionPos.top >= -200 && setctionPos.top<=400);
}
function toggelClass(){
  for (let section of sections) {
  section.classList.remove('your-nactive-class');
    if (sectionInViewPort(section)) {
      if (!section.classList.contains('your-active-class')) {
        section.classList.add('your-nactive-class');
      } else {
        section.classList.remove('your-active-class');
      }
    }
  }
}



creatItem();
document.addEventListener('scroll', toggelClass);

