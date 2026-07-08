import React, { useState } from "react";
import { Award, Download, ShieldCheck, Eye, Calendar, Sparkles } from "lucide-react";

export default function VolunteerCertificates() {
  const [isDownloading, setIsDownloading] = useState(null);

  const certificates = [
    { 
      id: 1, 
      title: "Certificate of Appreciation: Primary School Tutoring Drive", 
      recipient: "Raghav Sharma", 
      campaign: "Digital Literacy Campaign", 
      hours: 24, 
      date: "25 May 2026", 
      certId: "CERT-BBF-2026-092", 
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=400"
    },
    { 
      id: 2, 
      title: "Certificate of Participation: Govardhan Community Health Camp", 
      recipient: "Raghav Sharma", 
      campaign: "Healthcare Diagnostics camp", 
      hours: 16, 
      date: "19 May 2026", 
      certId: "CERT-BBF-2026-061", 
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const handleDownload = (id) => {
    setIsDownloading(id);
    setTimeout(() => {
      setIsDownloading(null);
      alert(`Certificate downloaded successfully as PDF! Transaction Ref: CERT-BBF-2026-0${id}`);
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Recognition</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          My Certificates
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          View and download your official certificates of appreciation issued by Brij Bhoomi Foundation for logged service milestones.
        </p>
      </div>

      {/* Grid: Certificate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] overflow-hidden shadow-sm hover:border-[#8B6F47]/50 transition-all duration-300 flex flex-col justify-between"
          >
            
            {/* Visual Frame */}
            <div className="aspect-[4/3] w-full bg-white relative border-b border-[#D8C6A8]/25 p-6 flex flex-col justify-between items-center text-center">
              
              {/* Decorative border inside */}
              <div className="absolute inset-4 border border-[#D8C6A8]/50 rounded-lg pointer-events-none"></div>
              
              <div className="space-y-1.5 pt-2">
                <span className="text-[7px] uppercase tracking-[0.2em] text-[#8B6F47] font-bold">Brij Bhoomi Foundation</span>
                <h4 className="text-[10px] font-sora font-semibold text-[#111111] uppercase tracking-wider">Certificate of Appreciation</h4>
              </div>

              <div className="space-y-2 my-2 z-10">
                <p className="text-[8px] text-[#6B7280] uppercase tracking-wider font-medium">Proudly presented to</p>
                <h3 className="text-base font-sora font-semibold text-[#111111]">{cert.recipient}</h3>
                <p className="text-[8px] text-[#6B7280] leading-normal max-w-[240px] mx-auto font-inter">
                  for outstanding service and contribution of <span className="font-semibold text-[#111111]">{cert.hours} Hours</span> in the {cert.campaign} initiative.
                </p>
              </div>

              <div className="flex justify-between items-end w-full px-4 pb-2 z-10 text-[8px] text-[#6B7280]">
                <div className="text-left flex flex-col">
                  <span>Dated: {cert.date}</span>
                  <span className="font-mono mt-0.5">{cert.certId}</span>
                </div>
                <div className="text-right flex flex-col items-center">
                  <ShieldCheck size={20} className="text-[#8B6F47]" />
                  <span className="text-[6px] uppercase font-bold tracking-widest mt-1">Verified Audit</span>
                </div>
              </div>

            </div>

            {/* Actions Card Footer */}
            <div className="p-4 bg-white flex justify-between items-center text-xs">
              <span className="text-[10px] text-[#6B7280] font-semibold flex items-center gap-1">
                <Calendar size={11} className="text-[#8B6F47]" /> {cert.date}
              </span>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => alert(`Certificate verification code: ${cert.certId}`)} 
                  className="px-3 py-1.5 border border-[#D8C6A8]/70 hover:bg-[#F2E8D6]/20 transition-all text-[10px] font-semibold uppercase tracking-wider rounded-[2px] flex items-center gap-1 text-[#111111]"
                >
                  <Eye size={12} /> Verify
                </button>
                <button 
                  onClick={() => handleDownload(cert.id)} 
                  disabled={isDownloading === cert.id}
                  className="px-3.5 py-1.5 bg-[#111111] text-white hover:bg-[#8B6F47] transition-all text-[10px] font-semibold uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Download size={12} /> 
                  <span>{isDownloading === cert.id ? "Downloading..." : "PDF"}</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
