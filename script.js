
// Function to load content based on the menu selection
function loadContent(section) {
  // Hide all existing content sections
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach((element) => {
    element.style.display = 'none';
  });

  // Show the selected content section
  const selectedSection = document.getElementById(section);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }

  // Place random GIFs
  placeRandomGifs();
}

// Function to randomly place GIFs throughout the website
function placeRandomGifs() {
  const availableGifs = ['Rover.gif', 'UC.gif', 'UC2.gif', 'cats.gif', 'giphy.gif', 'loading.gif', 'popo.gif', 'rose.gif', 'w.gif'];
  const contentArea = document.querySelector('.content');

  // Clear any existing random GIFs
  const existingRandomGifs = document.querySelectorAll('.random-gif');
  existingRandomGifs.forEach((element) => {
    element.remove();
  });

  // Place 5 random GIFs
  for (let i = 0; i < 5; i++) {
    const gif = document.createElement('img');
    const randomGifIndex = Math.floor(Math.random() * availableGifs.length); availableGifs.splice(randomGifIndex, 1);
    gif.src = availableGifs[randomGifIndex];
    const randomSize = Math.floor(Math.random() * 100) + 50;
    const randomSkew = Math.floor(Math.random() * 20) - 10;
    gif.style.width = `${randomSize}px`;
    gif.style.transform = `skew(${randomSkew}deg)`;
    gif.classList.add('random-gif');
    const randomTop = Math.floor(Math.random() * (contentArea.offsetHeight - 100));
    const randomLeft = Math.floor(Math.random() * (contentArea.offsetWidth - 100));
    gif.style.position = 'absolute';
    gif.style.top = `${randomTop}px`;
    gif.style.left = `${randomLeft}px`;
    contentArea.appendChild(gif);
  }
}

// Attach function to window load event
window.onload = function() {
  // Show initial content


// Function to play the BSOD.mp4 video when the "About" section is clicked
function playAboutVideo() {
  const videoElement = document.createElement('video');
  videoElement.src = 'BSOD.mp4';
  videoElement.controls = true; videoElement.loop = true; videoElement.requestFullscreen();
  const aboutSection = document.getElementById('about');
  aboutSection.innerHTML = '';
  aboutSection.appendChild(videoElement);
  videoElement.play();
}

  loadContent('home');
};

// Function to make windows draggable
function makeDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Function to create mouse trails
function createMouseTrail() {
  const trail = document.createElement('div');
  trail.className = 'mouse-trail';
  document.body.appendChild(trail);
  let x = 0, y = 0;
  const onMouseMove = (e) => {
    x = e.pageX;
    y = e.pageY;
    trail.style.left = (x - 5) + 'px';
    trail.style.top = (y - 5) + 'px';
  };
  document.addEventListener('mousemove', onMouseMove);
}

// Make content sections draggable
const contentSections = document.querySelectorAll('.content-section');
contentSections.forEach((element) => {
  makeDraggable(element);
});

// Create mouse trail
createMouseTrail();
