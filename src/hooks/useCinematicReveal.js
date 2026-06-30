import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attaches cinematic enter + exit animations to every .cinematic-reveal
 * element inside the given ref container.
 *
 * Enter  → from bottom (y:80, blur:12px, opacity:0) to visible
 * Exit   → to top    (y:-80, blur:12px, opacity:0)
 *
 * No scroll-pinning, no hijacking — pure ScrollTrigger toggleActions.
 */
export function useCinematicReveal(containerRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".cinematic-reveal", containerRef.current);

      items.forEach((el, i) => {
        // Set initial hidden state
        gsap.set(el, { opacity: 0, y: 80, filter: "blur(12px)" });

        // Entrance animation
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power4.out",
              delay: (i % 6) * 0.08, // subtle stagger within each section
            });
          },
          onLeave: () => {
            gsap.to(el, {
              opacity: 0,
              y: -80,
              filter: "blur(12px)",
              duration: 1.0,
              ease: "power3.in",
            });
          },
          onEnterBack: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power4.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(el, {
              opacity: 0,
              y: 80,
              filter: "blur(12px)",
              duration: 1.0,
              ease: "power3.in",
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
