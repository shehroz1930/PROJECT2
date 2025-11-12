// domUtils.js
export function getById(id) {
    return document.getElementById(id);
}

export function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    Object.keys(options).forEach(key => {
        if(key === 'class') element.className = options[key];
        else if(key === 'text') element.textContent = options[key];
        else element.setAttribute(key, options[key]);
    });
    return element;
}
