/* ========================================
   RENAL COMPANION LANDING PAGE
   Advanced Animations & Interactions
   ======================================== */

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeScrollReveal();
    initializeCodeHighlighting();
    initializeDownloadButton();
    initializeParallax();
    initialize3DCards();
});

// Advanced Scroll Reveal with Intersection Observer
function initializeScrollReveal() {
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');

                // Trigger specific animations based on element type
                if (entry.target.classList.contains('tech-card')) {
                    animateTechCard(entry.target);
                } else if (entry.target.classList.contains('validation-card')) {
                    animateValidationCard(entry.target);
                } else if (entry.target.classList.contains('arch-layer')) {
                    animateArchLayer(entry.target);
                } else if (entry.target.id === 'challenge') {
                    animateClinicalStats();
                } else if (entry.target.id === 'murshid-ai') {
                    animateMurshidChat();
                } else if (entry.target.id === 'nutrition') {
                    animateFoodSearch();
                } else if (entry.target.id === 'clinical') {
                    animateInferenceDiagram();
                } else if (entry.target.id === 'visual-recognition') {
                    animateVisualRecognition();
                } else if (entry.target.id === 'scanner') {
                    enhanceScannerAnimation();
                } else if (entry.target.id === 'analytics') {
                    animateChart();
                }
            }
        });
    }, revealOptions);

    // Observe all animated elements
    document.querySelectorAll('.reveal-on-scroll, .tech-card, .validation-card, .arch-layer, .research-item, .download-card').forEach(el => {
        revealObserver.observe(el);
    });
}

function animateTechCard(element) {
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

function animateValidationCard(element) {
    element.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
}

function animateArchLayer(element) {
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    element.style.opacity = '1';
    element.style.transform = 'translateX(0)';
}

// Code Syntax Highlighting (Simple version)
function initializeCodeHighlighting() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Apply basic syntax highlighting
        let code = block.textContent;

        // Highlight keywords
        code = code.replace(/\b(static|double|required|int|bool|final|return|if|else|pow)\b/g, '<span style="color: #F97316;">$1</span>');

        // Highlight function names
        code = code.replace(/(\w+)\(/g, '<span style="color: #10B981;">$1</span>(');

        // Highlight numbers
        code = code.replace(/\b(\d+\.?\d*)\b/g, '<span style="color: #A78BFA;">$1</span>');

        if (block.className.includes('language-dart')) {
            block.innerHTML = code;
        }
    });
}

// Micro-animation control flags
const animationStates = {
    foodSearch: { isRunning: false },
    inference: { isRunning: false },
    scanner: { isRunning: false },
    visualRecognition: { isRunning: false },
    murshidChat: { isRunning: false },
    clinicalStats: { isRunning: false },
    chart: { isRunning: false }
};

// Clinical Statistics Counter Animation
function animateClinicalStats() {
    if (animationStates.clinicalStats.isRunning) return;
    animationStates.clinicalStats.isRunning = true;

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            const current = start + (target - start) * ease;

            // Format number (if integer, no decimals; if small float, 1 decimal)
            if (Number.isInteger(target)) {
                counter.textContent = Math.round(current);
            } else {
                counter.textContent = current.toFixed(1);
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target; // Ensure final exact value
            }
        }

        requestAnimationFrame(update);
    });
}

// Interactive food search demo animation
function animateFoodSearch() {
    if (animationStates.foodSearch.isRunning) return;
    const searchBar = document.querySelector('.search-bar');
    const foodItems = document.querySelectorAll('.food-item');
    if (!searchBar) return;

    animationStates.foodSearch.isRunning = true;

    function runAnimation() {
        // Reset state
        searchBar.textContent = '🔍 Search food...';
        foodItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
        });

        // Start sequence
        setTimeout(() => {
            searchBar.textContent = '🔍 Searching for chicken...';

            foodItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Bouncy entry
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 500 + (index * 250));
            });

            // Loop after delay (2 seconds pause)
            setTimeout(runAnimation, 5000);
        }, 1200);
    }

    runAnimation();
}

