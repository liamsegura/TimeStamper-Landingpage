const fadeElements = document.querySelectorAll('.fade-in-out-item');
const printedTime = document.querySelector('.printed-time');
let uPressed = false;
let timeInterval;

function animate() {
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.display = 'block';
    }, index * 1000); // Delay each item by 1 second
  });

  printedTime.innerHTML = ""; // Reset printed time to empty string

  timeInterval = setInterval(() => {
    printedTime.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, 1000); // Update time every second
}

function resetAnimation() {
  fadeElements.forEach((element) => {
    element.style.display = 'none';
  });
  clearInterval(timeInterval); // Clear the interval for updating the time
}

// Start the initial animation sequence
animate();

// Reset and replay the animation in a loop
setInterval(() => {
  resetAnimation();
  animate();
}, (fadeElements.length + 1) * 1000); // Delay before starting the next animation sequence



const sections = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
