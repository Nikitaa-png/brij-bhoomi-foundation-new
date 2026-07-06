import React, { useState, useRef } from "react";
import { Calendar, Users, Heart, BookOpen, Sparkles, Award, Compass, ArrowRight, CheckCircle, Mail, MapPin, Globe } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function Events() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const upcomingEvents = [
    {
      title: "🌳 Mega Tree Plantation Drive",
      desc: "Join hundreds of volunteers as we plant trees to promote environmental sustainability and combat climate change.",
      details: ["Increase green cover", "Raise environmental awareness", "Encourage community participation"],
      participants: "Students, Families, Corporates, NGOs, Volunteers",
      actionLabel: "Register Now",
    },
    {
      title: "🩺 Free Community Health Camp",
      desc: "Providing free health check-ups, consultations, preventive screenings, and health awareness sessions for underserved communities.",
      details: [
        "General Health Check-up",
        "Blood Pressure Screening",
        "Diabetes Screening",
        "Women's Health Consultation",
        "Child Health Check-up",
        "Health Awareness Sessions",
      ],
      participants: "Vulnerable families, local villagers, general public",
      actionLabel: "Volunteer or Sponsor This Event",
    },
  ];

  const ongoingDrives = [
    {
      title: "Back-to-School Education Drive",
      goal: "Ensure every child starts school with confidence and essential learning materials.",
      details: "Support children with school kits, books, stationery, uniforms, and digital learning resources before the academic year begins.",
    },
    {
      title: "Women Skill Development Workshop",
      goal: "Empowering women through vocational training, entrepreneurship, financial literacy, and digital skills.",
      details: "Training includes: Entrepreneurship, Computer Skills, Digital Marketing Basics, Financial Planning, and Leadership Development.",
    },
    {
      title: "Blood Donation Camp",
      goal: "Save lives by becoming a blood donor or volunteering at our community blood donation drive.",
      details: "Together, Every Drop Counts. In collaboration with local blood banks and medical teams.",
    },
    {
      title: "Clean India Community Drive",
      goal: "Community cleanliness initiatives focused on creating healthier neighborhoods.",
      details: "Cleanliness drives focused on waste management awareness, plastic reduction, and civic participation.",
    },
  ];

  const calendar = [
    { month: "January", campaign: "Youth Leadership & Career Guidance" },
    { month: "February", campaign: "Women's Health Awareness" },
    { month: "March", campaign: "Skill Development Programs" },
    { month: "April", campaign: "Earth & Environment Campaign" },
    { month: "May", campaign: "Summer Education Support" },
    { month: "June", campaign: "Tree Plantation Drive" },
    { month: "July", campaign: "Healthcare Awareness Month" },
    { month: "August", campaign: "Independence Community Service Campaign" },
    { month: "September", campaign: "Rural Development Initiative" },
    { month: "October", campaign: "Cleanliness & Hygiene Campaign" },
    { month: "November", campaign: "Children's Education Week" },
    { month: "December", campaign: "Winter Relief & Donation Drive" },
  ];

  const galleryCategories = [
    "All",
    "Education",
    "Healthcare",
    "Environment",
    "Women Empowerment",
    "Rural Development",
    "Volunteer Activities",
    "CSR Partnerships",
  ];

  const galleryItems = [
    { category: "Education", img: "/children_education.png", title: "Digital Literacy Workshop" },
    { category: "Environment", img: "/eco_volunteers.png", title: "Monsoon Plantation" },
    { category: "Women Empowerment", img: "/artisan_woman.png", title: "Block Printing Seminar" },
    { category: "Rural Development", img: "/brij_kund.png", title: "Water Body Restoration" },
    { category: "Environment", img: "/sacred_groves.png", title: "Sacred Groves Cleanup" },
    { category: "Volunteer Activities", img: "/community_workshop.png", title: "Youth Outreach Meeting" },
    { category: "CSR Partnerships", img: "/hands_holding_plant.png", title: "Corporate Plantation Day" },
    { category: "Education", img: "/sanjhi_art.png", title: "Sanjhi Art Craft Class" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const filteredGallery = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": upcomingEvents.map((event, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "SocialEvent",
        "name": event.title,
        "description": event.desc,
        "location": {
          "@type": "Place",
          "name": "Mathura / Vrindavan",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mathura",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "India"
          }
        },
        "organizer": {
          "@type": "NGO",
          "name": "Brij Bhoomi Foundation",
          "url": "https://www.brijbhoomifoundation.org/"
        }
      }
    }))
  };

  return (
    <section id="events-campaigns" className="w-screen py-28 px-[8vw] lg:py-36 flex items-center bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-events" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        {/* Soft Grainy Paper Noise Overlay (3% opacity) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-events)" }} />
      </div>

      {/* Widescreen Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-20">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            Events & Campaigns
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
            Driving Change Through Community Action
          </h2>
          <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
            Every Event Inspires Awareness. Every Campaign Creates Impact.
          </p>
          <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
            At Brij Bhoomi Foundation, our events and campaigns are designed to educate, inspire, and mobilize communities toward meaningful social change. From awareness drives and medical camps to environmental initiatives and youth programs, every event strengthens our mission of building a healthier, more inclusive, and sustainable society. We believe that collective participation creates lasting impact—and every individual has the power to make a difference.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-4">
                  <h4 className="text-base font-sora font-semibold text-[#2E2E2E]">{event.title}</h4>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{event.desc}</p>
                  
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">Objectives / Details:</span>
                    <ul className="space-y-1.5">
                      {event.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs text-[#555555] flex items-start gap-2 font-inter font-normal">
                          <span className="w-1.5 h-1.5 bg-[#B67A2A] mt-1.5 flex-shrink-0 rounded-full animate-pulse" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#D8C6A8]/20">
                    <span className="text-[9px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">Who Can Participate:</span>
                    <p className="text-xs text-[#2E2E2E] font-inter font-semibold mt-0.5">{event.participants}</p>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Initiating registration for: ${event.title}`)}
                  className="mt-6 w-full py-3 bg-[#8B6F47] text-white text-[11px] font-inter font-semibold uppercase tracking-widest hover:bg-black rounded-[3px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-sm"
                >
                  {event.actionLabel}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Drives & Campaigns */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Active Initiatives & Community Campaigns</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingDrives.map((drive, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-3">
                  <h4 className="text-sm font-sora font-semibold text-[#2E2E2E]">{drive.title}</h4>
                  <span className="text-[9px] uppercase tracking-wider text-[#B67A2A] font-sora font-semibold block mb-1">Goal</span>
                  <p className="text-xs text-[#1F1F1F] font-inter font-semibold leading-relaxed mb-2">{drive.goal}</p>
                  <p className="text-xs text-[#555555] font-inter font-normal leading-relaxed border-t border-[#D8C6A8]/20 pt-3">{drive.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-side: Annual Calendar & Volunteer Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#D8C6A8] pt-12 items-start">
          
          {/* Left: Annual Campaign Calendar (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Annual Campaign Calendar</h3>
            <div className="premium-card rounded-[24px] overflow-hidden w-full">
              <div className="grid grid-cols-12 bg-[#FAF7F0] border-b border-[#D8C6A8] px-6 py-4">
                <div className="col-span-4 text-xs font-sora font-bold text-[#8B6F47] uppercase tracking-wider">Month</div>
                <div className="col-span-8 text-xs font-sora font-bold text-[#8B6F47] uppercase tracking-wider">Campaign Name</div>
              </div>
              <div className="divide-y divide-[#D8C6A8]/30">
                {calendar.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 px-6 py-3.5 hover:bg-[#FDFCF9] transition-all">
                    <div className="col-span-4 text-xs font-sora font-semibold text-[#2E2E2E]">{row.month}</div>
                    <div className="col-span-8 text-xs font-inter font-normal text-[#555555]">{row.campaign}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Become an Event Volunteer (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Become an Event Volunteer</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Our events are powered by dedicated volunteers. Find a role matching your talent:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Event Coordination",
                "Registration Desk",
                "Photography & Videography",
                "Social Media Coverage",
                "Logistics Support",
                "Medical Assistance",
                "Community Outreach",
                "Guest Management"
              ].map((role, idx) => (
                <div key={idx} className="p-4 premium-card text-center flex items-center justify-center min-h-[72px] hover:shadow-md transition-all duration-300">
                  <span className="text-[11px] font-inter font-semibold text-[#2E2E2E] leading-tight">{role}</span>
                </div>
              ))}
            </div>
            <a 
              href="#volunteer-cta" 
              className="block text-center py-3 bg-[#8B6F47] text-white text-[11px] font-inter font-semibold uppercase tracking-widest hover:bg-black rounded-[3px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-sm"
            >
              🙋 Register as a Volunteer
            </a>
          </div>

        </div>

        {/* Focus Areas & Programs Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Awareness Campaigns */}
          <div className="space-y-4 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Awareness Campaigns</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Our awareness campaigns educate communities on issues that affect everyday life:
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                "Education for Every Child",
                "Women's Rights & Safety",
                "Digital Literacy",
                "Financial Inclusion",
                "Mental Health Awareness",
                "Nutrition & Healthy Living",
                "Climate Change Awareness",
                "Water Conservation",
                "Road Safety",
                "Anti-Plastic Campaigns",
                "Rural Development",
                "Youth Leadership"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#FCFAF5] border border-[#D8C6A8] px-3.5 py-2.5 rounded-lg shadow-sm">
                  <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-[10px] font-inter font-semibold text-[#2E2E2E] leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outreach Programs */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8] p-6 rounded-[20px] space-y-4 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Community Outreach Programs</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-4">
              We regularly organize grass-roots outreach to deliver direct structural aid:
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                "Village Development Programs",
                "Educational Workshops",
                "Health Awareness Sessions",
                "Career Guidance Seminars",
                "Community Meetings",
                "Social Welfare Drives",
                "Skill Development Camps",
                "Digital Awareness Workshops"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-[10px] text-[#3C372F] font-inter font-normal leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fundraising & Corporate split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Fundraising */}
          <div className="lg:col-span-7 space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Fundraising Events</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Our fundraising events help expand our reach and increase the impact of our social initiatives:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Charity Walks & Marathons", desc: "Participate in fitness challenges to raise awareness." },
                { title: "Cultural & Concert Events", desc: "Enjoy benefits concerts and traditional Sanjhi art classes." },
                { title: "Community Festivals & Events", desc: "Gather locally during our heritage and ecology festivals." },
                { title: "Strategic CSR Galas", desc: "Special galas connecting corporate funds with NGO programs." },
                { title: "School & College Drives", desc: "Youth donation drives and student led events." },
                { title: "Impact Conferences", desc: "Participate in social welfare planning workshops." }
              ].map((way, idx) => (
                <div key={idx} className="bg-[#FCFAF5] border border-[#D8C6A8] p-4 rounded-[12px] space-y-1 hover:shadow-sm transition-editorial">
                  <h4 className="text-[11px] font-sora font-semibold text-[#2E2E2E]">{way.title}</h4>
                  <p className="text-[9px] text-[#555555] leading-relaxed font-inter font-normal">{way.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate */}
          <div className="lg:col-span-5 bg-[#FCFAF5] border border-[#D8C6A8] p-6 rounded-[20px] space-y-4 cinematic-reveal flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-sora font-semibold text-[#2E2E2E] mb-2">Corporate Engagement Events</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-4">
                Organizations can participate through employee engagement operations:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "CSR Volunteering Days",
                  "Employee Engagement Programs",
                  "Tree Plantation Drives",
                  "Education Sponsorship Events",
                  "Healthcare Camps",
                  "Community Development Projects",
                  "Leadership for Social Good Workshops"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={10} className="text-[#B67A2A] flex-shrink-0" />
                    <span className="text-[10px] text-[#3C372F] font-inter font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a 
              href="#csr-partnership" 
              className="mt-6 block text-center py-2 bg-[#8B6F47] text-white text-[9px] font-inter font-semibold uppercase tracking-wider hover:bg-black rounded-sm transition-all"
            >
              Explore CSR Models
            </a>
          </div>
        </div>



        {/* Event Gallery */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Event Gallery</h3>
              <p className="text-xs text-[#555555] font-inter font-normal mt-1">
                Explore moments that reflect the spirit of service, collaboration, and community impact.
              </p>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              {galleryCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1 text-[9px] font-inter font-semibold uppercase tracking-wider rounded-full border transition-all ${
                    activeFilter === cat
                      ? "bg-[#8B6F47] text-white border-[#8B6F47]"
                      : "bg-[#FCFAF5] text-[#555555] border-[#D8C6A8] hover:border-[#8B6F47]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredGallery.map((item, idx) => (
              <div 
                key={idx} 
                className="group bg-[#FCFAF5] border border-[#D8C6A8] rounded-[20px] overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-white/95 px-2 py-0.5 rounded-full border border-[#D8C6A8]/50 text-[8px] font-sora font-semibold text-[#8B6F47] uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-[10px] font-sora font-semibold text-[#2E2E2E] leading-tight truncate">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-side: Stay Updated & Final CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Stay Updated Subscription (col-span-5) */}
          <div className="lg:col-span-5 bg-[#FCFAF5] border border-[#D8C6A8] p-8 rounded-[24px] flex flex-col justify-between shadow-sm cinematic-reveal">
            <div className="space-y-4">
              <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Stay Updated</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                Never miss an opportunity to make a difference. Subscribe to receive updates about upcoming events, volunteer openings, awareness campaigns, and impact stories.
              </p>
            </div>
            <div className="pt-4">
              {isSubscribed ? (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-xs rounded font-inter">
                  Thank you! You have subscribed successfully.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow px-4 py-2 text-xs bg-white border border-[#D8C6A8] rounded focus:outline-none focus:border-[#8B6F47] text-[#2E2E2E] font-inter"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#8B6F47] text-white text-xs font-inter font-semibold uppercase tracking-wider hover:bg-black rounded-sm transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Final CTA Card (col-span-7) */}
          <div className="lg:col-span-7 bg-[#8B6F47] text-white p-8 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left flex flex-col justify-between cinematic-reveal">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-sora font-semibold block">
                Together We Create Change
              </span>
              <h3 className="text-xl md:text-2xl font-sora font-semibold tracking-tight text-white leading-tight">
                Join Our Next Event and Become a Part of the Change
              </h3>
              <p className="text-[11px] text-white/80 leading-relaxed font-inter font-normal">
                Every event is an opportunity to inspire hope, strengthen communities, and create meaningful impact. Whether you volunteer, donate, participate, or simply spread awareness, your involvement matters.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 pt-6 justify-center md:justify-start">
              <a
                href="#events-campaigns"
                className="px-4 py-2 bg-white text-[#8B6F47] text-[9px] font-sora font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all rounded-sm shadow-sm"
              >
                📅 View Events
              </a>
              <a
                href="#volunteer-cta"
                className="px-4 py-2 bg-transparent border border-white text-white text-[9px] font-sora font-semibold uppercase tracking-wider hover:text-white/85 transition-all rounded-sm"
              >
                🙋 Register Volunteer
              </a>
              <a
                href="#donate-cta"
                className="px-4 py-2 bg-transparent border border-white text-white text-[9px] font-sora font-semibold uppercase tracking-wider hover:text-white/85 transition-all rounded-sm font-medium"
              >
                ❤️ Donate
              </a>
              <button
                onClick={() => alert("Subscribing for real-time newsletters...")}
                className="px-4 py-2 bg-transparent border border-white text-white text-[9px] font-sora font-semibold uppercase tracking-wider hover:text-white/85 transition-all rounded-sm font-medium"
              >
                📩 Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
