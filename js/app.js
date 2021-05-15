// build the navigation bar

const navBar=document.getElementsByTagName('section'); 
for (let i = 0; i < navBar.length; i++) {
    const navBarList = document.getElementById('navbar__list')
    newList = document.createElement('li');
    navBarList.appendChild(newList);
    const sections = document.getElementsByTagName('section')[i].id;
    const myHeading = document.getElementsByTagName('section')[i].getAttribute('data-nav');
    newList.innerHTML = `<a href="#${sections}" class="menu__link"> ${myHeading} </a>`;

//set active section styling

    if (navBar[i].getBoundingClientRect().top >= 0) {
      navBar[i].classList.add('your-active-class');  
    }
      else {
        navBar[i].classList.remove('your-active-class'); 
      }
   
 }




