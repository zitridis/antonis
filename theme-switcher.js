function applyTheme(theme) {
  if (theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

document.getElementById('btn-light').addEventListener('click', () => applyTheme('light'));
document.getElementById('btn-dark').addEventListener('click', () => applyTheme('dark'));
document.getElementById('btn-auto').addEventListener('click', () => applyTheme('auto'));

// On page load
const savedTheme = localStorage.getItem('theme') || 'auto';
applyTheme(savedTheme);
