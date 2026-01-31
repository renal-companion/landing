/* ========================================
   RENAL COMPANION LANDING PAGE
   Main JavaScript - Core Functionality
   ======================================== */

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Navbar scroll behavior
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
});

// Animated number counters
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            // Trigger number animation
            const numbers = entry.target.querySelectorAll('.stat-number');
            numbers.forEach(num => {
                const target = parseInt(num.getAttribute('data-target'));
                if (target && !num.classList.contains('animated')) {
                    num.classList.add('animated');
                    animateNumber(num, target);
                }
            });
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.hero-stats, .solution-card, .problem-card, .stat-card').forEach(el => {
    observer.observe(el);
});

// Particles animation for hero background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = window.innerWidth > 768 ? 50 : 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(16, 165, 165, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 20 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
if (window.innerWidth > 480) {
    createParticles();
}

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
    document.body.appendChild(script);
    script.onload = () => {
        const observer = lozad();
        observer.observe();
    };
}

// Download tracking (optional - analytics)
document.querySelectorAll('a[href*="download"], a[href*=".apk"]').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('Download initiated:', link.href);
        // Add analytics tracking here if needed
        // gtag('event', 'download', { 'event_category': 'APK' });
    });
});

// Console message

// Download Modal Handler
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('downloadModal');
    const downloadBtns = document.querySelectorAll('.download-btn');
    const closeBtn = modal?.querySelector('.modal-close');
    const overlay = modal?.querySelector('.modal-overlay');

    // Show modal when download button is clicked
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal when close button is clicked
    closeBtn?.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when overlay is clicked
    overlay?.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});

console.log('%c✅ Renal Companion - All Systems Active', 'color: #10B981; font-weight: bold; font-size: 14px;');
