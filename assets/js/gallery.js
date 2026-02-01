/* ========================================
   RENAL COMPANION - GALLERY PAGE
   Interactive carousel and animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    initializeScrollAnimations();
});

/* ========================================
   CAROUSEL FUNCTIONALITY
   ======================================== */

function initializeCarousels() {
    const carousels = document.querySelectorAll('.screenshot-carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const cards = carousel.querySelectorAll('.screenshot-card');
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');

        if (!track || cards.length === 0) return;

        let currentIndex = 0;
        const totalCards = cards.length;

        // Set explicit widths to prevent shrinking or incorrect sizing
        track.style.width = `${totalCards * 100}%`;
        cards.forEach(card => {
            card.style.flex = `0 0 ${100 / totalCards}%`;
            card.style.width = `${100 / totalCards}%`;
        });

        let autoPlayInterval;

        // Update carousel position
        function updateCarousel(animate = true) {
            const isRTL = document.documentElement.dir === 'rtl';
            const cardWidth = 100 / totalCards;
            const offset = currentIndex * cardWidth;

            track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
            // In modern browsers, RTL flex starts at the right, but transform is still coordinate-based.
            // Using a simpler translateX based on percentage of the track.
            track.style.transform = `translateX(${isRTL ? offset : -offset}%)`;

            // Update button states
            if (prevBtn && nextBtn) {
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex === totalCards - 1;
            }
        }

        // Navigate to specific index
        function goToSlide(index) {
            currentIndex = Math.max(0, Math.min(index, totalCards - 1));
            updateCarousel();
            resetAutoPlay();
        }

        // Previous slide
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
            });
        }

        // Next slide
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
            });
        }

        // Auto-play functionality
        function startAutoPlay() {
            if (totalCards <= 1) return;

            autoPlayInterval = setInterval(() => {
                if (currentIndex < totalCards - 1) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(0);
                }
            }, 5000); // Change slide every 5 seconds
        }

        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }

        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        // Pause auto-play on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                goToSlide(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                goToSlide(currentIndex + 1);
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    goToSlide(currentIndex + 1);
                } else {
                    // Swipe right - previous slide
                    goToSlide(currentIndex - 1);
                }
            }
        }

        // Initialize
        updateCarousel(false);
        startAutoPlay();

        // Image click to view full size (optional enhancement)
        cards.forEach(card => {
            const img = card.querySelector('img');
            if (img) {
                img.addEventListener('click', () => {
                    // Could implement lightbox here
                    // For now, just stop auto-play when user interacts
                    stopAutoPlay();
                });
            }
        });
    });
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */

function initializeScrollAnimations() {
    // We leverage the 'reveal-on-scroll' system from main.js/animations.js for consistency
    const categories = document.querySelectorAll('.feature-category');
    categories.forEach(category => {
        category.classList.add('reveal-on-scroll');
    });
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Smooth scroll to section (if needed)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Export for potential external use
window.galleryUtils = {
    scrollToSection
};

console.log('%c📸 Gallery Page - Interactive Carousels Active', 'color: #10A5A5; font-weight: bold; font-size: 14px;');
