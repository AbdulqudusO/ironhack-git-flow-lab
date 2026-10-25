console.log("JS is connected! 🚀");

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.dataset.theme !== "dark";

  document.body.dataset.theme = isDark ? "dark" : "light";

  themeToggle.textContent = isDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  themeToggle.setAttribute("aria-pressed", String(isDark));
});
