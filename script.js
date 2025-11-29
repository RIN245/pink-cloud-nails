// Example JS: Add click effect to hero buttons
document.querySelectorAll('.hero-buttons a').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you! Booking section coming soon.');
    });
});
const images = document.querySelectorAll('.floating');

function randomPosition(img) {
  const hero = document.getElementById('hero');
  const maxX = hero.clientWidth - img.clientWidth;
  const maxY = hero.clientHeight - img.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  img.style.transform = `translate(${x}px, ${y}px)`;
}

// Move each image every 3 seconds
setInterval(() => {
  images.forEach(img => randomPosition(img));
}, 3000);

// Initial position
images.forEach(img => randomPosition(img));