// Inference diagram animation
function animateInferenceDiagram() {
    if (animationStates.inference.isRunning) return;
    const diagram = document.querySelector('.inference-diagram');
    if (!diagram) return;

    const nodes = diagram.querySelectorAll('.inference-node');
    const arrows = diagram.querySelectorAll('.inference-arrow');

    animationStates.inference.isRunning = true;

    function runAnimation() {
        // Reset state
        nodes.forEach(node => {
            node.style.opacity = '0';
            node.style.transform = 'scale(0.7) translateY(10px)';
        });
        arrows.forEach(arrow => {
            arrow.style.opacity = '0';
        });

        // Start sequence
        setTimeout(() => {
            nodes.forEach((node, index) => {
                setTimeout(() => {
                    node.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    node.style.opacity = '1';
                    node.style.transform = 'scale(1) translateY(0)';
                }, index * 400);
            });

            arrows.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.style.transition = 'all 0.4s ease-out';
                    arrow.style.opacity = '1';
                }, (index + 1) * 400 - 150);
            });

            // Loop after delay
            setTimeout(runAnimation, 6000);
        }, 800);
    }

    runAnimation();
}

// Scanner animation enhancement
function enhanceScannerAnimation() {
    if (animationStates.scanner.isRunning) return;
    const scanner = document.querySelector('.scan-frame');
    if (!scanner) return;

    const scanResult = scanner.querySelector('.scan-result');
    if (!scanResult) return;

    animationStates.scanner.isRunning = true;

    function runAnimation() {
        // Reset state
        scanResult.style.opacity = '0';
        scanResult.style.transform = 'scale(0.5)';

        // Start sequence
        setTimeout(() => {
            scanResult.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            scanResult.style.opacity = '1';
            scanResult.style.transform = 'scale(1.1)';

            setTimeout(() => {
                scanResult.style.transform = 'scale(1)';
            }, 400);

            // Loop after delay
            setTimeout(runAnimation, 5000);
        }, 2000);
    }

    runAnimation();
}

// Chart animation
function animateChart() {
    if (animationStates.chart.isRunning) return;
    const chart = document.querySelector('.trend-chart polyline');
    const dot = document.querySelector('.trend-chart circle');
    if (!chart) return;

    const length = chart.getTotalLength();
    animationStates.chart.isRunning = true;

    function runAnimation() {
        // Reset state
        chart.style.transition = 'none';
        chart.style.strokeDasharray = length;
        chart.style.strokeDashoffset = length;
        if (dot) {
            dot.style.transition = 'none';
            dot.style.opacity = '0';
            dot.style.transform = 'scale(0)';
        }

        // Start sequence
        setTimeout(() => {
            chart.style.transition = 'stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)';
            chart.style.strokeDashoffset = '0';

            setTimeout(() => {
                if (dot) {
                    dot.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    dot.style.opacity = '1';
                    dot.style.transform = 'scale(1)';
                }
            }, 2500);

            // Loop after delay
            setTimeout(runAnimation, 7000);
        }, 1200);
    }

    runAnimation();
}

