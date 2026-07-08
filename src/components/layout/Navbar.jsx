import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const activeCls = "text-brij-accent after:scale-x-100 after:origin-left";
  const baseCls   = "link-premium text-[10px] 2xl:text-[11px] font-semibold uppercase tracking-widest text-white/80 hover:text-brij-accent transition-editorial whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent focus-visible:ring-offset-1 focus-visible:ring-offset-black";

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white border-b border-white/10 h-[76px] transition-all duration-300"
    >
      <div className="max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 md:px-8 h-full flex justify-between items-center relative">

        {/* Brand Logo - Reduced gap and shrink-0 to prevent wrap */}
        <Link 
          to="/" 
          className="flex flex-col group shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent focus-visible:ring-offset-1 rounded-sm"
        >
          <span className="text-base md:text-lg font-sora font-semibold tracking-tight text-white leading-none transition-colors duration-300 group-hover:text-brij-accent">
            BRIJ BHOOMI
          </span>
          <span className="text-[7px] uppercase tracking-[0.3em] text-brij-accent font-semibold mt-1 transition-colors duration-300 group-hover:text-white">
            Foundation
          </span>
        </Link>

        {/* Desktop Nav - High readability, single-line links */}
        <nav className="hidden xl:flex items-center gap-x-4 2xl:gap-x-5 h-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `${baseCls} ${isActive ? activeCls : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons - Equal spacing, reduced heights, balanced outline style */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link
            to="/volunteer-portal"
            className="px-3.5 h-[34px] flex items-center justify-center text-[9px] font-bold uppercase tracking-widest border border-white/25 hover:border-white hover:text-white text-white/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-[2px] font-inter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent"
          >
            Volunteer Portal
          </Link>
          <Link
            to="/admin"
            className="px-3.5 h-[34px] flex items-center justify-center text-[9px] font-bold uppercase tracking-widest border border-white/25 hover:border-white hover:text-white text-white/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-[2px] font-inter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent"
          >
            Admin Portal
          </Link>
          <Link
            to="/donate"
            className="bg-white text-black border border-white hover:bg-transparent hover:text-white px-5 h-[34px] flex items-center justify-center text-[9px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] rounded-[2px] font-inter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent"
          >
            Donate Now
          </Link>
        </div>

        {/* Tablet & Mobile Right actions */}
        <div className="flex items-center gap-4 xl:hidden shrink-0">
          {/* Donate button visible on Tablet screen size */}
          <Link
            to="/donate"
            className="hidden md:inline-flex bg-white text-black border border-white hover:bg-transparent hover:text-white px-4 h-[32px] items-center justify-center text-[9px] font-bold uppercase tracking-widest transition-all duration-300 rounded-[2px] font-inter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent"
          >
            Donate Now
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1.5 hover:text-brij-accent transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Menu Drawer */}
      <div
        className={`xl:hidden fixed inset-0 top-[76px] w-full h-[calc(100vh-76px)] bg-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-4 overflow-y-auto h-full pb-24 text-left">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm font-sora font-semibold tracking-wider hover:text-brij-accent transition-editorial border-b border-white/5 pb-2.5 ${
                  isActive ? "text-brij-accent" : "text-white/90"
                } focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brij-accent`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Action buttons inside mobile menu drawer */}
          <div className="pt-6 flex flex-col gap-3">
            <Link
              to="/volunteer-portal"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-transparent text-white text-xs font-bold uppercase tracking-widest border border-white/20 hover:border-brij-accent hover:text-brij-accent transition-all duration-300 rounded-[2px] font-inter focus-visible:outline-none"
            >
              Volunteer Portal
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-transparent text-white text-xs font-bold uppercase tracking-widest border border-white/20 hover:border-brij-accent hover:text-brij-accent transition-all duration-300 rounded-[2px] font-inter focus-visible:outline-none"
            >
              Admin Portal
            </Link>
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-white text-black text-xs font-bold uppercase tracking-widest border border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-[2px] font-inter focus-visible:outline-none"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
