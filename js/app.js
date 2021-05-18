//global variables
const sections=document.getElementsByTagName('section'); 

// build the navigation bar

for (let i = 0; i < sections.length; i++) {
    const navBarList = document.getElementById('navbar__list')
    newList = document.createElement('li');
    navBarList.appendChild(newList);
    const myHeading = document.getElementsByTagName('section')[i].getAttribute('data-nav');
    newList.innerHTML = `<a href="#${sections[i].id}" class="menu__link"> ${myHeading} </a>`;
    const defaultActive= document.getElementsByClassName('menu__link')[0].parentElement.classList.add('active-link');
    
    
}
//set active section styling
function activeSection () {
  window.addEventListener('scroll', function() {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top >= 0 && sections[i].getBoundingClientRect().top <= 300) {

        sections[i].classList.add('your-active-class');  
      }
      else {
        sections[i].classList.remove('your-active-class');  
      }
     
    }
  
    
  });
  }
   
 

// smooth scroll to section when link is clicked
function smoothScroll () {
  menuLinks=document.getElementsByClassName('menu__link');
  for (let i = 0; i < sections.length; i++) {
    menuLinks[i].addEventListener('click', function (e) {
    e.preventDefault();
    sections[i].scrollIntoView({behavior : 'smooth'});
});
  }
}

smoothScroll();
activeSection();

