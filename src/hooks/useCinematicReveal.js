import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attaches minimal, snappy entrance animations to elements inside the container.
 * Runs once per section entry to keep animations lightweight and non-distracting.
 */
export function useCinematicReveal(containerRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".cinematic-reveal", containerRef.current);
      if (items.length === 0) return;

      // Minimal initial state: slight offset, no heavy blur filters
      gsap.set(items, { opacity: 0, y: 15 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none", // Animate once on scroll down, do not animate out on scroll up
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
