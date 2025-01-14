var exclusionElement;
var elementToOverlay;

function resizeStarsContainerTo(element) {
    starsCont = document.getElementById("stars-container");
    height = element.clientHeight * 0.95;
    starsCont.style.height = height + "px";
}

function getElementExclusion(element) {
    rect = element.getBoundingClientRect();
    elementRightEdge = rect.x + rect.width;
    elementLeftEdge = rect.x
    cW = document.body.clientWidth / 100;
    return {
        rightEdge: elementRightEdge / cW,
        leftEdge: elementLeftEdge / cW,
        range: rect.width / cW,
    }
}

function newXPosition(exclusion) {
    return Math.random() * (100 - exclusion.range);
}
function xPercent(xPos, exclusion) {
    if (xPos < exclusion.leftEdge) {
        return `${xPos}%`
    } else if (xPos >= exclusion.leftEdge) {
        return `${xPos + exclusion.range}%`
    }
}


function generateStars(overlayElementID, exclusionElementID) {
    const header = document.getElementById(overlayElementID);
    const starsContainer = document.getElementById('stars-container');
    resizeStarsContainerTo(header);
    const numStars = 100;  // Number of stars in the header
    const logo = document.getElementById(exclusionElementID);
    const exclusion = getElementExclusion(logo);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize star position inside the header
        const xPos = newXPosition(exclusion); // Random position in % of width
        const yPos = Math.random() * 100; // Random position in % of height

        // Randomize star size and animation speed
        const size = Math.random() * 6 + 2; // Random size between 2px and 6px
        const animationDuration = Math.random() * 2 + 2; // Random duration between 2s and 4s

        star.style.left = xPercent(xPos, exclusion);
        star.style.top = `${yPos}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${animationDuration}s`;

        starsContainer.appendChild(star);
    }
}
// window.addEventListener('load', generateStars);
