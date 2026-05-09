// HANDLE LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => { loader.style.display = "none"; }, 500);
    }, 2000); // 2-second delay for branding
});

// THEME TOGGLE
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeBtn.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
});

// BACK TO TOP VISIBILITY
const goTopBtn = document.getElementById("goTop");
window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

goTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
