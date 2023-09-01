
// Function to load content based on menu selection
function loadContent(section) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach((element) => {
    element.style.display = 'none';
  });

  // Show the selected content section
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
  // Code to simulate a loading bar can be added here
};



// Function to randomly place GIFs throughout the website
function placeRandomGifs() {
  // List of GIFs to be randomly placed
  const gifs = ['Rover.gif', 'w.gif', 'giphy.gif', 'cats.gif', 'popo.gif', 'UC.gif', 'UC2.gif', 'rose.gif', 'loading.gif'];

  // Clear existing GIFs (except the visitor number GIF)
  const existingGifs = document.querySelectorAll('.random-gif');
  existingGifs.forEach((element) => {
    element.remove();
  });

  // Get all content sections
  const contentSections = document.querySelectorAll('.content-section');

  // Loop through each GIF and place it randomly
  gifs.forEach((gif) => {
    // Choose a random content section
    const randomSection = contentSections[Math.floor(Math.random() * contentSections.length)];

    // Create a new image element for the GIF
    const img = document.createElement('img');
    img.src = gif;
    img.className = 'random-gif';

    // Apply random styles (size, skew)
    const randomSize = Math.floor(Math.random() * 200) + 50;
    const randomSkewX = Math.floor(Math.random() * 20) - 10;
    const randomSkewY = Math.floor(Math.random() * 20) - 10;
    img.style.width = randomSize + 'px';
    img.style.height = randomSize + 'px';
    img.style.transform = `skew(${randomSkewX}deg, ${randomSkewY}deg)`;

    // Append the GIF to the random content section
    randomSection.appendChild(img);
  });
}
