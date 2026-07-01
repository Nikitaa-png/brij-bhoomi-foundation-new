import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attaches cinematic enter + exit animations to every .cinematic-reveal
 * element inside the given ref container.
 *
 * Initial state → from bottom (y:80px, blur:12px, opacity:0)
 * Visible state → in viewport (y:0, blur:0px, opacity:1)
 * Exit state    → to top (y:-80px, blur:12px, opacity:0)
 *
 * No scroll-pinning, no hijacking — pure ScrollTrigger callbacks.
 */
export function useCinematicReveal(containerRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".cinematic-reveal", containerRef.current);
      if (items.length === 0) return;

      // Initial state
      gsap.set(items, { opacity: 0, y: 80, filter: "blur(12px)" });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 88%",
        end: "bottom 12%",
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.18,
            overwrite: "auto"
          });
        },
        onLeave: () => {
          gsap.to(items, {
            opacity: 0,
            y: -80,
            filter: "blur(12px)",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.18,
            overwrite: "auto"
          });
        },
        onEnterBack: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.18,
            overwrite: "auto"
          });
        },
        onLeaveBack: () => {
          gsap.to(items, {
            opacity: 0,
            y: 80,
            filter: "blur(12px)",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.18,
            overwrite: "auto"
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
