//Variables
const contactBtn = document.querySelector('.btn');

// Theme switching
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.querySelector('.theme-icon');
let currentThemeIndex = 0;
const themes = ['default', 'forest', 'galaxy'];
const icons = ['storm-svgrepo-com.svg', 'tree-svgrepo-com.svg', 'stars-svgrepo-com.svg'];

themeBtn.addEventListener('click', function() {
  currentThemeIndex = currentThemeIndex + 1;
  if (currentThemeIndex >= themes.length) {
    currentThemeIndex = 0;
  }
  const currentTheme = themes[currentThemeIndex];
  if (currentTheme === 'default') {
    document.body.removeAttribute('data-theme');
  } else {
    document.body.setAttribute('data-theme', currentTheme);
  }
  themeIcon.src = icons[currentThemeIndex];
});
