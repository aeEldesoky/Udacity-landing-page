// build the navigation bar
function buildNavigation () {
  //Add sections to an array
const navBar=document.getElementsByTagName('section'); 
//for loop to create navigation menu list elements for as many sections as the page has
for (let i = 0; i < navBar.length; i++) {
    //target the navigation bar list, to add list elements to it
    const navBarList = document.getElementById('navbar__list')
    //create list elements
    newList = document.createElement('li');
    //Add new list elements to its parent unordered list
    navBarList.appendChild(newList);
    //target section by id
    const sections = document.getElementsByTagName('section')[i].id;
   //target section by data-nav attribute
    const myHeading = document.getElementsByTagName('section')[i].getAttribute('data-nav');
     //Create an anchor tag
    newList.innerHTML = `<a href="#${sections}" class="menu__link"> ${myHeading} </a>`;
   
 }
}
//end of build navigation bar

//function calls
buildNavigation();