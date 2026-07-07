import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerLinks, socialLinks } from "../../data/navigation";

// Custom SVG icons for maximum reliability across dependency versions
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 12} height={props.size || 12} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 12} height={props.size || 12} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 12} height={props.size || 12} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 12} height={props.size || 12} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const getSocialIcon = (name) => {
  switch (name) {
    case "Instagram": return InstagramIcon;
    case "YouTube":   return YoutubeIcon;
    case "Facebook":  return FacebookIcon;
    case "Twitter":   return TwitterIcon;
    default:          return InstagramIcon;
  }
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-6 lg:py-8 text-white font-inter w-full z-20 bg-transparent">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-85">
        <source src="/brij-bhoomi-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 z-10 pointer-events-none" />
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between">
        
        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-4 w-full items-start">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-12 lg:col-span-4 space-y-2">
            <Link to="/" className="flex flex-col w-fit">
              <span className="text-lg font-sora font-semibold tracking-tight text-white leading-none">BRIJ BHOOMI</span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#B67A2A] font-bold mt-0.5">Foundation</span>
            </Link>
            <p className="text-[11px] text-white/70 max-w-sm leading-relaxed font-inter font-normal">
              A registered Section 8 NGO preserving cultural heritage, restoring ecosystems, and driving community welfare across the Brij region.
            </p>
            <div className="flex gap-2 pt-1">
              {socialLinks.map((s) => {
                const Icon = getSocialIcon(s.name);
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    title={s.name}
                    className="p-1.5 bg-white/5 border border-white/10 hover:border-[#B67A2A] hover:bg-[#B67A2A] hover:text-white transition-all duration-300 rounded-sm text-white/80 shrink-0"
                  >
                    <Icon size={12} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-7 lg:col-span-5 min-w-0">
            <h4 className="text-[9px] font-semibold text-white uppercase tracking-wider mb-2 font-sora">Site Pages</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5">
              {footerLinks.map((l) => (
                <li key={l.name} className="min-w-0">
                  <Link to={l.to} className="text-[11px] text-white/75 hover:text-[#B67A2A] transition-colors duration-300 block truncate sm:whitespace-normal break-words leading-tight">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-5 lg:col-span-3 space-y-1.5">
            <h4 className="text-[9px] font-semibold text-white uppercase tracking-wider mb-2 font-sora">Contact Us</h4>
            <ul className="space-y-1 text-[11px] text-white/70 font-inter font-normal">
              <li className="flex items-start gap-2">
                <MapPin size={11} className="text-[#B67A2A] mt-0.5 shrink-0" />
                <span>Vrindavan, Mathura District, UP, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={11} className="text-[#B67A2A] shrink-0" />
                <span>+91 565 244 1088</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={11} className="text-[#B67A2A] shrink-0" />
                <a href="mailto:info@brijbhoomifoundation.org" className="hover:text-[#B67A2A] transition-colors duration-300">
                  info@brijbhoomifoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Legal & Copyright) */}
        <div className="border-t border-white/10 pt-3.5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-white/50">
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