// Murshid AI Chat Animation - CHAIN OF THOUGHT REASONING
// Murshid AI Chat Animation - PREMIUM CHAIN OF THOUGHT
function animateMurshidChat() {
    if (animationStates.murshidChat.isRunning) return;
    const container = document.querySelector('.chat-demo-container');
    if (!container) return;

    const userMessage = container.querySelector('.chat-message.user');
    const typingIndicator = container.querySelector('.typing-indicator');
    const assistantMessage = container.querySelector('.chat-message.assistant');

    // Reasoning Elements
    const statusText = container.querySelector('.reasoning-status-text');
    const progressBar = container.querySelector('.progress-fill');

    animationStates.murshidChat.isRunning = true;

    function runChatAnimation() {
        // 1. Reset everything to baseline
        userMessage.style.opacity = '0';
        userMessage.style.transform = 'translateY(15px)';
        assistantMessage.style.opacity = '0';
        assistantMessage.style.transform = 'translateY(15px)';
        assistantMessage.classList.add('hidden');
        assistantMessage.classList.remove('visible');
        assistantMessage.style.display = 'none';

        if (typingIndicator) {
            typingIndicator.classList.add('hidden');
            typingIndicator.classList.remove('visible');
            typingIndicator.style.display = 'none';
            if (progressBar) {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
            }
        }

        // 2. Step 1: User Message Appears
        setTimeout(() => {
            userMessage.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            userMessage.style.opacity = '1';
            userMessage.style.transform = 'translateY(0)';

            // 3. Step 2: Start Thinking
            setTimeout(() => {
                if (typingIndicator) {
                    // Force visibility
                    typingIndicator.style.display = 'flex';
                    typingIndicator.classList.remove('hidden');
                    typingIndicator.classList.add('visible');

                    if (progressBar) {
                        progressBar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    }

                    const steps = [
                        { key: 'demo_ai_step_analyze', progress: '25%' },
                        { key: 'demo_ai_step_profile', progress: '55%' },
                        { key: 'demo_ai_step_generate', progress: '80%' },
                        { key: 'demo_ai_step_validate', progress: '100%' }
                    ];

                    let stepIndex = 0;

                    function doStep() {
                        if (stepIndex >= steps.length) {
                            setTimeout(() => {
                                typingIndicator.classList.remove('visible');
                                typingIndicator.classList.add('hidden');
                                setTimeout(() => {
                                    typingIndicator.style.display = 'none';
                                    showAssistantFinal();
                                }, 500);
                            }, 1500);
                            return;
                        }

                        const currentLang = document.documentElement.lang || 'en';
                        const i18n = window.translations || (typeof translations !== 'undefined' ? translations : null);
                        const text = (i18n && i18n[currentLang] && i18n[currentLang][steps[stepIndex].key])
                            || steps[stepIndex].key;

                        if (statusText) {
                            statusText.style.opacity = '0';
                            setTimeout(() => {
                                statusText.textContent = text;
                                statusText.style.opacity = '1';
                            }, 300);
                        }

                        if (progressBar) {
                            progressBar.style.width = steps[stepIndex].progress;
                        }

                        stepIndex++;
                        setTimeout(doStep, 2500); // 2.5s for each step - more deliberate
                    }

                    doStep();
                }
            }, 1000);
        }, 500);
    }

    function showAssistantFinal() {
        assistantMessage.style.display = 'flex';
        assistantMessage.classList.remove('hidden');
        assistantMessage.classList.add('visible');

        setTimeout(() => {
            assistantMessage.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            assistantMessage.style.opacity = '1';
            assistantMessage.style.transform = 'translateY(0)';

            // Master Reset & Loop after 10 seconds of viewing
            setTimeout(runChatAnimation, 10000);
        }, 50);
    }

    runChatAnimation();
}

