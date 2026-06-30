import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

// Inline SVG components to ensure zero dependency compilation errors on older package versions
const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.872.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".hero-line", textRef.current);

      // Hide all items immediately
      gsap.set(items, { opacity: 0, y: 80, filter: "blur(12px)" });

      // Animate each one in, one by one
      gsap.to(items, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.18,
        delay: 0.4,
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="w-screen h-screen min-h-screen flex items-center justify-start bg-transparent relative z-20 px-[8vw]">
      
      {/* 1. Left Vertical Socials Bar */}
      <div className="absolute left-[3vw] bottom-[8vh] flex flex-col gap-4 items-center z-30 hidden md:flex">
        <div className="w-[1px] h-12 bg-white/20 mb-2"></div>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial"><FacebookIcon /></a>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial"><InstagramIcon /></a>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial"><TwitterIcon /></a>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial"><YoutubeIcon /></a>
      </div>

      {/* 2. Right Vertical Slide Index Indicator */}
      <div className="absolute right-[4vw] top-[45%] flex flex-col gap-4 items-center z-30 hidden md:flex">
        <span className="text-[10px] tracking-widest text-white/40 font-semibold uppercase font-sora">01 —</span>
        <div className="flex flex-col gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brij-accent"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
        </div>
      </div>

      {/* 3. Bottom Right Scroll Guide */}
      <div className="absolute right-[8vw] bottom-[6vh] flex items-center gap-2.5 z-30 text-white/50 text-[9px] tracking-[0.2em] font-semibold uppercase hidden sm:flex">
        <div className="w-4 h-7 border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-brij-accent rounded-full animate-bounce"></div>
        </div>
        <span>Scroll to explore</span>
      </div>

      {/* Content wrapper */}
      <div ref={textRef} className="relative w-full max-w-none text-left text-white z-20">
        <div className="max-w-[700px] space-y-4">

          {/* Line 1: eyebrow */}
          <span className="hero-line text-[10px] uppercase tracking-[0.3em] text-brij-accent font-semibold block">
            Preserving Legacy, Nurturing Futures
          </span>

          {/* Lines 2-4: heading, each line separate */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-semibold tracking-tight leading-tight text-white">
            <span className="hero-line block">Preserving Culture.</span>
            <span className="hero-line block">Empowering Communities.</span>
            <span className="hero-line block">Inspiring <span className="text-brij-accent">Change.</span></span>
          </h1>

          {/* Line 5: paragraph */}
          <p className="hero-line text-[12px] md:text-[13px] font-light text-white/70 leading-relaxed tracking-wide font-inter">
            Brij Bhoomi Foundation is committed to preserving our rich heritage, empowering people, and building a stronger, more inclusive society for future generations.
          </p>

          {/* Line 6: buttons */}
          <div className="hero-line flex flex-col sm:flex-row gap-4 justify-start items-center w-full sm:w-auto pt-4">
            <a
              href="#about"
              className="flex items-center gap-1.5 px-6 py-2.5 bg-brij-accent text-white text-[10px] font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-editorial rounded-sm w-full sm:w-auto text-center"
            >
              Explore Our Work <ArrowRight size={12} />
            </a>
            <a
              href="#donate-cta"
              className="px-6 py-2.5 bg-transparent border border-white text-white text-[10px] font-semibold uppercase tracking-wider hover:text-brij-accent hover:border-brij-accent transition-editorial rounded-sm w-full sm:w-auto text-center"
            >
              Donate Now ♡
            </a>
          </div>

        </div>
      </div>
      
    </section>
  );
}
