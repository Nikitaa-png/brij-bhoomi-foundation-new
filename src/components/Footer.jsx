import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home",              to: "/" },
  { name: "About Us",          to: "/about" },
  { name: "Mission & Vision",  to: "/vision-mission" },
  { name: "Programs",          to: "/programs" },
  { name: "CSR Partnership",   to: "/csr-partnership" },
  { name: "Impact Milestones", to: "/impact" },
  { name: "Gallery",           to: "/gallery" },
  { name: "Events",            to: "/events" },
  { name: "News & Blog",       to: "/news" },
  { name: "Transparency",      to: "/transparency" },
  { name: "FAQs",              to: "/faqs" },
  { name: "Volunteer",         to: "/volunteer" },
  { name: "Donate",            to: "/donate" },
  { name: "Contact",           to: "/contact" },
];

const social = [
  { name: "Instagram", href: "#" },
  { name: "YouTube",   href: "#" },
  { name: "Facebook",  href: "#" },
  { name: "Twitter",   href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20 lg:py-28 text-white font-inter w-screen px-[8vw] z-20 bg-transparent">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-85">
        <source src="/brij-bhoomi-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 z-10 pointer-events-none" />
      <div className="relative z-20 w-full">
        <div className="border-b border-white/10 pb-12 mb-12 text-center max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-4">Call To Action</span>
          <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight text-white mb-4">Together We Can Build a Better Future</h2>
          <p className="text-xs md:text-sm text-white/70 max-w-xl mx-auto leading-relaxed mb-8 font-inter font-normal">Join Brij Bhoomi Foundation in creating opportunities, empowering communities, and transforming lives.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donate" className="px-6 py-3 bg-[#B67A2A] text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] w-full sm:w-auto text-center">Donate Today</Link>
            <Link to="/volunteer" className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] w-full sm:w-auto text-center">Volunteer Today</Link>
            <Link to="/csr-partnership" className="px-6 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] w-full sm:w-auto text-center">Partner With Us</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 w-full">
          <div className="md:col-span-6">
            <Link to="/" className="flex flex-col mb-4 w-fit">
              <span className="text-xl font-sora font-semibold tracking-tight text-white leading-none">BRIJ BHOOMI</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#B67A2A] font-bold mt-1">Foundation</span>
            </Link>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed mb-6 font-inter font-normal">A registered non-profit organization dedicated to preserving cultural legacy, restoring local ecosystems, and driving community welfare programs across the Brij region.</p>
            <div className="text-[10px] text-white/50 tracking-wider uppercase font-semibold">Preserving Legacies. Empowering Lives.</div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-4 font-sora">Site Pages</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
              {links.map((l) => (<li key={l.name}><Link to={l.to} className="text-xs text-white/75 hover:text-[#B67A2A] transition-colors duration-300">{l.name}</Link></li>))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-4 font-sora">Follow Our Work</h4>
            <ul className="space-y-3">
              {social.map((s) => (<li key={s.name}><a href={s.href} className="text-xs text-white/75 hover:text-[#B67A2A] transition-colors duration-300">{s.name}</a></li>))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50">
          <p>&copy; {year} Brij Bhoomi Foundation. All rights reserved. Registered NGO under Section 8.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-[#B67A2A] transition-colors duration-300">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link to="/terms-and-conditions" className="hover:text-[#B67A2A] transition-colors duration-300">Terms of Service</Link>
            <span className="text-white/10">|</span>
            <Link to="/csr-partnership" className="hover:text-[#B67A2A] transition-colors duration-300">CSR Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}