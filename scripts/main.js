const now = new Date();
let currentHour = now.getHours();
const htmlElement = document.querySelector("html");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlElement.dataset.theme = "dark";
  document.body.classList.remove("default");
  document.body.classList.add("dark");
} else {
  if (currentHour >= 6 && currentHour < 18) {
    htmlElement.dataset.theme = "default";
    document.body.classList.remove("dark");
    document.body.classList.add("default");
  } else {
    htmlElement.dataset.theme = "dark";
    document.body.classList.remove("default");
    document.body.classList.add("dark");
  }
}
function themeToggle() {
  if (htmlElement.dataset.theme === "default") {
    htmlElement.dataset.theme = "dark";
    document.body.classList.remove("default");
    document.body.classList.add("dark");
  } else {
    htmlElement.dataset.theme = "default";
    document.body.classList.remove("dark");
    document.body.classList.add("default");
  }
}

const themeToggleButton = document.getElementById("theme-toggler");
themeToggleButton.addEventListener("click", themeToggle);

const navToggler = document.getElementById("nav-toggler");
const navTogglerIcon = document.getElementById("nav-toggler-icon");
const nav = document.getElementById("menu");

navToggler.addEventListener("click", () => {
  nav.classList.toggle("active");
  navTogglerIcon.classList.toggle("active");
});
