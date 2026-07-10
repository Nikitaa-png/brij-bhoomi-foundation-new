import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

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
  const [currentMedia, setCurrentMedia] = useState("video"); // "video" | "image"
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const videoRef = useRef(null);

  const images = [
    { src: "/cover-images/hero_slide_1.png", alt: "Inauguration ceremony lighting the lamp" },
    { src: "/cover-images/hero_slide_2.png", alt: "MaaYaa sanitary pad free distribution program" },
    { src: "/cover-images/hero_slide_3.png", alt: "Brij Bhoomi cleanliness campaign volunteers group" },
    { src: "/cover-images/hero_slide_4.png", alt: "Empowering rural women through Shakti Ko Pranam drive" }
  ];

  // GSAP entry animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray([".hero-label", ".hero-heading", ".hero-paragraph", ".hero-buttons"]);
      gsap.set(items, { opacity: 0, y: 80, filter: "blur(12px)" });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.18,
        delay: 0.2
      });
    });
    return () => ctx.revert();
  }, []);

  // Autoplay carousel timer (loops through 4 images for 5 seconds each, then returns to video)
  useEffect(() => {
    if (currentMedia !== "image") return;

    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => {
        if (prev === images.length - 1) {
          // If it was the last image, switch back to video
          setCurrentMedia("video");
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch((err) => console.log("Video playback interrupted:", err));
          }
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [currentMedia, images.length]);

  const handleVideoEnded = () => {
    // When the video ends playing once, switch to the image slideshow starting at index 0
    setCurrentMedia("image");
    setCurrentImageIdx(0);
  };

  return (
    <section id="hero" className="w-full h-screen min-h-screen flex items-center justify-start bg-black relative overflow-hidden z-20 px-[8vw] pt-[100px] md:pt-[120px]">
      
      {/* Background Video (Edge-to-edge, loops as part of the sequence via onEnded) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-1000 ${
          currentMedia === "video" ? "opacity-85 scale-100" : "opacity-0 scale-[1.02] pointer-events-none"
        }`}
      >
        <source src="/brij-bhoomi-hero.mp4" type="video/mp4" />
      </video>

      {/* Background Slideshow Images (Edge-to-edge cover layout, preloaded via parallel rendering) */}
      {images.map((img, index) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-all duration-1000 ease-in-out ${
            currentMedia === "image" && index === currentImageIdx
              ? "opacity-85 scale-100"
              : "opacity-0 scale-[1.04] pointer-events-none"
          }`}
        />
      ))}

      {/* Dark Mask Overlay - Spans full width and height for readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/50 to-black/70 z-10 pointer-events-none" />

      {/* Left Vertical Socials Bar */}
      <div className="absolute left-[3vw] bottom-[8vh] flex flex-col gap-4 items-center z-30 hidden md:flex">
        <div className="w-[1px] h-12 bg-white/20 mb-2"></div>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial hover:-translate-y-1"><FacebookIcon /></a>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial hover:-translate-y-1"><InstagramIcon /></a>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial hover:-translate-y-1"><TwitterIcon /></a>
        <a href="#" className="text-white/60 hover:text-brij-accent transition-editorial hover:-translate-y-1"><YoutubeIcon /></a>
      </div>

      {/* Right Vertical Slide Indicator */}
      <div className="absolute right-[4vw] top-[45%] flex flex-col gap-4 items-center z-30 hidden md:flex">
        <span className="text-[10px] tracking-widest text-white/40 font-semibold uppercase font-sora">
          {currentMedia === "video" ? "VIDEO" : `0${currentImageIdx + 1}`} —
        </span>
        <div className="flex flex-col gap-2.5">
          <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${currentMedia === "video" ? "bg-brij-accent" : "bg-white/20"}`}></span>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                currentMedia === "image" && idx === currentImageIdx ? "bg-brij-accent" : "bg-white/20"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Bottom Right Scroll Guide */}
      <div className="absolute right-[8vw] bottom-[6vh] flex items-center gap-2.5 z-30 text-white/50 text-[9px] tracking-[0.2em] font-semibold uppercase hidden sm:flex">
        <div className="w-4 h-7 border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-brij-accent rounded-full animate-bounce"></div>
        </div>
        <span>Scroll to explore</span>
      </div>

      {/* Content wrapper - Standard text layouts */}
      <div className="relative w-full max-w-none text-left text-white z-20">
        <div className="max-w-[750px] space-y-5">
          <span className="hero-label text-[11px] uppercase tracking-[0.3em] text-brij-accent font-semibold block">
            Together, We Can Create Lasting Change.
          </span>
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-sora font-semibold tracking-tight leading-tight text-white">
            <span className="hero-line block">Building a Better Tomorrow</span>
            <span className="hero-line block">Through Compassion, Service &</span>
            <span className="hero-line block">Sustainable <span className="text-brij-accent">Development</span></span>
          </h1>
          <p className="hero-paragraph text-xs md:text-[13.5px] lg:text-sm font-light text-white/75 leading-relaxed tracking-wide font-inter max-w-2xl">
            Brij Bhoomi Foundation is a non-profit organization committed to creating meaningful social impact through education, healthcare, environmental conservation, women empowerment, rural development, humanitarian assistance, and community welfare. We believe that lasting change begins with collective action, and our mission is to empower lives while building stronger, healthier, and more sustainable communities.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-start items-center w-full sm:w-auto pt-1">
            <Link
              to="/volunteer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-brij-accent text-white text-[11px] font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] rounded-[3px] shadow-md hover:shadow-xl w-full sm:w-auto text-center"
            >
              Become a Volunteer <ArrowRight size={12} />
            </Link>
            <Link
              to="/donate"
              className="px-7 py-3.5 bg-transparent border border-white/80 text-white text-[11px] font-semibold uppercase tracking-widest hover:text-black hover:bg-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] rounded-[3px] w-full sm:w-auto text-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
}
