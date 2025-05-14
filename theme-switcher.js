function applyTheme(theme) {
  if (theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Attach event listeners to all buttons with these classes
document.querySelectorAll('.js-set-theme-light').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    applyTheme('light');
  });
});

document.querySelectorAll('.js-set-theme-dark').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    applyTheme('dark');
  });
});

document.querySelectorAll('.js-set-theme-auto').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    applyTheme('auto');
  });
});

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'auto';
applyTheme(savedTheme);

