// build the navigation bar

function buildNav () {
  const navBar=document.getElementsByTagName('section'); 
  for (let i = 0; i < navBar.length; i++) {
      const navBarList = document.getElementById('navbar__list')
      newList = document.createElement('li');
      navBarList.appendChild(newList);
      const sections = document.getElementsByTagName('section')[i].id;
      const myHeading = document.getElementsByTagName('section')[i].getAttribute('data-nav');
      newList.innerHTML = `<a href="#${sections}" class="menu__link"> ${myHeading} </a>`;
      document.getElementsByClassName('menu__link')[0].classList.add('active-link');
    }  
}

//set active section styling
function activeSection () {
  document.addEventListener('scroll', function () {
    const sections=document.getElementsByTagName('section'); 
    for (let i = 0; i < sections.length; i++) {
      let sectionTop = sections[i].getBoundingClientRect().top;
       if (sectionTop >= 0) {
         if (sections[i].classList.contains('your-active-class') === false){
        sections[i].classList.add('your-active-class');
        }
     }
    else {
      sections[i].classList.remove('your-active-class');
    }
    }
  });
  
}
   
// smooth scroll to section when link is clicked
function smoothScroll () {
  const sections=document.getElementsByTagName('section'); 
  const links = document.getElementsByClassName('menu__link');
  for (let i = 0; i < sections.length; i++) {
links[i].addEventListener('click', function (e) {
  e.preventDefault();
  sections[i].scrollIntoView({behavior : 'smooth'});
});
  }
}




//function calls
buildNav();
activeSection();
smoothScroll();