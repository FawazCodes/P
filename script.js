
// Function to load content based on menu selection
function loadContent(section) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach((element) => {
    element.style.display = 'none';
  });

  // Show the selected content section
  placeRandomGifs();
  document.getElementById(section).style.display = 'block';
}

// Function to show Blue Screen of Death (BSOD) as a pop-up
function showBSOD() {
  alert('Blue Screen of Death! Just kidding.');
}

// Function to make the website "freeze"
function freezeWebsite() {
  // Code to make the website unresponsive for a few seconds can be added here
}

// Loading Bar
window.onload = function() {
  placeRandomGifs();
  // Code to simulate a loading bar can be added here
};

// Function to randomly place GIFs throughout the website
function placeRandomGifs() {
  // List of available GIFs
  const availableGifs = ['Rover.gif', 'UC.gif', 'UC2.gif', 'cats.gif', 'giphy.gif', 'loading.gif', 'popo.gif', 'rose.gif', 'w.gif'];

  // Get the content area where GIFs will be placed
  const contentArea = document.querySelector('.content');

  // Clear any existing random GIFs
  const existingRandomGifs = document.querySelectorAll('.random-gif');
  existingRandomGifs.forEach((element) => {
    element.remove();
  });

  // Place 5 random GIFs
  for (let i = 0; i < 5; i++) {
    // Create a new image element for the GIF
    const gif = document.createElement('img');

    // Assign a random GIF from the list
    const randomGifIndex = Math.floor(Math.random() * availableGifs.length);
    gif.src = availableGifs[randomGifIndex];

    // Apply random styles
    const randomSize = Math.floor(Math.random() * 100) + 50;
    const randomSkew = Math.floor(Math.random() * 20) - 10;
    gif.style.width = `${randomSize}px`;
    gif.style.transform = `skew(${randomSkew}deg)`;

    // Add class for identification
    gif.classList.add('random-gif');

    // Place the GIF at a random position within the content area
    const randomTop = Math.floor(Math.random() * (contentArea.offsetHeight - 100));
    const randomLeft = Math.floor(Math.random() * (contentArea.offsetWidth - 100));
    gif.style.position = 'absolute';
    gif.style.top = `${randomTop}px`;
    gif.style.left = `${randomLeft}px`;

    // Append the GIF to the content area
    contentArea.appendChild(gif);
  }
}

// Function to display BSOD.mp4 video in the "About" section
function displayVideo() {
  // Get the "About" content section
  const aboutSection = document.getElementById('about');

  // Clear existing content
  aboutSection.innerHTML = '';

  // Create a new video element
  const video = document.createElement('video');

  // Set video attributes
  video.src = 'BSOD.mp4';
  video.controls = true;
  video.autoplay = true;

  // Append the video to the "About" section
  aboutSection.appendChild(video);
}
