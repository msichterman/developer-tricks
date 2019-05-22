var navbarContent = document.getElementById("navbar-content");

document.getElementById("open-button").addEventListener("click", function() {
  if (navbarContent.className === "navbar-content-off") {
    navbarContent.className = "navbar-content";
  } else {
    navbarContent.className = "navbar-content-off";
  }
});

$(document).ready(function() {
  // NAVIGATION --------------------------//
  // Introduction Link
  $("#introduction-link").click(function(e) {
    e.preventDefault();
    navbarContent.className = "navbar-content-off";
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    });
  });

  // HTML Tricks Link
  $("#html-tricks-link").click(function(e) {
    e.preventDefault();
    navbarContent.className = "navbar-content-off";
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    });
  });

  // CSS Tricks Link
  $("#css-tricks-link").click(function(e) {
    e.preventDefault();
    navbarContent.className = "navbar-content-off";
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    });
  });

  // JavaScript Tricks Link
  $("#javascript-tricks-link").click(function(e) {
    e.preventDefault();
    navbarContent.className = "navbar-content-off";
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    });
  });

  // Git Tricks Link
  $("#git-tricks-link").click(function(e) {
    e.preventDefault();
    navbarContent.className = "navbar-content-off";
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    });
  });

  // Other Projects Link
  $("#other-projects-link").click(function(e) {
    e.preventDefault();
    navbarContent.className = "navbar-content-off";
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    });
  });
});
