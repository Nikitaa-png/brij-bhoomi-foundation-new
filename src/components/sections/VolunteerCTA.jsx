import React, { useRef } from "react";
import { GraduationCap, Heart, Sparkles, Users, Compass, Award, Briefcase, CheckCircle } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import FaqAccordion from "../common/FaqAccordion";
import { volunteerOpportunities, journeySteps } from "../../data/volunteer";
import { volunteerFaqs } from "../../data/faqs";

const getIcon = (name) => {
  switch (name) {
    case "GraduationCap": return <GraduationCap size={18} className="text-brij-accent" />;
    case "Heart":         return <Heart size={18} className="text-brij-accent" />;
    case "Sparkles":      return <Sparkles size={18} className="text-brij-accent" />;
    case "Users":         return <Users size={18} className="text-brij-accent" />;
    case "Compass":       return <Compass size={18} className="text-brij-accent" />;
    case "Award":         return <Award size={18} className="text-brij-accent" />;
    case "Briefcase":     return <Briefcase size={18} className="text-brij-accent" />;
    default:              return <Award size={18} className="text-brij-accent" />;
  }
};

export default function VolunteerCTA() {
  const containerRef = useRef(null);

  const volunteerFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": volunteerFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="volunteer-cta" className="w-screen px-[8vw] py-28 lg:py-36 bg-transparent relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(volunteerFaqSchema) }}
      />
      
      <GrainyBackground 
        id="grainy-paper-volunteer" 
        bgClass="bg-[#F2E8D6]" 
        opacityClass="opacity-[0.05]" 
        matrixValue="0.03" 
      />

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
            {volunteerOpportunities.map((opp, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-500"
              >
                <div className="space-y-4">
                  <div className="p-2.5 bg-[#F2E8D6] border border-[#D8C6A8] rounded-full w-fit shadow-sm">
                    {getIcon(opp.iconName)}
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
              <FaqAccordion items={volunteerFaqs} iconStyle="chevron" />
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
