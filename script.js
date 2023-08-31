document.addEventListener("DOMContentLoaded", function() {
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
});
