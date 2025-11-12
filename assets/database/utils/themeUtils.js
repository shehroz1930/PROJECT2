// themeUtils.js
export function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}
