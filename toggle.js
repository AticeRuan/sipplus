const toggleButton = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".toggle");

toggleButton.addEventListener("click", function () {
  navbar.classList.toggle("live");
  console.log("testing");
});
