document.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    document.querySelector("aside").classList.toggle("is-out");
  });

  document.getElementById("popupImg").addEventListener("click", function () {
    document.getElementById("sectionpopup").style.display = "flex";
    document.getElementById("body").style.overflowY = "hidden";
  });

  document.getElementById("close").addEventListener("click", function () {
    document.getElementById("sectionpopup").style.display = "none";
    document.getElementById("body").style.overflowY = "scroll";
  });
});
