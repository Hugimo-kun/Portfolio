  // Look for .hamburger
var hamburger = document.querySelector(".hamburger");
  // On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});
function toggleAside() {
document.querySelector("aside").classList.toggle("is-out")
}

document.getElementById('popupImg').addEventListener('click', function() {
  document.getElementById('sectionpopup').style.display = 'flex';
  document.getElementById('body').style.overflowY = 'hidden';
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('sectionpopup').style.display = 'none';
  document.getElementById('body').style.overflowY = 'scroll';
});