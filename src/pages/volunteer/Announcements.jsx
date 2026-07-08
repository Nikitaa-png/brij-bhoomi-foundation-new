import React from "react";
import { Megaphone, Calendar, Clock, AlertTriangle, Info, CheckCircle } from "lucide-react";

export default function VolunteerAnnouncements() {
  const announcementsList = [
    { 
      id: 1, 
      title: "Urgent cleanup drive schedule updates for Radha Kund", 
      content: "Due to heavy rains expected on Saturday evening, the cleaning drive will commence early Sunday at 07:00 AM instead of 08:30 AM. Gloves, raincoats, and boots will be provided at the site entrance. Please adjust your travel timelines.", 
      time: "2 hours ago", 
      date: "08 July 2026",
      type: "Urgent", 
      author: "Devendra S. (Heritage Coordinator)" 
    },
    { 
      id: 2, 
      title: "Digital Tutoring certificate roll-outs", 
      content: "All certificates of appreciation for the May-June primary classroom tutoring drive have been finalized. You can view, audit and download your credential PDF files directly from the Certificates tab in your dashboard.", 
      time: "1 day ago", 
      date: "07 July 2026",
      type: "General", 
      author: "NGO Admin Office" 
    },
    { 
      id: 3, 
      title: "CSR partner TechCorp joining Vrindavan plantation drive", 
      content: "We are pleased to welcome 25 corporate representatives from TechCorp who will be joining our afforestation campaign at Kesi Ghat. We will have joint tea and orientation sessions post-plantation.", 
      time: "3 days ago", 
      date: "05 July 2026",
      type: "Update", 
      author: "Shyam Sundar (Environment lead)" 
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Broadcasting</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          Desk Announcements
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          Stay informed about critical campaign adjustments, weather alerts, and official volunteer recognition rollouts.
        </p>
      </div>

      {/* Announcements Timeline */}
      <div className="max-w-3xl space-y-6">
        {announcementsList.map((ann) => (
          <div 
            key={ann.id} 
            className={`bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm hover:border-[#8B6F47]/50 transition-all duration-300 flex gap-4 items-start text-left relative ${
              ann.type === 'Urgent' ? 'border-l-4 border-l-red-500' : 'border-l-4 border-l-[#8B6F47]'
            }`}
          >
            {/* Icon Column */}
            <div className={`p-2.5 rounded-lg shrink-0 ${
              ann.type === 'Urgent' ? 'bg-red-50 text-red-500' : ann.type === 'Update' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-600'
            }`}>
              {ann.type === 'Urgent' ? <AlertTriangle size={16} /> : ann.type === 'Update' ? <Info size={16} /> : <CheckCircle size={16} />}
            </div>

            {/* Content Column */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xs font-sora font-semibold text-[#111111]">{ann.title}</h3>
                <span className={`text-[8px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                  ann.type === 'Urgent' ? 'bg-red-50 text-red-700' : 'bg-[#F2E8D6] text-[#8B6F47]'
                }`}>
                  {ann.type}
                </span>
              </div>
              
              <p className="text-xs text-[#6B7280] leading-relaxed font-inter">{ann.content}</p>

              <div className="flex items-center gap-3 pt-3 border-t border-[#D8C6A8]/15 text-[10px] text-[#6B7280]">
                <span>By {ann.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock size={10} /> {ann.time} ({ann.date})</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
