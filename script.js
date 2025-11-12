// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const quoteForm = document.getElementById('quoteForm');
const quoteResult = document.getElementById('quoteResult');
const quoteAmount = document.getElementById('quoteAmount');
const contactForm = document.getElementById('contactForm');

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close mobile menu if it's actually open
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Dropdown menu functionality
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Debug: Check if elements are found
console.log('Dropdown elements found:', {
    dropdown: !!dropdown,
    dropdownToggle: !!dropdownToggle,
    dropdownMenu: !!dropdownMenu
});

// Initialize dropdown state
if (dropdownMenu) {
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.visibility = 'hidden';
    dropdownMenu.style.transform = 'translateY(-10px)';
    
    // Initialize mobile dropdown state
    if (window.innerWidth <= 768) {
        dropdownMenu.classList.remove('active');
        console.log('Mobile dropdown initialized - removed active class');
    }
    
    console.log('Dropdown menu initial state:', {
        classes: dropdownMenu.className,
        opacity: dropdownMenu.style.opacity,
        visibility: dropdownMenu.style.visibility,
        maxHeight: window.getComputedStyle(dropdownMenu).maxHeight
    });
}

// Handle dropdown hover for desktop
if (dropdown) {
    let hoverTimeout;
    
    dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            clearTimeout(hoverTimeout);
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        }
    });

    dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            hoverTimeout = setTimeout(() => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }, 150); // Small delay to prevent flickering
        }
    });
}

// Handle dropdown click for mobile
if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
        console.log('Dropdown toggle clicked, window width:', window.innerWidth);
        console.log('Current dropdown classes:', dropdownMenu ? dropdownMenu.className : 'No dropdown menu');
        
        // Check if we're in mobile view
        const isMobile = window.innerWidth <= 768;
        console.log('Is mobile:', isMobile);
        
        if (isMobile) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile dropdown clicked, toggling active class');
            
            if (dropdownMenu) {
                const isActive = dropdownMenu.classList.contains('active');
                console.log('Dropdown is currently active:', isActive);
                
                dropdownMenu.classList.toggle('active');
                
                console.log('Dropdown menu classes after toggle:', dropdownMenu.className);
                console.log('Dropdown menu max-height:', window.getComputedStyle(dropdownMenu).maxHeight);
                console.log('Dropdown menu display:', window.getComputedStyle(dropdownMenu).display);
                console.log('Dropdown menu visibility:', window.getComputedStyle(dropdownMenu).visibility);
                console.log('Dropdown menu opacity:', window.getComputedStyle(dropdownMenu).opacity);
            } else {
                console.error('Dropdown menu element not found!');
            }
        }
    });
    
    // Additional mobile touch handler
    dropdownToggle.addEventListener('touchstart', (e) => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            console.log('Mobile dropdown touchstart');
            e.preventDefault();
        }
    });
}

// Additional mobile dropdown handler for better reliability
if (dropdownToggle && dropdownMenu) {
    // Force mobile dropdown to work on touch devices
    dropdownToggle.addEventListener('touchend', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile dropdown touchend - forcing toggle');
            dropdownMenu.classList.toggle('active');
        }
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (dropdown && !dropdown.contains(e.target)) {
        const isMobile = window.innerWidth <= 768;
        
        if (!isMobile) {
            // Desktop behavior
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(-10px)';
        } else {
            // Mobile behavior - only close if currently open
            if (dropdownMenu && dropdownMenu.classList.contains('active')) {
                console.log('Closing mobile dropdown - clicked outside');
                dropdownMenu.classList.remove('active');
            }
        }
    }
});

// Function to initialize mobile dropdown state
function initializeMobileDropdown() {
    if (dropdownMenu) {
        if (window.innerWidth <= 768) {
            // Mobile state
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'none';
            dropdownMenu.classList.remove('active');
            console.log('Mobile dropdown state initialized');
        } else {
            // Desktop state
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(-10px)';
            dropdownMenu.classList.remove('active');
            console.log('Desktop dropdown state initialized');
        }
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    initializeMobileDropdown();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileDropdown();
    
    // Additional mobile dropdown initialization
    if (dropdownMenu && window.innerWidth <= 768) {
        console.log('Force initializing mobile dropdown state');
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.transform = 'none';
        dropdownMenu.classList.remove('active');
        console.log('Mobile dropdown force initialized');
    }
});

