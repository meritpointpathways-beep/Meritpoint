document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  if (!btn || !menu) return;

  // Ensure hidden by default
  menu.classList.add("hidden");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", menu.classList.contains("hidden") ? "false" : "true");
  });
});
