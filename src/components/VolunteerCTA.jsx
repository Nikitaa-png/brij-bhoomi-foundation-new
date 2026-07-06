import React, { useState, useRef } from "react";
import { Sparkles, Heart, Users, HelpCircle, CheckCircle, Info, ChevronDown, ChevronUp, Briefcase, GraduationCap, Award, Compass } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function VolunteerCTA() {
  const containerRef = useRef(null);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const opportunities = [
    {
      title: "Education Volunteer",
      desc: "Support children's education through structured teaching and resource setups.",
      points: ["Teaching & Mentoring", "Career Guidance", "Digital Literacy", "Spoken English", "Computer Education", "Library Development", "Scholarship Support"],
      ideal: "Teachers, Students, Professionals, Trainers",
      icon: <GraduationCap size={18} className="text-brij-accent" />,
    },
    {
      title: "Healthcare Volunteer",
      desc: "Assist during health camps and community medical checkup drives.",
      points: ["Medical Camps", "Blood Donation Drives", "Health Awareness Campaigns", "Nutrition Programs", "Mental Health Awareness", "Community Health Surveys"],
      ideal: "Doctors, Nurses, Medical Students, Healthcare Professionals",
      icon: <Heart size={18} className="text-brij-accent" />,
    },
    {
      title: "Environment Volunteer",
      desc: "Join campaigns for eco preservation, tree plantations, and stepwell cleanups.",
      points: ["Tree Plantation", "Cleanliness Drives", "Water Conservation", "Plastic-Free Campaigns", "Waste Management Awareness", "Climate Action Programs"],
      ideal: "Nature Lovers, Students, Community Groups",
      icon: <Sparkles size={18} className="text-brij-accent" />,
    },
    {
      title: "Women Empowerment Volunteer",
      desc: "Support vocational classes and entrepreneurship mentoring for local women.",
      points: ["Skill Development", "Financial Literacy", "Entrepreneurship", "Digital Education", "Career Counselling", "Leadership Training"],
      ideal: "Professionals, Trainers, Mentors",
      icon: <Users size={18} className="text-brij-accent" />,
    },
    {
      title: "Rural Development Volunteer",
      desc: "Participate in infrastructure support and social welfare surveys in villages.",
      points: ["Village Development Projects", "Community Awareness", "Infrastructure Support", "Education Programs", "Livelihood Development", "Social Surveys"],
      ideal: "Social Workers, Engineers, General volunteers",
      icon: <Compass size={18} className="text-brij-accent" />,
    },
    {
      title: "Event Volunteer",
      desc: "Help organize, coordinate, and host community campaigns and fundraising events.",
      points: ["Charity Events", "Awareness Campaigns", "Fundraising Programs", "Community Outreach", "CSR Activities", "Public Events"],
      ideal: "Event Managers, Students, Organizers",
      icon: <Award size={18} className="text-brij-accent" />,
    },
    {
      title: "Digital Volunteer",
      desc: "Contribute remotely by supporting design, writing, coding, or social media.",
      points: ["Social Media Management", "Graphic Design", "Video Editing", "Website Management", "Content Writing", "SEO & Digital Marketing", "AI & Technology Projects"],
      ideal: "Designers, Developers, Content Writers, IT Professionals",
      icon: <Briefcase size={18} className="text-brij-accent" />,
    },
  ];

  const journeySteps = [
    { step: "Step 1", title: "Registration", desc: "Complete the Volunteer Registration Form." },
    { step: "Step 2", title: "Review", desc: "Our team reviews your application." },
    { step: "Step 3", title: "Orientation", desc: "Attend an online or offline orientation session." },
    { step: "Step 4", title: "Project Selection", desc: "Choose your preferred project or initiative." },
    { step: "Step 5", title: "Make Impact", desc: "Start creating meaningful impact in your community." },
  ];

  const faqs = [
    {
      q: "Do I need previous experience?",
      a: "No. Training and guidance will be provided before you begin.",
    },
    {
      q: "Can I volunteer online?",
      a: "Yes. We offer both on-site and remote volunteering opportunities.",
    },
    {
      q: "Is there a minimum time commitment?",
      a: "You can volunteer for individual events or choose ongoing programs based on your availability.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. Active volunteers receive an official certificate upon successful completion of their volunteering period or assigned project.",
    },
    {
      q: "Can international volunteers participate?",
      a: "Yes. Subject to project requirements, remote opportunities, and applicable regulations, international volunteers are welcome.",
    },
  ];

  const volunteerFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="volunteer-cta" className="w-screen px-[8vw] py-28 lg:py-36 bg-[#F2E8D6] relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(volunteerFaqSchema) }}
      />
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-volunteer" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#F2E8D6] overflow-hidden z-0 pointer-events-none">
        {/* Soft Grainy Paper Noise Overlay (3% opacity) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-volunteer)" }} />
      </div>

      {/* Widescreen Wrapper */}
      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-20">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            Volunteer
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
            Become a Volunteer — Be the Change You Wish to See
          </h2>
          <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
            Your Time. Your Skills. Your Passion. Their Better Tomorrow.
          </p>
          <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
            At Brij Bhoomi Foundation, volunteers are the heart of every initiative. Every successful campaign, every child educated, every tree planted, every family supported, and every community empowered is possible because compassionate individuals choose to make a difference. Whether you're a student, working professional, entrepreneur, retired professional, or corporate employee, your contribution can create a lasting social impact. Change begins with one person. That person can be you.
          </p>
        </div>

        {/* Why Volunteer With Us */}
        <div className="cinematic-reveal space-y-4 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Why Volunteer With Us?</h3>
          <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal max-w-3xl">
            Volunteering is more than giving your time—it's about creating opportunities, transforming lives, and becoming part of a movement dedicated to building a stronger and more compassionate society. As a volunteer, you'll work alongside passionate individuals, social leaders, educators, healthcare professionals, and community members to solve real-world challenges.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Volunteer Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {opportunities.map((opp, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-4">
                  <div className="p-2.5 bg-[#F2E8D6] border border-[#D8C6A8] rounded-full w-fit shadow-sm">
                    {opp.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-sora font-semibold text-[#2E2E2E]">{opp.title}</h4>
                    <p className="text-xs text-[#555555] mt-1 leading-relaxed font-inter font-normal">{opp.desc}</p>
                  </div>
                  <ul className="space-y-1.5 pt-2 border-t border-[#D8C6A8]/20">
                    {opp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-[#555555] flex items-center gap-2 font-inter font-normal">
                        <span className="w-1.5 h-1.5 bg-[#B67A2A] rounded-full flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-3 border-t border-[#D8C6A8]/30">
                  <span className="text-[9px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold block mb-0.5">Ideal for:</span>
                  <p className="text-xs text-[#2E2E2E] font-inter font-normal italic leading-relaxed">{opp.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Volunteering & Internships */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Corporate */}
          <div className="lg:col-span-6 premium-card p-8 space-y-4 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Corporate Volunteering</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              We welcome organizations that want to engage employees in meaningful Corporate Social Responsibility (CSR) activities. Corporate volunteering opportunities include:
            </p>
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {[
                "Tree Plantation Drives",
                "Education Programs",
                "Blood Donation Camps",
                "Community Development",
                "Environmental Campaigns",
                "Employee Engagement Activities"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-xs text-[#3C372F] font-inter font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="lg:col-span-6 premium-card p-8 space-y-4 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Internship Opportunities</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Students can gain practical experience in social work, NGO operations, PR, IT, and marketing. Internships include mentorship, live projects, experience certificates, and performance-based recommendation letters. Experience fields:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {[
                "Social Work",
                "NGO Management",
                "Project Mgmt",
                "PR & Marketing",
                "Fundraising",
                "Human Resources",
                "Information Tech",
                "Research & Doc"
              ].map((item, idx) => (
                <div key={idx} className="p-2.5 bg-white border border-[#D8C6A8]/50 rounded-[4px] text-[10px] font-inter font-bold text-[#2E2E2E] shadow-sm hover:scale-[1.03] transition-all duration-300 flex items-center justify-center cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits of Volunteering & Who Can Volunteer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Benefits */}
          <div className="space-y-4 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Benefits of Volunteering</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              As a Brij Bhoomi Foundation volunteer, you will receive:
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                "Official Volunteer Certificate",
                "Hands-on Social Impact Experience",
                "Leadership Development",
                "Networking Opportunities",
                "Community Engagement Experience",
                "Professional Skill Enhancement",
                "Event Participation",
                "Recognition Awards"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 premium-card px-4 py-3 rounded-lg hover:shadow-md transition-shadow">
                  <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                  <span className="text-xs font-inter font-semibold text-[#2E2E2E]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Volunteer */}
          <div className="space-y-4 premium-card p-8 cinematic-reveal">
            <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Who Can Volunteer?</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-3">
              No prior volunteering experience is required—only a willingness to contribute. We welcome:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Students",
                "Working Professionals",
                "Teachers",
                "Doctors",
                "Engineers",
                "Designers",
                "Developers",
                "Entrepreneurs",
                "Homemakers",
                "Retired Professionals",
                "Corporate Employees",
                "NGOs & Community Groups",
                "Anyone passionate about social change"
              ].map((item, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-white border border-[#D8C6A8]/50 text-[10px] font-inter font-semibold text-[#2E2E2E] rounded-full hover:scale-[1.03] transition-transform duration-300 cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Volunteer Journey Timeline */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Volunteer Journey</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {journeySteps.map((step, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 text-center flex flex-col justify-between hover:shadow-md transition-all duration-500"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold">{step.step}</span>
                  <h4 className="text-sm font-sora font-semibold text-[#2E2E2E]">{step.title}</h4>
                  <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Testimonials */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Volunteer Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Volunteering with Brij Bhoomi Foundation gave me an opportunity to make a real difference while developing leadership and teamwork skills.",
              "Being part of the education initiative was one of the most rewarding experiences of my life.",
              "The foundation's professionalism, transparency, and community-focused approach make volunteering meaningful and impactful."
            ].map((quote, idx) => (
              <blockquote key={idx} className="p-8 premium-card flex flex-col justify-between hover:shadow-lg italic font-normal text-[#1F1F1F]">
                <p className="text-xs md:text-sm font-sora leading-relaxed">
                  "{quote}"
                </p>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Side-by-side: FAQs & Final CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-[#D8C6A8] pt-12">
          
          {/* Frequently Asked Questions (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-sora font-semibold text-[#2E2E2E] mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="premium-card overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#F2E8D6]/20 transition-all duration-300"
                      >
                        <span className="text-[13px] font-sora font-semibold text-[#2E2E2E] flex items-center gap-2.5">
                          <HelpCircle size={14} className="text-[#B67A2A] flex-shrink-0" />
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp size={14} className="text-[#555] flex-shrink-0" />
                        ) : (
                          <ChevronDown size={14} className="text-[#555] flex-shrink-0" />
                        )}
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-[200px] border-t border-[#D8C6A8]/50 py-4 px-5" : "max-h-0 overflow-hidden"
                        }`}
                      >
                        <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Final Call to Action (col-span-7) */}
          <div className="lg:col-span-7 bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 font-sora font-semibold block">
                Join Our Volunteer Community
              </span>
              <h3 className="text-xl md:text-2xl font-sora font-semibold tracking-tight text-white leading-tight">
                Become the Reason Someone Smiles Today
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-inter font-normal">
                Thousands of small acts of kindness create extraordinary change. Whether you contribute one day each month or dedicate your expertise to a long-term initiative, your support helps us build stronger communities and brighter futures.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-8 justify-center md:justify-start">
              <button
                onClick={() => alert("Volunteer registration portal opening...")}
                className="px-5 py-2.5 bg-white text-[#8B6F47] text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] shadow-md hover:scale-[1.04] active:scale-[0.97]"
              >
                🤝 Register as a Volunteer
              </button>
              <button
                onClick={() => alert("Opening calendar of upcoming events...")}
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] hover:scale-[1.04] active:scale-[0.97]"
              >
                📅 Join Upcoming Events
              </button>
              <a
                href="#donate-cta"
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
              >
                ❤️ Support Our Mission
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-transparent border border-white text-white text-[10px] font-sora font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-[3px] font-medium hover:scale-[1.04] active:scale-[0.97]"
              >
                📩 Contact Volunteer Team
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
