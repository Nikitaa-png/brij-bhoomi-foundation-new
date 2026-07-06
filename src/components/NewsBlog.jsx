import React, { useState, useRef } from "react";
import { BookOpen, Calendar, ArrowRight, CheckCircle, Mail, Sparkles, Heart, Users, HelpCircle, GraduationCap, Award, Compass, Globe } from "lucide-react";
import { useCinematicReveal } from "../hooks/useCinematicReveal";

export default function NewsBlog() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    { name: "Education", icon: "📚", count: 12 },
    { name: "Healthcare", icon: "🩺", count: 8 },
    { name: "Environment", icon: "🌱", count: 15 },
    { name: "Women Empowerment", icon: "👩", count: 10 },
    { name: "Rural Development", icon: "🌾", count: 9 },
    { name: "Youth Development", icon: "👨‍🎓", count: 7 },
    { name: "Volunteer Stories", icon: "❤️", count: 14 },
    { name: "CSR & ESG", icon: "🏢", count: 11 }
  ];

  const latestNews = [
    {
      title: "New Education Initiative Launched",
      date: "July 5, 2026",
      desc: "Introducing digital learning labs and school kit distribution to empower children in rural communities.",
      img: "/children_education.png",
      cat: "Education"
    },
    {
      title: "Free Healthcare Camp for Underserved Communities",
      date: "June 28, 2026",
      desc: "Over 500 patients received free consultations, preventive health screenings, and free medicines.",
      img: "/community_workshop.png",
      cat: "Healthcare"
    },
    {
      title: "Tree Plantation Drive for a Greener Future",
      date: "June 20, 2026",
      desc: "Volunteers and corporate partners joined hands to plant 1,000 saplings in sacred groves.",
      img: "/eco_volunteers.png",
      cat: "Environment"
    },
    {
      title: "Women Skill Development Workshop Completed",
      date: "June 12, 2026",
      desc: "Empowering 50 women through vocational tailorship, financial literacy, and entrepreneurship skills.",
      img: "/artisan_woman.png",
      cat: "Women Empowerment"
    },
    {
      title: "Youth Leadership Program Successfully Conducted",
      date: "June 05, 2026",
      desc: "Inspiring youth leadership, civic responsibility, and soft skill development in community schools.",
      img: "/sanjhi_art.png",
      cat: "Youth Development"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Brij Bhoomi Foundation Blog",
    "description": "Insights, Stories & Updates from Brij Bhoomi Foundation on education, healthcare, and rural empowerment initiatives.",
    "publisher": {
      "@type": "NGO",
      "name": "Brij Bhoomi Foundation",
      "logo": "https://www.brijbhoomifoundation.org/logo.png"
    },
    "blogPost": latestNews.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "datePublished": "2026-06-20",
      "description": article.desc,
      "image": `https://www.brijbhoomifoundation.org${article.img}`,
      "author": {
        "@type": "Organization",
        "name": "Brij Bhoomi Foundation"
      }
    }))
  };

  return (
    <section id="news-blog" className="w-screen py-28 px-[8vw] lg:py-36 bg-[#FCFAF5] relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* SVG Grainy Noise Filter */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="grainy-paper-news" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" />
          </filter>
        </defs>
      </svg>

      {/* Warm Background layer */}
      <div className="absolute inset-0 bg-[#FCFAF5] overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay animate-drift-texture" style={{ filter: "url(#grainy-paper-news)" }} />
      </div>

      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-20">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            Insights & Updates
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
            News & Blog
          </h2>
          <p className="cinematic-reveal text-sm font-semibold text-[#B67A2A] leading-relaxed font-inter">
            Insights, Stories & Updates That Inspire Change
          </p>
          <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
            Stay connected with the latest updates from Brij Bhoomi Foundation. Explore stories, project highlights, awareness articles, volunteer experiences, CSR collaborations, and community initiatives that reflect our commitment to creating sustainable social impact.
          </p>
        </div>

        {/* Featured Story */}
        <div className="cinematic-reveal border-t border-[#D8C6A8] pt-12">
          <span className="text-[10px] uppercase tracking-wider text-[#B67A2A] font-sora font-bold mb-4 block">Featured Story</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FAF7F0] border border-[#D8C6A8]/70 rounded-[24px] overflow-hidden hover:shadow-md transition-editorial items-stretch group">
            {/* Left side cover image */}
            <div className="lg:col-span-7 h-64 lg:h-auto relative min-h-[300px] overflow-hidden">
              <img
                src="/sacred_groves.png"
                alt="Transforming Communities Through Collective Action"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            {/* Right side content */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-[#FCFAF5]">
              <div className="space-y-4">
                <span className="px-3 py-1 bg-[#8B6F47] text-white text-[8px] font-sora font-semibold uppercase tracking-wider rounded-full w-fit block">
                  Cover Story
                </span>
                <h3 className="text-xl md:text-2xl font-sora font-semibold text-[#2E2E2E] leading-tight">
                  Transforming Communities Through Collective Action
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                  Discover how our education, healthcare, environmental, and community development initiatives are making a meaningful difference across communities. From grassroots tree planting to digital training classes, collective contribution shapes local empowerment.
                </p>
              </div>
              <button
                onClick={() => alert("Loading full featured story details...")}
                className="mt-8 flex items-center gap-2 text-xs font-inter font-semibold text-[#8B6F47] hover:text-black transition-all text-left group/btn"
              >
                Read Full Story <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article, idx) => (
              <div 
                key={idx}
                className="premium-card overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                  <span className="absolute top-3 left-3 bg-[#FCFAF5]/95 border border-[#D8C6A8]/50 px-2.5 py-1 rounded-full text-[8px] font-sora font-semibold text-[#8B6F47] uppercase tracking-wider">
                    {article.cat}
                  </span>
                </div>
                <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] text-[#888] font-inter font-medium flex items-center gap-1">
                      <Calendar size={11} /> {article.date}
                    </span>
                    <h4 className="text-[14px] font-sora font-semibold text-[#2E2E2E] leading-snug group-hover:text-brij-accent transition-colors duration-300">{article.title}</h4>
                    <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">{article.desc}</p>
                  </div>
                  <button
                    onClick={() => alert(`Opening article: ${article.title}`)}
                    className="pt-4 text-[10px] font-inter font-bold text-[#8B6F47] hover:text-black transition-colors duration-300 inline-flex items-center gap-1 w-fit text-left group/btn"
                  >
                    Read Article <ArrowRight size={10} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Categories */}
        <div className="cinematic-reveal space-y-6 border-t border-[#D8C6A8] pt-12">
          <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Blog Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-[#FCFAF5] border border-[#D8C6A8] p-4 rounded-[12px] flex items-center justify-between hover:shadow-sm hover:border-[#8B6F47] transition-editorial cursor-pointer"
                onClick={() => alert(`Filtering articles by category: ${cat.name}`)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{cat.icon}</span>
                  <span className="text-[10px] font-inter font-semibold text-[#2E2E2E]">{cat.name}</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-[#FAF7F0] border border-[#D8C6A8]/50 rounded-full font-sora font-semibold text-[#8B6F47]">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stories & Press Releases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#D8C6A8] pt-12">
          {/* Impact Stories */}
          <div className="space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Impact Stories</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Read inspiring stories about students, women, families, volunteers, and communities whose lives have been positively impacted through our initiatives:
            </p>
            <div className="space-y-4">
              {[
                { title: "📚 Empowering Radha's Dream", desc: "How rural computer classes helped Radha qualify for higher technical colleges." },
                { title: "🩺 Healing the Community", desc: "Direct healthcare aid provided to village elders through our mobile outreach." },
                { title: "🌱 Regenerating Sacred Groves", desc: "Local villagers reclaiming traditional ecology through native tree plantation drives." }
              ].map((story, idx) => (
                <div key={idx} className="bg-[#FCFAF5] border border-[#D8C6A8] p-4 rounded-[16px] space-y-1 hover:shadow-sm transition-editorial">
                  <h4 className="text-[11px] font-sora font-semibold text-[#2E2E2E]">{story.title}</h4>
                  <p className="text-[9px] text-[#555555] leading-relaxed font-inter font-normal">{story.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Press Releases */}
          <div className="space-y-6 cinematic-reveal">
            <h3 className="text-xl font-sora font-semibold text-[#2E2E2E]">Press Releases</h3>
            <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
              Stay updated with our latest announcements, partnerships, campaigns, annual reports, and organizational milestones:
            </p>
            <div className="space-y-4">
              {[
                { date: "July 01, 2026", title: "Brij Bhoomi Foundation Welcomes Strategic CSR Collaborations", desc: "Announcement of new green initiative partnership alignments." },
                { date: "June 15, 2026", title: "Release of FY2026 Annual Social Impact & Governance Report", desc: "Detailed summary of structural achievements and audited fund distribution." },
                { date: "May 20, 2026", title: "Launch of Community Water Harvesting Campaign in Rural Areas", desc: "Partnership with local government agencies to restore local stepwells." }
              ].map((pr, idx) => (
                <div key={idx} className="bg-[#FCFAF5] border border-[#D8C6A8] p-4 rounded-[16px] space-y-2 hover:shadow-sm transition-editorial">
                  <span className="text-[8px] text-[#8B6F47] font-sora font-bold uppercase tracking-wider">{pr.date}</span>
                  <div>
                    <h4 className="text-[11px] font-sora font-semibold text-[#2E2E2E] leading-tight">{pr.title}</h4>
                    <p className="text-[9px] text-[#555555] leading-relaxed font-inter font-normal mt-0.5">{pr.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Read Our Blog & Newsletter Signup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-[#D8C6A8] pt-12">
          
          {/* Why Read Our Blog (col-span-7) */}
          <div className="lg:col-span-7 bg-[#FCFAF5] border border-[#D8C6A8] p-8 rounded-[24px] flex flex-col justify-between cinematic-reveal">
            <div>
              <h3 className="text-lg font-sora font-semibold text-[#2E2E2E] mb-3">Why Read Our Blog?</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal mb-6">
                Our blog aims to connect, inform, and drive community led change:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Educate and inspire social change",
                  "Share best practices in rural growth",
                  "Promote sustainable development targets",
                  "Encourage volunteering and local outreach",
                  "Build awareness around critical social issues"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-[#B67A2A] flex-shrink-0" />
                    <span className="text-[10px] text-[#3C372F] font-inter font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Subscription (col-span-5) */}
          <div className="lg:col-span-5 bg-[#FCFAF5] border border-[#D8C6A8] p-8 rounded-[24px] flex flex-col justify-between shadow-sm cinematic-reveal">
            <div className="space-y-3">
              <h3 className="text-lg font-sora font-semibold text-[#2E2E2E]">Newsletter</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                Subscribe to receive latest news, upcoming events, volunteer opportunities, success stories, and campaign updates directly in your inbox.
              </p>
            </div>
            <div className="pt-6">
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

        </div>

        {/* Final CTA Block */}
        <div className="cinematic-reveal bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left flex flex-col justify-between max-w-4xl mx-auto">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-sora font-semibold block">
              Together, We Can Inspire Change
            </span>
            <h3 className="text-xl md:text-2xl font-sora font-semibold tracking-tight text-white leading-tight">
              Every story has the power to inspire action.
            </h3>
            <p className="text-[11px] text-white/80 leading-relaxed font-inter font-normal">
              Stay informed, stay connected, and join us in creating a better tomorrow.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2.5 pt-6 justify-center md:justify-start">
            <a
              href="#news-blog"
              className="px-4 py-2 bg-white text-[#8B6F47] text-[9px] font-sora font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all rounded-sm shadow-sm"
            >
              📰 Read Latest Articles
            </a>
            <button
              onClick={() => alert("Opening Newsletter subscription portal...")}
              className="px-4 py-2 bg-transparent border border-white text-white text-[9px] font-sora font-semibold uppercase tracking-wider hover:text-white/85 transition-all rounded-sm font-medium"
            >
              📩 Subscribe to Newsletter
            </button>
            <button
              onClick={() => alert("Thank you for your interest! Please contact us at support@brijbhoomi.org to write for us.")}
              className="px-4 py-2 bg-transparent border border-white text-white text-[9px] font-sora font-semibold uppercase tracking-wider hover:text-white/85 transition-all rounded-sm font-medium"
            >
              ✍️ Write for Us
            </button>
            <a
              href="#donate-cta"
              className="px-4 py-2 bg-transparent border border-white text-white text-[9px] font-sora font-semibold uppercase tracking-wider hover:text-white/85 transition-all rounded-sm font-medium"
            >
              ❤️ Support Our Mission
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
