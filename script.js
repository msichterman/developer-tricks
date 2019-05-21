var navbarContent = document.getElementById("navbar-content");


document.getElementById("open-button").addEventListener("click", function() {
  if (navbarContent.className === "navbar-content-off") {
    navbarContent.className = "navbar-content";
  }
  else {
    navbarContent.className = "navbar-content-off"
  }
});

$(document).ready(function() {
  // NAVIGATION --------------------------//
  // Introduction Link
  $("nav")
    .find("#introduction-link")
    .click(function(e) {
      e.preventDefault();
      navbarContent.className = "navbar-content-off";
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
    });

  // HTML Tricks Link
  $("nav")
    .find("#html-tricks-link")
    .click(function(e) {
      e.preventDefault();
      navbarContent.className = "navbar-content-off";
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
    });

  // CSS Tricks Link
  $("nav")
    .find("#css-tricks-link")
    .click(function(e) {
      e.preventDefault();
      navbarContent.className = "navbar-content-off";
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
    });

  // JavaScript Tricks Link
  $("nav")
    .find("#javascript-tricks-link")
    .click(function(e) {
      e.preventDefault();
      navbarContent.className = "navbar-content-off";
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
    });
  
  // Git Tricks Link
  $("nav")
    .find("#git-tricks-link")
    .click(function(e) {
      e.preventDefault();
      navbarContent.className = "navbar-content-off";
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
    });

  // Other Projects Link
  $("nav")
    .find("#other-projects-link")
    .click(function(e) {
      e.preventDefault();
      navbarContent.className = "navbar-content-off";
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(document).height() - $(window).height()
      });
    });
  });
