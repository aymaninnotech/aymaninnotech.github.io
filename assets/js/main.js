/**
 * AYMAN InnoTech - Main JavaScript
 * Author: Ayman Ullah
 * Year: 2026
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. SELECT ELEMENTS
    const loader = document.getElementById("loader");
    const themeToggle = document.getElementById("themeToggle");
    const goTopBtn = document.getElementById("goTop");
    const body = document.body;

    // 2. ENHANCED LOADER LOGIC
    // Ensures the neon animation plays smoothly before revealing content
    window.addEventListener("load", () => {
        setTimeout(() => {
            if (loader) {
                loader.classList.add("loader-hidden");
                // Allow CSS transition to finish before removing from display
                setTimeout(() => {
                    loader.style.display = "none";
                }, 600);
            }
        }, 2500); // 2.5s duration for brand visibility
    });

    // 3. THEME MANAGEMENT (Light/Dark Mode)
    // Check for saved user preference in localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            if (body.classList.contains("dark")) {
                body.classList.replace("dark", "light");
                localStorage.setItem("theme", "light");
                updateThemeIcon("light");
            } else {
                body.classList.replace("light", "dark");
                localStorage.setItem("theme", "dark");
                updateThemeIcon("dark");
            }
        });
    }

    function updateThemeIcon(theme) {
        if (themeToggle) {
            themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
        }
    }

    // 4. SMART GO-TO-TOP BUTTON
    window.addEventListener("scroll", () => {
        // Show button after scrolling down 400px
        if (window.scrollY > 400) {
            goTopBtn.style.display = "flex";
            setTimeout(() => { goTopBtn.style.opacity = "1"; }, 10);
        } else {
            goTopBtn.style.opacity = "0";
            setTimeout(() => { 
                if (window.scrollY <= 400) goTopBtn.style.display = "none"; 
            }, 300);
        }
    });

    if (goTopBtn) {
        goTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 5. ACCESSIBILITY: SEARCH BAR SHORTCUT
    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"]');
            if (searchInput) searchInput.focus();
        }
    });
});
