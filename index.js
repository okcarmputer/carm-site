const images = ['background4.jpg', 'background5.jpg', 'background7.jpg', 'background8.jpg'];

function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  document.getElementById('background-image').style.backgroundImage = `url('${randomImage}')`;
}

window.onload = setRandomBackground;
