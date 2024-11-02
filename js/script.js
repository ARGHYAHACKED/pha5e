window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');

    // Keep the loading screen visible for at least 3 seconds
    setTimeout(() => {
        loadingScreen.classList.add('slide-up');
        document.body.style.overflow = 'auto';
    }, 3000);
    
  // Function to create sparkles
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    // Remove the sparkle element after animation ends
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Event listener for mouse movement to create sparkles
document.addEventListener('mousemove', (e) => {
    createSparkle(e.pageX, e.pageY);
});

});
// Select the image boxes and hero text elements
const imageBoxes = document.querySelector('.image-boxes');
const heroText = document.querySelector('.hero-text');

// Add event listeners for mouse enter and leave on the image boxes
imageBoxes.addEventListener('mouseenter', () => {
    heroText.style.opacity = ''; // Hide the hero text
    heroText.style.color = 'black'; // Set text color to black
    heroText.style.webkitTextStroke = '1px white'; // Add white outline effect
});
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-box');

    // Function to move each image to a random position within the viewport
    function randomizePosition(image) {
        const maxWidth = window.innerWidth - image.offsetWidth;
        const maxHeight = window.innerHeight - image.offsetHeight;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        image.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Function to animate images every 2 seconds
    function animateImages() {
        images.forEach(image => {
            if (!image.classList.contains('hovered')) { // Only animate if not hovered
                randomizePosition(image);
                image.style.transition = "transform 2s ease-in-out";
            }
        });
    }

    // Add hover event listeners to each image to pause/resume movement
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.classList.add('hovered'); // Add hovered class to stop movement
            image.style.transition = 'none'; // Remove transition to fix its position
        });

        image.addEventListener('mouseleave', () => {
            image.classList.remove('hovered'); // Remove hovered class to resume movement
        });
    });

    // Run the animation every 2 seconds
    setInterval(animateImages, 2000);
});

