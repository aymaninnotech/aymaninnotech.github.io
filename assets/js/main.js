// GLOBAL LOADER CONTROL
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const MIN_TIME = 2600; 
  const startTime = performance.now();

  const hideLoader = () => {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  };

  const elapsed = performance.now() - startTime;
  if (elapsed >= MIN_TIME) {
    hideLoader();
  } else {
    setTimeout(hideLoader, MIN_TIME - elapsed);
  }
});

// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
};

// GO TO TOP & SCROLL SENSE
const goTopBtn = document.getElementById("goTop");
window.onscroll = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
};

goTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
