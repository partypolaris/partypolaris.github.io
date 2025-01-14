function addBurger(burgerID, overlayID, navbarID) {
    const burgerMenu = document.getElementById(burgerID);
    const overlay = document.getElementById(overlayID);
    const navbar = document.getElementById(navbarID);

    // Generate stars in the header

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
}
