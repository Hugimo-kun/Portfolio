
    // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
    // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
  function toggleAside() {
    var x = document.getElementById("aside");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }