const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');

// Generate stars in the header
function generateStars() {
    const starsContainer = document.getElementById('stars-container');
    const numStars = 100;  // Number of stars in the header
    const clientWidth = document.body.clientWidth;
    const logo = document.getElementById("logo-div");
    const logoRightEdge = logo.clientWidth + logo.clientLeft;
    const logoRightPercent = (logoRightEdge / clientWidth) * 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize star position inside the header
        const xPos = Math.random() * (100 - logoRightPercent); // Random position in % of width
        const yPos = Math.random() * 100; // Random position in % of height

        // Randomize star size and animation speed
        const size = Math.random() * 6 + 2; // Random size between 2px and 6px
        const animationDuration = Math.random() * 2 + 2; // Random duration between 2s and 4s

        star.style.left = `${xPos + logoRightPercent}%`;
        star.style.top = `${yPos}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${animationDuration}s`;

        starsContainer.appendChild(star);
    }

    // starsContainer.height
}

// Toggle the burger menu and overlay visibility
burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    burgerMenu.classList.toggle('rotate');
    burgerMenu.classList.toggle('close');
});

// Close the overlay when clicked outside
overlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    burgerMenu.classList.remove('rotate');
    burgerMenu.classList.remove('close');
});

// Initialize stars on page load
window.addEventListener('load', generateStars);
