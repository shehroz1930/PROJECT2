// about.js
import { getById } from '../../utils/domUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    const aboutInfo = getById('about-info');
    if (aboutInfo) {
        aboutInfo.textContent = 'This is the About Page of our project.';
    }
});

