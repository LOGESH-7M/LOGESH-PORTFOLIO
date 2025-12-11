const toggleBtn = document.querySelector("#themeToggle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  // Change icon
  this.textContent = this.textContent === "🌙" ? "☀️" : "🌙";
});
