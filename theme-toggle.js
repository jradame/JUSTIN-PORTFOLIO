class ThemeToggle {
  constructor() {
    this.button = document.getElementById('theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    if (!this.button) {
      console.error('Theme toggle button not found');
      return;
    }
    
    this.init();
  }
  
  init() {
    // Set initial theme
    this.applyTheme(this.currentTheme);
    
    // Add event listener
    this.button.addEventListener('click', () => this.toggleTheme());
  }
  
  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.button.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      document.documentElement.removeAttribute('data-theme');
      this.button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});

