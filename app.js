// CV Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the CV application
    initializeCV();
});

function initializeCV() {
    // Add smooth scrolling behavior for any anchor links
    addSmoothScrolling();
    
    // Add print functionality
    addPrintSupport();
    
    // Add responsive behavior enhancements
    addResponsiveEnhancements();
    
    // Add accessibility improvements
    addAccessibilityFeatures();
    
    // Add interaction enhancements
    addInteractionEnhancements();
}

// Smooth scrolling for anchor links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Print support functionality
function addPrintSupport() {
    // Add keyboard shortcut for printing (Ctrl+P)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
    
    // Optimize for print when print dialog is opened
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('printing');
        
        // Ensure all content is visible for printing
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(el => {
            el.classList.add('print-visible');
        });
        
        // Temporarily remove animations for printing
        const animatedElements = document.querySelectorAll('.date-badge.current');
        animatedElements.forEach(el => {
            el.style.animation = 'none';
        });
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
        
        // Restore hidden state after printing
        const printVisibleElements = document.querySelectorAll('.print-visible');
        printVisibleElements.forEach(el => {
            el.classList.remove('print-visible');
        });
        
        // Restore animations after printing
        const animatedElements = document.querySelectorAll('.date-badge.current');
        animatedElements.forEach(el => {
            el.style.animation = '';
        });
    });
}

// Responsive behavior enhancements
function addResponsiveEnhancements() {
    // Handle window resize events
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            handleResponsiveLayout();
        }, 150);
    });
    
    // Initial layout setup
    handleResponsiveLayout();
}

function handleResponsiveLayout() {
    const width = window.innerWidth;
    
    // Add responsive classes based on viewport width
    if (width <= 768) {
        document.body.classList.add('mobile-layout');
        document.body.classList.remove('tablet-layout', 'desktop-layout');
    } else if (width <= 1024) {
        document.body.classList.add('tablet-layout');
        document.body.classList.remove('mobile-layout', 'desktop-layout');
    } else {
        document.body.classList.add('desktop-layout');
        document.body.classList.remove('mobile-layout', 'tablet-layout');
    }
}

// Accessibility improvements
function addAccessibilityFeatures() {
    // Add ARIA labels to interactive elements
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.setAttribute('tabindex', '0');
        tag.setAttribute('role', 'button');
        tag.setAttribute('aria-label', `Skill: ${tag.textContent.trim()}`);
    });
    
    // Add ARIA labels to soft skills and interests
    const softSkillItems = document.querySelectorAll('.soft-skill-item');
    softSkillItems.forEach((item, index) => {
        const title = item.querySelector('.soft-skill-title');
        if (title) {
            item.setAttribute('aria-label', `Soft skill: ${title.textContent.trim()}`);
        }
    });
    
    const interestItems = document.querySelectorAll('.interest-item');
    interestItems.forEach((item, index) => {
        const title = item.querySelector('.interest-title');
        if (title) {
            item.setAttribute('aria-label', `Interest: ${title.textContent.trim()}`);
        }
    });
    
    // Add focus management for keyboard navigation
    addFocusManagement();
    
    // Add skip links functionality
    addSkipLinks();
}

function addFocusManagement() {
    // Enhance keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Handle Enter key on skill tags
        if (e.key === 'Enter' && e.target.classList.contains('skill-tag')) {
            e.target.click();
        }
        
        // Handle Escape key to blur focused elements
        if (e.key === 'Escape') {
            if (document.activeElement && document.activeElement.blur) {
                document.activeElement.blur();
            }
        }
    });
}

function addSkipLinks() {
    // Create skip link for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: var(--color-btn-primary-text);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.2s ease;
    `;
    
    // Show skip link on focus
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    // Add skip link to the beginning of the document
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ID to main content for skip link target
    const mainContent = document.querySelector('.main-content');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
}

// Interaction enhancements
function addInteractionEnhancements() {
    // Add hover effects for job cards
    const jobCards = document.querySelectorAll('.job');
    jobCards.forEach(job => {
        job.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        job.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Add click-to-highlight for key achievements
    const keyAchievements = document.querySelectorAll('.key-achievement');
    keyAchievements.forEach(achievement => {
        achievement.addEventListener('click', function() {
            // Remove highlight from other achievements
            keyAchievements.forEach(other => {
                other.classList.remove('highlighted');
            });
            
            // Add highlight to clicked achievement
            this.classList.add('highlighted');
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                this.classList.remove('highlighted');
            }, 3000);
        });
    });
    
    // Add interactive feedback for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Create a temporary visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Add CSS for interaction enhancements
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .key-achievement.highlighted {
            background: var(--color-bg-1) !important;
            border-left-color: var(--color-primary) !important;
            transform: scale(1.02);
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }
        
        .skill-tag:active {
            transform: scale(0.95) !important;
        }
        
        @media print {
            .key-achievement.highlighted {
                transform: none !important;
                box-shadow: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
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

// Enhanced print styles management
function optimizeForPrint() {
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            .print-visible {
                display: block !important;
                visibility: visible !important;
            }
            
            .skip-link {
                display: none !important;
            }
            
            * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            .key-achievement {
                break-inside: avoid;
                page-break-inside: avoid;
            }
            
            .soft-skill-item,
            .interest-item {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(style);
}

// Performance monitoring
function addPerformanceMonitoring() {
    // Log page load time
    window.addEventListener('load', function() {
        if (performance && performance.timing) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`CV page loaded in ${loadTime}ms`);
        }
    });
}

// Initialize dynamic styles and performance monitoring
addDynamicStyles();
optimizeForPrint();
addPerformanceMonitoring();

// Export functions for potential external use
window.CVApp = {
    print: () => window.print(),
    scrollToSection: (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    highlightAchievement: (index) => {
        const achievements = document.querySelectorAll('.key-achievement');
        if (achievements[index]) {
            achievements[index].click();
        }
    },
    getSkills: () => {
        const skills = [];
        document.querySelectorAll('.skill-tag').forEach(tag => {
            skills.push(tag.textContent.trim());
        });
        return skills;
    }
};