var navbarContent = document.getElementById("navbar-content");


document.getElementById("open-button").addEventListener("click", function() {
  if (navbarContent.className === "navbar-content-off") {
    navbarContent.className = "navbar-content";
  }
  else {
    navbarContent.className = "navbar-content-off"
  }
});
