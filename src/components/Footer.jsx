import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Mission & Vision", href: "#mission" },
    { name: "Initiatives", href: "#programs" },
    { name: "Women Empowerment", href: "#empowerment" },
    { name: "Impact Milestones", href: "#impact" },
    { name: "Community Gallery", href: "#gallery" },
    { name: "Get Involved", href: "#volunteer" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 md:py-16 relative z-20 text-white font-inter w-screen px-[8vw]">
      {/* Widescreen Content Wrapper */}
      <div className="w-full max-w-none text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-12 w-full">
          
          {/* Logo & Brand Info */}
          <div className="cinematic-reveal md:col-span-6 flex flex-col justify-between">
            <div>
              <a href="#hero" className="flex flex-col mb-4 w-fit">
                <span className="text-xl font-sora font-semibold tracking-tight text-white leading-none">
                  BRIJ BHOOMI
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-brij-accent font-medium mt-0.5">
                  Foundation
                </span>
              </a>
              <p className="text-[11px] text-white/70 max-w-sm leading-relaxed mb-6 font-inter">
                A registered non-profit organization dedicated to preserving the cultural legacy, restoring local ecosystems, and driving community welfare programs across the Brij region.
              </p>
            </div>
            <div className="text-[9px] text-white/50 tracking-wider uppercase font-medium">
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
                    className="text-[11px] text-white/75 hover:text-brij-accent transition-editorial"
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
                    className="text-[11px] text-white/75 hover:text-brij-accent transition-editorial"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="cinematic-reveal border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-white/50 w-full">
          <p>
            &copy; {currentYear} Brij Bhoomi Foundation. All rights reserved. Registered NGO under Section 8.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brij-accent transition-editorial">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-brij-accent transition-editorial">Terms of Service</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-brij-accent transition-editorial">CSR Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
