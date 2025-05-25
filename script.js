// script.js

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    // Toggle navigation menu visibility and accessibility
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        nav.classList.toggle("nav-open");
    });

    // Optional: Close nav on outside click
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove("nav-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});
