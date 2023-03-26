let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "IMG/dark.svg";
  } else {
    this.firstElementChild.src = "IMG/light.svg";
  }
  document.body.classList.toggle("light");
});

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);