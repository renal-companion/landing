/* ========================================
   RENAL COMPANION LANDING PAGE
   Shared Utilities & Helper Functions
   ======================================== */

// Global Notification System
window.showNotification = function (message, type = 'success') {
    // Remove existing notifications if any
    const existing = document.querySelectorAll('.notification');
    existing.forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    // Check if we are in an environment with specific styles (like animations.js used to have)
    // or if we use the default components.css styles.
    // For now, let's use a standard robust styling that works across all pages.

    const isAr = document.documentElement.lang === 'ar';

    notification.innerHTML = `
        <div class="notification-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${message}</span>
        </div>
    `;

    notification.style.cssText = `
        position: fixed; 
        bottom: 24px; 
        ${isAr ? 'left: 24px;' : 'right: 24px;'}
        background: ${type === 'success' ? 'linear-gradient(135deg, #10B981, #059669)' : 'linear-gradient(135deg, #EF4444, #DC2626)'};
        color: white; 
        padding: 16px 24px; 
        border-radius: 12px; 
        z-index: 10000;
        animation: slideInUp 0.3s ease-out; 
        display: flex; 
        align-items: center; 
        gap: 12px; 
        font-weight: 500;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
};

// Copy to Clipboard Utility
window.copyToClipboard = function (text, successMsg = 'Copied to clipboard!') {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            window.showNotification(successMsg);
        }).catch(() => {
            // Fallback
            fallbackCopyToClipboard(text, successMsg);
        });
    } else {
        fallbackCopyToClipboard(text, successMsg);
    }
};

function fallbackCopyToClipboard(text, successMsg) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        window.showNotification(successMsg);
    } catch (err) {
        window.showNotification('Failed to copy. Please copy manually.', 'error');
    }

    document.body.removeChild(textArea);
}

// Check for mobile
window.isMobile = function () {
    return window.innerWidth <= 768;
};

console.log('%c🛠️ Renal Companion Utilities Loaded', 'color: #A78BFA; font-weight: bold;');
