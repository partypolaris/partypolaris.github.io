var exclusionElement;
var elementToOverlay;

function resizeStarsContainerTo(starsContainerID, element) {
    starsCont = document.getElementById(starsContainerID);
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


function generateStars(starsContainerID, overlayElementID, exclusionElementID, numStars) {
    const header = document.getElementById(overlayElementID);
    const starsContainer = document.getElementById(starsContainerID);
    resizeStarsContainerTo(starsContainerID, header);
    if (numStars == null) {
        numStars = 100;
    }
    // const numStars = 100;  // Number of stars in the header
    var exclusion;
    if (exclusionElementID != null) {
        const logo = document.getElementById(exclusionElementID);
        exclusion = getElementExclusion(logo);
    } else {
        exclusion = {rightEdge: 0, leftEdge: 0, range: 0};
    }

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize star position inside the header
        const xPos = newXPosition(exclusion); // Random position in % of width
        const yPos = Math.random() * 100; // Random position in % of height

        // Randomize star size and animation speed
        // lower bound: 1.5vh. Upper bound: 4vh
        const size = (Math.random() * 2.5 + 1.5)/10; // Random size between 0.15vh and 0.4vh
        const animationDuration = Math.random() * 2 + 2; // Random duration between 2s and 4s

        star.style.left = xPercent(xPos, exclusion);
        star.style.top = `${yPos}%`;
        star.style.width = `${size}vh`;
        star.style.height = `${size}vh`;
        star.style.animationDuration = `${animationDuration}s`;

        starsContainer.appendChild(star);
    }
}
// window.addEventListener('load', generateStars);
