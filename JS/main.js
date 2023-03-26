let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "IMG/dark.svg";
  } else {
    this.firstElementChild.src = "IMG/light.svg";
  }
  document.body.classList.toggle("light");
});