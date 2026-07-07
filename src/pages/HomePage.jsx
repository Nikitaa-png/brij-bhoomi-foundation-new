import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Users, Leaf, Home as HomeIcon, Award } from "lucide-react";
import Hero from "../components/sections/Hero";
import { useCinematicReveal } from "../hooks/useCinematicReveal";
import PageMeta from "../components/common/PageMeta";
import { programCards } from "../data/programs";
import { homeImpactStats } from "../data/impact";
import { galleryPreviews } from "../data/gallery";
import { eventPreviews } from "../data/events";
import { homeBlogPreviews } from "../data/news";

const getProgramIcon = (name) => {
  switch (name) {
    case "BookOpen": return <BookOpen size={18} className="text-brij-accent" />;
    case "Heart":    return <Heart size={18} className="text-brij-accent" />;
    case "Users":    return <Users size={18} className="text-brij-accent" />;
    case "Home":     return <HomeIcon size={18} className="text-brij-accent" />;
    case "Leaf":     return <Leaf size={18} className="text-brij-accent" />;
    case "Award":    return <Award size={18} className="text-brij-accent" />;
    default:         return <Award size={18} className="text-brij-accent" />;
  }
};

// ─── Shared section wrapper ─────────────────────────────────────────────────
function PreviewSection({ id, bg, border, children }) {
  const ref = useRef(null);
  useCinematicReveal(ref);
  return (
    <section id={id} className={`w-full py-20 px-[8vw] ${bg} relative z-20 border-t border-t-[#1f1a14]/10 overflow-hidden`}>
      <div ref={ref} className="w-full max-w-none relative z-10">{children}</div>
    </section>
  );
}

function SectionLabel({ text }) {
  return (
    <span className="text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block mb-2 cinematic-reveal">{text}</span>
  );
}

function SectionHeading({ children }) {
  return <h2 className="text-3xl md:text-4xl font-sora font-semibold tracking-tight leading-tight mb-4 cinematic-reveal text-[#1f1a14]">{children}</h2>;
}

function MoreBtn({ to, label = "Learn More" }) {
  return (
    <Link to={to} className="cinematic-reveal inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#1f1a14]/30 text-[#1f1a14] text-[10px] font-inter font-medium uppercase tracking-widest hover:text-brij-accent hover:border-brij-accent transition-all duration-300 hover:scale-[1.03] rounded-[2px]">
      {label} <ArrowRight size={12} />
    </Link>
  );
}

// ─── About Preview ───────────────────────────────────────────────────────────
function AboutPreview() {
  return (
    <PreviewSection id="home-about" bg="bg-[#FAF7F0]" border="border-[#1f1a14]/5">
      <SectionLabel text="About Us" />
      <SectionHeading>About Brij Bhoomi Foundation</SectionHeading>
      <p className="cinematic-reveal text-sm text-[#3c372f] leading-relaxed font-inter font-normal max-w-2xl mb-8">
        Brij Bhoomi Foundation is a non-profit organization dedicated to transforming lives through sustainable social development. We work across education, healthcare, women empowerment, environmental conservation, and rural development to create measurable, lasting impact.
      </p>
      <MoreBtn to="/about" label="Learn More About Us" />
    </PreviewSection>
  );
}

// ─── Vision & Mission Preview ────────────────────────────────────────────────
function MissionPreview() {
  return (
    <PreviewSection id="home-mission" bg="bg-[#F2E8D6]" border="border-[#D8C6A8]">
      <SectionLabel text="Core Intent" />
      <SectionHeading>Vision & Mission</SectionHeading>
      <div className="cinematic-reveal grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          { title: "Our Mission", text: "To create sustainable social impact through community-driven development programs in education, healthcare, women empowerment, environmental conservation, and rural development." },
          { title: "Our Vision",  text: "To build an inclusive, empowered, and sustainable society where every individual has access to education, healthcare, and equal opportunities regardless of background." },
        ].map((c) => (
          <div key={c.title} className="bg-[#FCFAF5] border border-[#D8C6A8]/70 rounded-[16px] p-8">
            <h3 className="text-base font-sora font-semibold text-[#2E2E2E] mb-3">{c.title}</h3>
            <p className="text-xs text-[#4E4E4E] leading-relaxed font-inter font-normal">{c.text}</p>
          </div>
        ))}
      </div>
      <MoreBtn to="/vision-mission" label="Explore Vision & Mission" />
    </PreviewSection>
  );
}

