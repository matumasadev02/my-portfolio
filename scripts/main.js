const now = new Date();
const currentHour = now.getHours() + 1;
const htmlElement = document.querySelector("html");

// auto theme
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

// theme toggler
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

// navigation
const navToggler = document.getElementById("nav-toggler");
const navTogglerIcon = document.getElementById("nav-toggler-icon");
const nav = document.getElementById("menu");

navToggler.addEventListener("click", () => {
  nav.classList.toggle("active");
  navTogglerIcon.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navTogglerIcon.classList.remove('active');
  });
});