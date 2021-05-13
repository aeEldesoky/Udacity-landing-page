/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
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
    newList.innerHTML = `<a href="#${sections}"> ${myHeading} </a>`;
    
 }





// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active