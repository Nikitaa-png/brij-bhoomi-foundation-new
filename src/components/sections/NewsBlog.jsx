import React, { useState, useRef } from "react";
import { Mail, Calendar, ArrowRight, BookOpen, Search } from "lucide-react";
import { useCinematicReveal } from "../../hooks/useCinematicReveal";
import GrainyBackground from "../common/GrainyBackground";
import { categories, latestNews } from "../../data/news";

export default function NewsBlog() {
  const containerRef = useRef(null);
  useCinematicReveal(containerRef);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const filteredNews = latestNews.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.cat === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <section id="news-blog" className="w-screen py-28 px-[8vw] lg:py-36 bg-transparent relative z-20 border-t border-[#D8C6A8] overflow-hidden text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <GrainyBackground 
        id="grainy-paper-news" 
        bgClass="bg-[#FCFAF5]" 
        opacityClass="opacity-[0.04]" 
        matrixValue="0.03" 
      />

      {/* Content Wrapper */}
      <div ref={containerRef} className="w-full max-w-none relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-6">
          <span className="cinematic-reveal text-[11px] uppercase tracking-[0.3em] text-[#B67A2A] font-sora font-semibold block">
            News & Stories
          </span>
          <h2 className="cinematic-reveal text-3xl md:text-5xl font-sora font-semibold tracking-tight leading-tight text-[#2E2E2E]">
            Insights, Stories & Campaign Updates
          </h2>
          <p className="cinematic-reveal text-xs md:text-sm text-[#555555] leading-relaxed font-inter font-normal">
            Stay updated with the latest news, announcements, baseline reports, volunteer features, and community impact stories direct from Brij Bhoomi Foundation’s operations.
          </p>
        </div>

        {/* Search and Filters row */}
        <div className="cinematic-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#D8C6A8] pt-8">
          {/* Categories slider */}
          <div className="lg:col-span-8 flex flex-wrap gap-2.5">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 border rounded-full text-xs font-inter font-semibold transition-all duration-300 ${
                activeCategory === "All"
                  ? "bg-[#8B6F47] text-white border-[#8B6F47]"
                  : "bg-white border-[#D8C6A8]/60 text-[#2E2E2E] hover:border-[#8B6F47]"
              }`}
            >
              All Categories
            </button>
            {categories.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(c.name)}
                className={`px-4 py-2 border rounded-full text-xs font-inter font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === c.name
                    ? "bg-[#8B6F47] text-white border-[#8B6F47]"
                    : "bg-white border-[#D8C6A8]/60 text-[#2E2E2E] hover:border-[#8B6F47]"
                }`}
              >
                <span>{c.icon}</span> <span>{c.name}</span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-4 top-3 text-[#555]/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search news and stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D8C6A8] text-xs text-[#2E2E2E] placeholder-[#555555]/55 focus:outline-none focus:border-[#8B6F47] rounded-full shadow-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Stories Grid */}
        <div className="cinematic-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((post, idx) => (
              <div 
                key={idx} 
                className="premium-card overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="h-[200px] overflow-hidden relative border-b border-[#D8C6A8]/30">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 border border-[#D8C6A8]/50 rounded-full text-[9px] font-sora font-semibold text-[#8B6F47] uppercase tracking-wider">
                      {post.cat}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] text-[#555]/60 flex items-center gap-1 font-inter font-normal">
                      <Calendar size={11} /> {post.date}
                    </span>
                    <h3 className="text-sm font-sora font-semibold text-[#2E2E2E] leading-snug hover:text-[#B67A2A] transition-colors duration-300 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                      {post.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-3">
                  <button 
                    onClick={() => alert(`Opening article details: ${post.title}`)}
                    className="flex items-center gap-1.5 text-[#8B6F47] hover:text-black text-[10px] font-inter font-bold uppercase tracking-wider transition-colors duration-300"
                  >
                    Read Full Story <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-[#555] text-xs font-inter">
              No matching stories found. Check another search query or category list.
            </div>
          )}
        </div>

        {/* Newsletter Subscription Block */}
        <div className="cinematic-reveal bg-[#8B6F47] text-white p-8 md:p-12 rounded-[24px] border border-[#8B6F47]/20 shadow-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/80 font-sora font-semibold block">
              Join Our Newsletter
            </span>
            <h3 className="text-xl md:text-2xl font-sora font-semibold text-white leading-tight">
              Stay Connected to Social Impact
            </h3>
            <p className="text-xs text-white/80 font-inter font-normal">
              Subscribe to receive curated monthly updates, audited impact summaries, and notices of regional events directly to your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto min-w-[280px] sm:min-w-[340px]">
            {isSubscribed ? (
              <div className="text-center md:text-left p-3.5 bg-white/10 border border-white/20 rounded-[3px] text-xs font-inter font-medium text-white/95">
                🎉 Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:bg-white/15 focus:border-white transition-all duration-300 rounded-[3px] flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-[#8B6F47] text-[10px] font-sora font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-[3px] flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
