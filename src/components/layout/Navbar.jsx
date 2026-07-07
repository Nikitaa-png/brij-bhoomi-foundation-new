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

  const activeCls = "text-brij-accent";
  const baseCls   = "link-premium text-xs font-medium tracking-wide text-white/80 hover:text-brij-accent transition-editorial";

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white border-b border-white/10 py-3.5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Brand Logo */}
        <Link to="/" className="flex flex-col group">
          <span className="text-lg md:text-xl font-sora font-semibold tracking-tight text-white leading-none transition-colors duration-300 group-hover:text-brij-accent">
            BRIJ BHOOMI
          </span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-brij-accent font-medium mt-0.5 transition-colors duration-300 group-hover:text-white">
            Foundation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-6">
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

        {/* CTA */}
        <div className="hidden xl:block">
          <Link
            to="/donate"
            className="inline-block px-5 py-2 bg-white text-black text-[10px] font-semibold uppercase tracking-wider border border-white hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] rounded-[2px]"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-white focus:outline-none p-1 hover:text-brij-accent transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`xl:hidden fixed inset-0 top-[56px] w-full h-[calc(100vh-56px)] bg-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-5 overflow-y-auto h-full pb-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-sora font-medium hover:text-brij-accent transition-editorial border-b border-white/5 pb-2 ${
                  isActive ? "text-brij-accent" : "text-white/90"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-6">
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider border border-white hover:bg-transparent hover:text-white transition-all duration-300 active:scale-[0.98] rounded-[2px]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