// Smooth scrolling for navigation links (only for anchor links)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        console.log('Navigation link clicked:', href);
        
        // Only prevent default for anchor links (starting with #)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } else {
            console.log('Allowing navigation to:', href);
        }
        // For HTML page links, let the browser handle navigation normally
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Quote Form Handling
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Quote form submitted');
        
        // Get form data
        const formData = {
            make: document.getElementById('make').value,
            model: document.getElementById('model').value,
            year: parseInt(document.getElementById('year').value),
            mileage: parseInt(document.getElementById('mileage').value),
            condition: document.getElementById('condition').value,
            location: document.getElementById('location').value,
            contact: document.getElementById('contact').value
        };
        
        console.log('Form data:', formData);
        
        // Show loading state
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Processing...';
        submitBtn.disabled = true;
        
        // Calculate quote
        const quote = calculateQuote(formData);
        console.log('Calculated quote:', quote);
        
        // Display quote after a short delay to show loading state
        setTimeout(() => {
            displayQuote(quote);
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Quote Calculation Logic
function calculateQuote(data) {
    let basePrice = 0;
    
    // Base price by make (simplified)
    const makePrices = {
        'toyota': 8000,
        'honda': 7500,
        'ford': 7000,
        'nissan': 6500,
        'mazda': 7200,
        'subaru': 7800,
        'mitsubishi': 6000,
        'other': 5000
    };
    
    basePrice = makePrices[data.make] || 5000;
    
    // Year adjustment
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - parseInt(data.year);
    const yearMultiplier = Math.max(0.3, 1 - (carAge * 0.08));
    basePrice *= yearMultiplier;
    
    // Mileage adjustment
    const mileage = parseInt(data.mileage);
    let mileageMultiplier = 1;
    if (mileage > 200000) mileageMultiplier = 0.4;
    else if (mileage > 150000) mileageMultiplier = 0.6;
    else if (mileage > 100000) mileageMultiplier = 0.8;
    else if (mileage > 50000) mileageMultiplier = 0.9;
    
    basePrice *= mileageMultiplier;
    
    // Condition adjustment
    const conditionMultipliers = {
        'excellent': 1.0,
        'good': 0.8,
        'fair': 0.6,
        'poor': 0.4,
        'not-running': 0.2
    };
    
    basePrice *= conditionMultipliers[data.condition] || 0.5;
    
    // Add some randomness for realism
    const randomFactor = 0.8 + Math.random() * 0.4; // 80% to 120%
    basePrice *= randomFactor;
    
    return Math.round(basePrice);
}

// Display Quote Result
function displayQuote(amount) {
    if (quoteResult && quoteAmount) {
        quoteResult.style.display = 'block';
        quoteAmount.textContent = `$${amount.toLocaleString()}`;
        
        // Add animation
        quoteResult.classList.add('fade-in');
        setTimeout(() => {
            quoteResult.classList.add('visible');
        }, 100);
        
        // Scroll to quote result
        quoteResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Reset Quote Function
function resetQuote() {
    if (quoteForm) {
        quoteForm.reset();
    }
    if (quoteResult) {
        quoteResult.style.display = 'none';
        quoteResult.classList.remove('fade-in', 'visible');
    }
    
    // Scroll to quote section
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Contact Form Handling - Removed to avoid conflict with EmailJS
// EmailJS handling is now in individual HTML files

// Show Message Function
function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert message before the form
    contactForm.parentNode.insertBefore(message, contactForm);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Contact Us Function (called from quote result)
function contactUs() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .step, .about-feature, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = counter.textContent;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    return isValid;
}

// Add real-time validation
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    input.addEventListener('input', () => {
        if (input.value.trim()) {
            input.style.borderColor = '#10b981';
        }
    });
});

// Phone number formatting
document.getElementById('contact').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    }
    e.target.value = value;
});

// Quote form phone formatting
document.getElementById('contact').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    }
    e.target.value = value;
});

// Lazy loading for images (if any are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add smooth reveal animation to hero elements
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .hero-features');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
});

// Add click tracking for analytics (placeholder)
function trackEvent(eventName, eventData) {
    // This would integrate with Google Analytics or other tracking services
    console.log('Event tracked:', eventName, eventData);
}

// Track quote form submissions
quoteForm.addEventListener('submit', () => {
    trackEvent('quote_form_submitted', {
        form_type: 'quote',
        timestamp: new Date().toISOString()
    });
});

// Track contact form submissions - Moved to individual HTML files with EmailJS

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('button_clicked', {
            button_text: e.target.textContent.trim(),
            button_class: e.target.className,
            timestamp: new Date().toISOString()
        });
    });
});

// Reset quote function
function resetQuote() {
    const quoteForm = document.getElementById('quoteForm');
    const quoteResult = document.getElementById('quoteResult');
    
    if (quoteForm) {
        quoteForm.reset();
    }
    
    if (quoteResult) {
        quoteResult.style.display = 'none';
    }
    
    // Scroll to quote section
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
        quoteSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Header scroll effect
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    focusableElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = '2px solid #2563eb';
            el.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', () => {
            el.style.outline = 'none';
        });
    });
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');
    
    if (contactForm) {
        // Check for success parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            showSuccessMessage();
        }
        
        // Set the reply-to field to the user's email when form loads
        const emailField = document.getElementById('email');
        const replyToField = contactForm.querySelector('input[name="_replyto"]');
        if (emailField && replyToField) {
            emailField.addEventListener('input', function() {
                replyToField.value = emailField.value;
            });
        }
    }
    
    function showSuccessMessage() {
        if (successMessage) {
            successMessage.style.display = 'flex';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    function showErrorMessage() {
        if (errorMessage) {
            errorMessage.style.display = 'flex';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    function hideMessages() {
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
    }
});
// Modal Handling
const authModal = document.getElementById('authModal');
const openLogin = document.getElementById('openLogin');
const openSignup = document.getElementById('openSignup');
const closeModal = document.querySelector('.modal .close');

const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');

const switchToSignup = document.getElementById('switchToSignup');
const switchToSignin = document.getElementById('switchToSignin');

// Open Sign In
openLogin.addEventListener('click', () => {
    authModal.style.display = 'block';
    signinForm.style.display = 'flex';
    signupForm.style.display = 'none';
});

// Open Sign Up
openSignup.addEventListener('click', () => {
    authModal.style.display = 'block';
    signupForm.style.display = 'flex';
    signinForm.style.display = 'none';
});

// Close modal
closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

// Switch forms
switchToSignup.addEventListener('click', () => {
    signinForm.style.display = 'none';
    signupForm.style.display = 'flex';
});

switchToSignin.addEventListener('click', () => {
    signupForm.style.display = 'none';
    signinForm.style.display = 'flex';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if(e.target === authModal){
        authModal.style.display = 'none';
    }
});
