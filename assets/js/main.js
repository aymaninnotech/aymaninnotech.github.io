// 1. Loading Screen Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 2500); // 3-cycle animation feel
});

// 2. Anti-Copy & Source Code Protection
document.addEventListener('keydown', (e) => {
    // Block F12, Ctrl+Shift+I, Ctrl+U (View Source)
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.keyCode == 85)) {
        e.preventDefault();
        alert("Security: Content Protection Active.");
        return false;
    }
});

// 3. Floating Button Scroll to Top
const topBtn = document.getElementById('go-to-top');
window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 4. Dark/Light Mode Toggle
function toggleTheme() {
    const body = document.documentElement;
    const current = body.getAttribute('data-theme');
    body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

// Attach to accessibility button
document.getElementById('accessibility-btn').onclick = toggleTheme;
