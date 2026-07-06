import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Mission & Vision", href: "#mission" },
    { name: "Initiatives", href: "#programs" },
    { name: "CSR Partnership", href: "#csr-partnership" },
    { name: "Women Empowerment", href: "#empowerment" },
    { name: "Impact Milestones", href: "#impact" },
    { name: "Community Gallery", href: "#gallery" },
    { name: "Events & Campaigns", href: "#events-campaigns" },
    { name: "FAQs", href: "#faq" },
    { name: "Get Involved", href: "#volunteer-cta" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20 lg:py-28 text-white font-inter w-screen px-[8vw] z-20 bg-transparent">
      
      {/* Background Video (Ghat River) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-85"
      >
        <source src="/brij-bhoomi-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Mask Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10 pointer-events-none" />

      {/* Widescreen Content Wrapper */}
      <div className="w-full max-w-none text-left relative z-20">
        
        {/* Call To Action Block */}
        <div className="cinematic-reveal border-b border-white/10 pb-12 mb-12 text-center max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-4">
            Call To Action
          </span>
          <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-white mb-4">
            Together We Can Build a Better Future
          </h2>
          <p className="text-xs md:text-sm text-white/70 max-w-xl mx-auto leading-relaxed mb-8 font-inter font-normal">
            Join Brij Bhoomi Foundation in creating opportunities, empowering communities, and transforming lives through compassion, innovation, and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#donate-cta"
              className="px-6 py-3 bg-[#B67A2A] text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] shadow-md hover:scale-[1.04] active:scale-[0.97] w-full sm:w-auto text-center font-medium"
            >
              Donate Today
            </a>
            <a
              href="#volunteer-cta"
              className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] hover:scale-[1.04] active:scale-[0.97] w-full sm:w-auto text-center font-medium"
            >
              Volunteer Today
            </a>
            <a
              href="#csr-partnership"
              className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] hover:scale-[1.04] active:scale-[0.97] w-full sm:w-auto text-center font-medium"
            >
              Partner With Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-12 w-full">
          
          {/* Logo & Brand Info */}
          <div className="cinematic-reveal md:col-span-6 flex flex-col justify-between">
            <div>
              <a href="#hero" className="flex flex-col mb-4 w-fit">
                <span className="text-xl font-sora font-semibold tracking-tight text-white leading-none">
                  BRIJ BHOOMI
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B67A2A] font-bold mt-1">
                  Foundation
                </span>
              </a>
              <p className="text-xs text-white/70 max-w-sm leading-relaxed mb-6 font-inter font-normal">
                A registered non-profit organization dedicated to preserving the cultural legacy, restoring local ecosystems, and driving community welfare programs across the Brij region.
              </p>
            </div>
            <div className="text-[10px] text-white/50 tracking-wider uppercase font-semibold">
              Preserving Legacies. Empowering Lives.
            </div>
          </div>
 
          {/* Site Navigation Links */}
          <div className="cinematic-reveal md:col-span-3">
            <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-4 font-sora">
              Site Pages
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-white/75 hover:text-[#B67A2A] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Socials Connection */}
          <div className="cinematic-reveal md:col-span-3">
            <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-4 font-sora">
              Follow Our Work
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="text-xs text-white/75 hover:text-[#B67A2A] transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
        </div>
 
        {/* Bottom copyright notice */}
        <div className="cinematic-reveal border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 w-full">
          <p>
            &copy; {currentYear} Brij Bhoomi Foundation. All rights reserved. Registered NGO under Section 8.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#B67A2A] transition-colors duration-300">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-[#B67A2A] transition-colors duration-300">Terms of Service</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-[#B67A2A] transition-colors duration-300">CSR Guidelines</a>
          </div>
        </div>
 
      </div>
    </footer>
  );
}
