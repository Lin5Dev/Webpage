const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});

function updateText(text) {
    document.getElementById('hoverText').textContent = text;
}

document.querySelector('.image-container').addEventListener('mouseleave', () => {
    document.querySelectorAll('.hover-img').forEach(img => {
      img.classList.remove('dimmed');
    });
    document.getElementById('hoverText').textContent = "Hover over an image to see the description here.";
});
  
function highlightImage(hoveredImg, text) {
    // Update the description
    document.getElementById('hoverText').textContent = text;

    // Get all images with class 'hover-img'
    const allImages = document.querySelectorAll('.hover-img');

    allImages.forEach(img => {
      if (img === hoveredImg) {
        img.classList.remove('dimmed');
      } else {
        img.classList.add('dimmed');
      }
    });
}
  