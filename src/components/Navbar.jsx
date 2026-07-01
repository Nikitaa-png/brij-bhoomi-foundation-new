import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // GSAP slide down animation on load
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Mission", href: "#mission" },
    { name: "Programs", href: "#programs" },
    { name: "Empowerment", href: "#empowerment" },
    { name: "Impact", href: "#impact" },
    { name: "Gallery", href: "#gallery" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Donate", href: "#donate-cta" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 text-white border-b border-white/10 py-3 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#hero" className="flex flex-col">
          <span className="text-lg md:text-xl font-sora font-semibold tracking-tight text-white leading-none">
            BRIJ BHOOMI
          </span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-brij-accent font-medium mt-0.5">
            Foundation
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-wide text-white/80 hover:text-brij-accent transition-editorial"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <a
            href="#donate-cta"
            className="inline-block px-5 py-2 bg-white text-black text-[10px] font-semibold uppercase tracking-wider border border-white hover:bg-transparent hover:text-white transition-editorial"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Toggle Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`xl:hidden fixed inset-0 top-[52px] w-full bg-black border-t border-white/10 transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-sora font-medium text-white hover:text-brij-accent transition-editorial"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href="#donate-cta"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 bg-white text-brij-text text-xs font-semibold uppercase tracking-wider border border-white hover:bg-transparent hover:text-white transition-editorial"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