// Visual Recognition animation - ENHANCED PROFESSIONAL VERSION
function animateVisualRecognition() {
    if (animationStates.visualRecognition.isRunning) return;
    const container = document.querySelector('.visual-recognition-demo');
    if (!container) return;

    const shutter = container.querySelector('.camera-shutter');
    const detectionBox = container.querySelector('.object-detection-box');
    const addBtn = container.querySelector('.add-btn');
    const scanIndicator = container.querySelector('.scan-indicator');
    const quantitySelector = container.querySelector('.quantity-selector');
    const statusText = container.querySelector('.camera-status');

    animationStates.visualRecognition.isRunning = true;

    function runAnimation() {
        // Get translation function
        const currentLang = document.documentElement.lang || 'en';
        const t = (key, fallback) => {
            return (window.i18n && window.i18n.translations && window.i18n.translations[currentLang] && window.i18n.translations[currentLang][key]) || fallback;
        };

        // STAGE 0: Reset all states
        detectionBox.style.opacity = '0';
        detectionBox.style.transform = 'scale(0.5)';
        if (scanIndicator) {
            scanIndicator.style.opacity = '0';
            scanIndicator.classList.remove('analyzing');
        }
        if (quantitySelector) {
            quantitySelector.style.opacity = '0';
            quantitySelector.style.transform = 'translateY(20px)';
            const slider = quantitySelector.querySelector('.quantity-slider-fill');
            if (slider) slider.style.width = '0%';
        }
        addBtn.style.opacity = '0';
        addBtn.style.transform = 'translateY(20px)';
        addBtn.style.background = 'var(--gradient-primary)';
        addBtn.classList.remove('pulsing');
        if (statusText) {
            statusText.textContent = t('demo_vis_status_ready', 'Tap to Scan');
            statusText.style.opacity = '0.7';
            statusText.style.color = 'white';
        }

        // STAGE 1: Camera Focus (0.5s)
        setTimeout(() => {
            if (statusText) {
                statusText.textContent = t('demo_vis_status_focusing', '🎯 Focusing...');
                statusText.style.opacity = '1';
            }
            if (scanIndicator) {
                scanIndicator.style.transition = 'opacity 0.5s ease-out';
                scanIndicator.style.opacity = '1';
            }
        }, 500);

        // STAGE 2: Capture Flash (1.5s)
        setTimeout(() => {
            if (shutter) shutter.classList.add('active');
            if (statusText) {
                statusText.textContent = t('demo_vis_status_captured', '📸 Captured!');
            }
            setTimeout(() => {
                if (shutter) shutter.classList.remove('active');
            }, 200);
        }, 1500);

        // STAGE 3: AI Analysis (2s)
        setTimeout(() => {
            if (statusText) {
                statusText.innerHTML = t('demo_vis_status_analyzing', '🤖 AI Analyzing...');
            }
            if (scanIndicator) {
                scanIndicator.classList.add('analyzing');
            }

            setTimeout(() => {
                detectionBox.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                detectionBox.style.opacity = '1';
                detectionBox.style.transform = 'scale(1)';
            }, 600);
        }, 2000);

        // STAGE 4: Recognition Success (4.5s)
        setTimeout(() => {
            if (statusText) {
                statusText.innerHTML = t('demo_vis_status_recognized', '✅ Banana Recognized!');
                statusText.style.color = '#10B981';
            }
            if (scanIndicator) {
                scanIndicator.style.opacity = '0';
            }
        }, 4500);

        // STAGE 5: Quantity Selection (5s)
        setTimeout(() => {
            if (statusText) {
                statusText.textContent = t('demo_vis_status_quantity', '⚖️ Select Quantity');
                statusText.style.color = 'white';
            }
            if (quantitySelector) {
                quantitySelector.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                quantitySelector.style.opacity = '1';
                quantitySelector.style.transform = 'translateY(0)';
            }
        }, 5000);

        // STAGE 6: Quantity Confirmed (6.5s)
        setTimeout(() => {
            const slider = quantitySelector?.querySelector('.quantity-slider-fill');
            if (slider) {
                slider.style.width = '60%';
            }
            const weightDisplay = quantitySelector?.querySelector('.quantity-value');
            if (weightDisplay) {
                weightDisplay.textContent = t('demo_vis_weight', '120g (Medium)');
            }
        }, 6500);

        // STAGE 7: Add Button (7s)
        setTimeout(() => {
            addBtn.textContent = t('demo_vis_add', 'Tap to Add');
            addBtn.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            addBtn.style.opacity = '1';
            addBtn.style.transform = 'translateY(0)';
            addBtn.classList.add('pulsing');
        }, 7000);

        // STAGE 8: User Taps (8.5s)
        setTimeout(() => {
            addBtn.style.transform = 'scale(0.95)';
            if (shutter) shutter.classList.add('active');

            setTimeout(() => {
                if (shutter) shutter.classList.remove('active');
                addBtn.style.transform = 'scale(1)';
                addBtn.textContent = t('demo_vis_added', '✓ Added to Budget!');
                addBtn.style.background = 'var(--gradient-success)';
                addBtn.classList.remove('pulsing');

                if (statusText) {
                    statusText.textContent = t('demo_vis_status_success', '🎉 Successfully Logged!');
                    statusText.style.color = '#10B981';
                }

                setTimeout(() => {
                    setTimeout(runAnimation, 3000);
                }, 2500);
            }, 200);
        }, 8500);
    }

    runAnimation();
}



// Global UI Interactions
function initializeDownloadButton() {
    const downloadBtn = document.querySelector('.download-btn');
    if (!downloadBtn) return;

    setInterval(() => {
        downloadBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            downloadBtn.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

function initializeParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('scroll', () => {
        const scrolled = window.window.pageYOffset;

        orbs.forEach((orb, index) => {
            const speed = 0.3 * (index + 1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

function initialize3DCards() {
    const cards = document.querySelectorAll('.tech-card, .solution-card, .validation-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Typing effect for hero title
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50);
}

// Copy to clipboard functionality (for citation)
window.copyToClipboard = function (text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text.trim()).then(() => {
            showNotification('Citation copied to clipboard!');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
};

// Animations Initialization Complete
console.log('%c🎬 Advanced Visuals Active', 'color: #10B981; font-weight: bold;');

// Initialization message handled by main.js
