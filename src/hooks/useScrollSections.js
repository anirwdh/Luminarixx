import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollSections = () => {
  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Get all scroll sections
    const sections = document.querySelectorAll('.scroll-section');

    // Create ScrollTrigger for each section with optimized settings
    sections.forEach((section, index) => {
      // Skip hero section as it's handled by its own animation
      if (section.querySelector('#hero')) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%", // Start animation earlier for smoother experience
        end: "bottom 20%",
        pin: false, // Disable pinning to reduce jitter
        pinSpacing: false,
        scrub: 0.1, // Very light scrub for better performance
        anticipatePin: 0, // Disable anticipation for smoother performance
        // markers: true, // Uncomment for debugging
        onEnter: () => {
          // Animate content when section enters
          const content = section.querySelector('.section-content');
          if (content) {
            // Kill any existing animations first
            gsap.killTweensOf(content.children);
            
            // Animate with better performance
            gsap.fromTo(content.children, 
              { y: 40, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, // Shorter duration for snappier feel
                stagger: 0.1, // Faster stagger
                ease: 'power1.out', // Lighter ease for better performance
                overwrite: 'auto', // Prevent conflicts
                force3D: true, // Hardware acceleration
                willChange: 'transform, opacity', // Optimize for animations
                onComplete: () => {
                  // Clear will-change after animation
                  gsap.set(content.children, { willChange: 'auto' });
                }
              }
            );
          }
        },
        onLeaveBack: () => {
          // Reset animation when scrolling back up
          const content = section.querySelector('.section-content');
          if (content) {
            gsap.killTweensOf(content.children);
            gsap.set(content.children, { y: 40, opacity: 0 });
          }
        }
      });
    });

    // Optimize ScrollTrigger performance
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
      autoRefreshEvents: 'resize,scroll' // Reduce refresh events
    });

    // Throttle scroll events for better performance
    let ticking = false;
    const updateScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ScrollTrigger.update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