// ─── Programs Preview ────────────────────────────────────────────────────────
function ProgramsPreview() {
  return (
    <PreviewSection id="home-programs" bg="bg-[#FAF7F0]" border="border-[#1f1a14]/5">
      <SectionLabel text="What We Do" />
      <SectionHeading>Programs & Initiatives</SectionHeading>
      <div className="cinematic-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {programCards.map((p) => (
          <div key={p.title} className="bg-white border border-[#D8C6A8]/70 rounded-[12px] overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-500">
            <div className="h-28 overflow-hidden relative">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-3 flex items-center gap-2">
              {getProgramIcon(p.iconName)}
              <span className="text-[10px] font-sora font-semibold text-[#1F1F1F] leading-tight">{p.title}</span>
            </div>
          </div>
        ))}
      </div>
      <MoreBtn to="/programs" label="View All Programs" />
    </PreviewSection>
  );
}

// ─── Impact Preview ──────────────────────────────────────────────────────────
function ImpactPreview() {
  return (
    <PreviewSection id="home-impact" bg="bg-[#F2E8D6]" border="border-[#D8C6A8]">
      <SectionLabel text="Our Footprint" />
      <SectionHeading>Real Impact, Real Change</SectionHeading>
      <div className="cinematic-reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {homeImpactStats.map((s) => (
          <div key={s.label} className="bg-[#FCFAF5] border border-[#D8C6A8]/70 rounded-[16px] p-6 text-center">
            <div className="text-3xl font-sora font-semibold text-[#8B6F47] mb-1">{s.value}</div>
            <div className="text-xs font-sora font-semibold text-[#2E2E2E]">{s.label}</div>
          </div>
        ))}
      </div>
      <MoreBtn to="/impact" label="See Our Impact" />
    </PreviewSection>
  );
}

// ─── Gallery Preview ─────────────────────────────────────────────────────────
function GalleryPreview() {
  return (
    <PreviewSection id="home-gallery" bg="bg-[#FAF7F0]" border="border-[#1f1a14]/5">
      <SectionLabel text="Visual Record" />
      <SectionHeading>Glimpses of Our Work</SectionHeading>
      <div className="cinematic-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {galleryPreviews.map((img) => (
          <div key={img.title} className="group relative overflow-hidden rounded-[12px] aspect-square border border-[#D8C6A8]/50">
            <img src={`${img.src}?v=2`} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-2">
              <span className="text-[9px] text-white font-sora font-semibold uppercase tracking-wider">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
      <MoreBtn to="/gallery" label="View Gallery" />
    </PreviewSection>
  );
}

// ─── Events Preview ──────────────────────────────────────────────────────────
function EventsPreview() {
  return (
    <PreviewSection id="home-events" bg="bg-[#F2E8D6]" border="border-[#D8C6A8]">
      <SectionLabel text="Events & Campaigns" />
      <SectionHeading>Upcoming Events</SectionHeading>
      <div className="cinematic-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {eventPreviews.map((e) => (
          <div key={e.title} className="bg-[#FCFAF5] border border-[#D8C6A8]/70 rounded-[16px] p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
            <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] mb-2">{e.title}</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{e.desc}</p>
          </div>
        ))}
      </div>
      <MoreBtn to="/events" label="View All Events" />
    </PreviewSection>
  );
}

