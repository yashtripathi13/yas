
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    // Toggle dropdown menu on click
    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Get the hamburger menu and dropdown elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add click event to toggle the menu visibility
hamburgerMenu.addEventListener('click', (event) => {
    dropdownMenu.classList.toggle('active');
    event.stopPropagation(); // Prevent click from propagating to the document
});

// Add event listener to the entire document to close menu on outside click
document.addEventListener('click', (event) => {
    if (dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
    }
});

