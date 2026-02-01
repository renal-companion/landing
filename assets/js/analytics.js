/**
 * Google Analytics 4 (GA4) Loader
 * ===============================
 * This script centrally manages the Google Analytics integration.
 * It dynamically injects the tracking snippet into the page.
 * 
 * INSTRUCTIONS:
 * Replace 'G-XXXXXXXXXX' with your actual Measurement ID from the Google Analytics dashboard.
 */

(function () {
    // ----------------------------------------
    // TODO: Replace with your actual GA4 ID
    // ----------------------------------------
    const GA_MEASUREMENT_ID = 'G-VPXMTT3V9N';
    // ----------------------------------------

    // Prevent duplicate injection
    if (document.getElementById('ga-script')) return;

    // 1. Inject the Google Tag Manager script
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.prepend(script);

    // 2. Initialize the dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag; // Expose to global scope for event tracking

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'anonymize_ip': true,   // Privacy-centric default
        'send_page_view': true
    });

    console.log(`Research Analytics initialized with ID: ${GA_MEASUREMENT_ID}`);
})();
