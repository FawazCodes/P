// Pop-up alert for title bar
document.addEventListener("DOMContentLoaded", function() {
  const titleBar = document.querySelector(".title-bar");

  titleBar.addEventListener("click", function() {
    alert("You clicked the title bar!");
  });
});

// Menu interactivity
const menuItems = document.querySelectorAll("#menu ul li");
const content = document.getElementById("content");

menuItems.forEach((item) => {
  item.addEventListener("click", function() {
    const text = this.textContent;
    updateContent(text);
  });
});

function updateContent(menuText) {
  switch (menuText) {
    case "Home":
      content.innerHTML = "<h2>Home</h2><p>Welcome to the home page!</p>";
      break;
    case "About":
      content.innerHTML = "<h2>About</h2><p>This is the about section.</p>";
      break;
    case "Contact":
      content.innerHTML = "<h2>Contact</h2><p>Contact us at: example@example.com</p>";
      break;
    default:
      content.innerHTML = "<h2>Error</h2><p>Page not found.</p>";
  }
}

// Background music (place an audio file in your project folder)
const audio = new Audio('background-music.mp3');
audio.loop = true;
audio.play();

// Boom Button
const boomButton = document.getElementById("boomButton");

boomButton.addEventListener("click", function() {
  alert("BOOM! Business is booming!");
});

/* New Playful Elements */

// Sound Effects
function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}

// Attach sound effects to specific events
document.addEventListener('DOMContentLoaded', function() {
  // Example: Play a sound when a button with the class 'button' is clicked
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      playSound('click-sound.mp3');
    });
  });
});

/* New Loading Bar */

// Loading Bar
document.addEventListener('DOMContentLoaded', function() {
  var loadingBar = document.getElementById('loading-bar');
  var loadingBarContainer = document.getElementById('loading-bar-container');
  var width = 0;
  var loading = setInterval(function() {
    if (width >= 100) {
      clearInterval(loading);
      loadingBarContainer.style.display = 'none';
    } else {
      width += 2;
      loadingBar.style.width = width + '%';
    }
  }, 15);
});

/* New Minesweeper Game */

// Minesweeper Game
function toggleMinesweeper() {
  var container = document.getElementById('minesweeper-container');
  container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Minesweeper game board here
  // For demonstration purposes, we'll just add a simple "Hello, Minesweeper!" text
  var board = document.getElementById('minesweeper-board');
  board.innerHTML = 'Hello, Minesweeper!';
});

/* Browser Compatibility */

// Browser Compatibility Check
document.addEventListener('DOMContentLoaded', function() {
  if (!('loading' in HTMLImageElement.prototype)) {
    alert('Your browser does not support some of the latest features. Consider updating for the best experience.');
  }
});

/* Added Retro Features */

function showBSOD() {
  var bsod = document.getElementById('bsod');
  bsod.style.display = 'block';
  setTimeout(function() {
    bsod.style.display = 'none';
  }, 5000);
}


function randomFreeze() {
  var body = document.querySelector('body');
  body.style.pointerEvents = 'none';
  setTimeout(function() {
    body.style.pointerEvents = 'auto';
  }, 2000);
}
