//Variables
const contactBtn = document.querySelector('.btn');

// Modal functionality
const modal = document.getElementById('projects-modal');
const backdrop = document.getElementById('modal-backdrop');
const menuIcon = document.getElementById('menu-icon');
const closeBtn = document.querySelector('.close');

menuIcon.addEventListener('click', function() {
  modal.classList.add('show');
  backdrop.classList.add('show');
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove('show');
  backdrop.classList.remove('show');
});

backdrop.addEventListener('click', function() {
  modal.classList.remove('show');
  backdrop.classList.remove('show');
});

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
