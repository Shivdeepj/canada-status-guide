/**
 * Canada Status Guide – smooth scrolling for navigation buttons (mobile-friendly)
 */

(function() {
  'use strict';
  
  // Wait for DOM to be fully loaded
  function initNavigation() {
    const navButtons = document.querySelectorAll('.btn-top[href^="#"]');
    
    if (navButtons.length === 0) {
      console.log('No navigation buttons found');
      return;
    }
    
    navButtons.forEach(function(button) {
      // Remove any existing listeners by cloning
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
      
      newButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#')) {
          return;
        }
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (!targetElement) {
          console.log('Target not found:', targetId);
          // Fallback: try native anchor behavior
          window.location.href = href;
          return;
        }
        
        // Calculate scroll position
        const headerHeight = 100; // Account for header
        const elementTop = targetElement.getBoundingClientRect().top;
        const scrollPosition = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
        const targetPosition = elementTop + scrollPosition - headerHeight;
        
        // Scroll to target
        try {
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        } catch (err) {
          // Fallback for browsers that don't support smooth scroll
          window.scrollTo(0, Math.max(0, targetPosition));
        }
        
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      });
    });
    
    console.log('Navigation initialized:', navButtons.length, 'buttons');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    // DOM already loaded
    initNavigation();
  }
  
  // Also try after a short delay (for dynamic content)
  setTimeout(initNavigation, 500);
})();
