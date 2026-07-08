import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, User, HelpCircle } from "lucide-react";

export default function VolunteerContact() {
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const coordinator = {
    name: "Devendra Singh",
    role: "Lead Field Operations Coordinator",
    email: "devendra.singh@brijbhoomifoundation.org",
    phone: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    bio: "Coordinating heritage restoration projects and environmental cleanliness drives in Mathura-Vrindavan since 2022."
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!subject || !msg) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setSubject("");
      setMsg("");
      setTimeout(() => setSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Support</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          Contact Coordinator
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          Have queries about scheduled drives, log hours, or need support? Reach out to your local campaign lead.
        </p>
      </div>

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 text-xs px-4 py-3 rounded-lg flex items-center gap-2 animate-in fade-in duration-300 max-w-3xl">
          <CheckCircle2 size={14} className="text-green-600" />
          <span>Message dispatched to {coordinator.name} successfully! We usually reply within 24 hours.</span>
        </div>
      )}

      {/* Split Grid: Coordinator Contact Card vs Message Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-4xl">
        
        {/* Left: Coordinator Contact Card (Col Span 5) */}
        <div className="md:col-span-5 bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm space-y-5">
          
          <div className="text-center pb-4 border-b border-[#D8C6A8]/20 space-y-3">
            <img
              src={coordinator.avatar}
              alt={coordinator.name}
              className="w-16 h-16 rounded-full object-cover mx-auto border border-[#D8C6A8]"
            />
            <div>
              <h3 className="text-sm font-sora font-semibold text-[#111111]">{coordinator.name}</h3>
              <span className="text-[9px] uppercase tracking-wider text-[#8B6F47] font-bold mt-1 block">{coordinator.role}</span>
            </div>
          </div>

          <p className="text-xs text-[#6B7280] leading-relaxed text-center font-inter">{coordinator.bio}</p>

          <div className="space-y-2.5 text-xs pt-2">
            <div className="flex items-center gap-2.5 text-[#111111] bg-white p-2.5 border border-[#D8C6A8]/30 rounded-lg">
              <Mail size={13} className="text-[#8B6F47] shrink-0" />
              <span className="truncate">{coordinator.email}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#111111] bg-white p-2.5 border border-[#D8C6A8]/30 rounded-lg">
              <Phone size={13} className="text-[#8B6F47] shrink-0" />
              <span>{coordinator.phone}</span>
            </div>
          </div>

        </div>

        {/* Right: Direct message form (Col Span 7) */}
        <div className="md:col-span-7 bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
          <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20 mb-4">Send Direct Inquiry</h3>
          
          <form onSubmit={handleSendMessage} className="space-y-4 text-xs text-left">
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Subject Inquiry</label>
              <input 
                required 
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Schedule conflicts for Sunday cleanup" 
                className="w-full p-2.5 border border-[#D8C6A8]/50 rounded-lg bg-white" 
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Detail Message</label>
              <textarea 
                required 
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Please state details regarding your request or inquiry..." 
                className="w-full p-2.5 border border-[#D8C6A8]/50 rounded-lg bg-white" 
              />
            </div>
            <button 
              type="submit" 
              disabled={sending}
              className="w-full py-2.5 bg-[#111111] text-white font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#8B6F47] transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              <span>{sending ? "Dispatching..." : "Send Message"}</span>
              <Send size={12} />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
