const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>/?`~';
const charArray = characters.split('');

// Matrix raindrops
const drops = [];
for (let i = 0; i < canvas.width / 10; i++) {
  drops[i] = 1;
}

// Function to draw matrix raindrops
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0';
  ctx.font = '15px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(text, i * 10, drops[i] * 10);
    drops[i]++;

    if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  draw();
}

animate();
