
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