// ─── Blog Preview ────────────────────────────────────────────────────────────
function BlogPreview() {
  return (
    <PreviewSection id="home-news" bg="bg-[#FAF7F0]" border="border-[#1f1a14]/5">
      <SectionLabel text="News & Blog" />
      <SectionHeading>Latest Stories</SectionHeading>
      <div className="cinematic-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {homeBlogPreviews.map((a) => (
          <div key={a.title} className="bg-white border border-[#D8C6A8]/70 rounded-[16px] overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-500">
            <div className="h-44 overflow-hidden relative">
              <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-3 left-3 bg-white/95 border border-[#D8C6A8]/50 px-2.5 py-1 rounded-full text-[8px] font-sora font-semibold text-[#8B6F47] uppercase tracking-wider">{a.cat}</span>
            </div>
            <div className="p-5">
              <span className="text-[10px] text-[#888] font-inter font-medium block mb-1">{a.date}</span>
              <h4 className="text-sm font-sora font-semibold text-[#2E2E2E] leading-snug">{a.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <MoreBtn to="/news" label="Read More Stories" />
    </PreviewSection>
  );
}

// ─── Get Involved Preview ────────────────────────────────────────────────────
function GetInvolvedPreview() {
  const cards = [
    { title: "Donate",         desc: "Your contribution directly funds education, healthcare, and community programs.", to: "/donate",          cta: "Donate Now" },
    { title: "Volunteer",      desc: "Join our passionate network of volunteers driving ground operations.",           to: "/volunteer",       cta: "Become a Volunteer" },
    { title: "CSR Partner",    desc: "Partner with us to implement high-impact CSR initiatives.",                    to: "/csr-partnership", cta: "Partner With Us" },
  ];
  return (
    <PreviewSection id="home-get-involved" bg="bg-[#F2E8D6]" border="border-[#D8C6A8]">
      <SectionLabel text="Get Involved" />
      <SectionHeading>How You Can Help</SectionHeading>
      <div className="cinematic-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((c) => (
          <div key={c.title} className="bg-[#FCFAF5] border border-[#D8C6A8]/70 rounded-[16px] p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-500">
            <div>
              <h3 className="text-lg font-sora font-semibold text-[#2E2E2E] mb-3">{c.title}</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-6">{c.desc}</p>
            </div>
            <Link to={c.to} className="inline-flex items-center gap-2 text-[10px] font-inter font-semibold uppercase tracking-wider text-[#8B6F47] hover:text-black transition-colors">
              {c.cta} <ArrowRight size={10} />
            </Link>
          </div>
        ))}
      </div>
    </PreviewSection>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────
function FinalCTA() {
  const ref = useRef(null);
  useCinematicReveal(ref);
  return (
    <section className="w-full py-20 px-[8vw] bg-[#8B6F47] relative z-20 text-white text-center overflow-hidden">
      <div ref={ref} className="max-w-3xl mx-auto space-y-6">
        <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-white/80 font-sora font-semibold block">Together We Create Change</span>
        <h2 className="cinematic-reveal text-3xl md:text-4xl font-sora font-semibold tracking-tight leading-tight">Building a Better Tomorrow, Together</h2>
        <p className="cinematic-reveal text-sm text-white/80 leading-relaxed font-inter font-normal max-w-xl mx-auto">
          Every donation, volunteer hour, and partnership contributes to creating a stronger, healthier, and more inclusive society.
        </p>
        <div className="cinematic-reveal flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <Link to="/donate"          className="px-7 py-3 bg-white text-[#8B6F47] text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] shadow-md hover:scale-[1.04] w-full sm:w-auto text-center">Donate Today</Link>
          <Link to="/volunteer"       className="px-7 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] hover:scale-[1.04] w-full sm:w-auto text-center">Volunteer Today</Link>
          <Link to="/csr-partnership" className="px-7 py-3 bg-transparent border border-white text-white text-[11px] font-sora font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] hover:scale-[1.04] w-full sm:w-auto text-center">Partner With Us</Link>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ───────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Brij Bhoomi Foundation — a registered NGO in Vrindavan, Mathura creating sustainable social impact through education, healthcare, women empowerment, and environmental conservation across India."
      />
      <Hero />
      <AboutPreview />
      <MissionPreview />
      <ProgramsPreview />
      <ImpactPreview />
      <GalleryPreview />
      <EventsPreview />
      <BlogPreview />
      <GetInvolvedPreview />
      <FinalCTA />
    </>
  );
}
