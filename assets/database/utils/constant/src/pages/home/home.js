// home.js
import { getById } from '../../utils/domUtils.js';
import { THEMES, DEFAULT_THEME } from '../../constants/themeConstants.js';
import { setTheme, toggleTheme } from '../../utils/themeUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Set default theme
    setTheme(DEFAULT_THEME);

    // Theme toggle button
    const themeBtn = getById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Example: Welcome message
    const welcome = getById('welcome-message');
    if (welcome) welcome.textContent = 'Welcome to Home Page!';
});
