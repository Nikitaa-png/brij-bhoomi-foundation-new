import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  Clock, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  CheckCircle,
  HelpCircle,
  Megaphone,
  ArrowRight
} from "lucide-react";

export default function VolunteerHome() {
  const stats = [
    { label: "Volunteered Hours", value: "48 Hours", detail: "Active for 3 months", icon: Clock },
    { label: "Assigned Campaigns", value: "2 Projects", detail: "Education & Heritage", icon: Briefcase },
    { label: "Registered Events", value: "3 Upcoming", detail: "Next event on Sunday", icon: Calendar },
  ];

  const assignedCampaigns = [
    { name: "Digital Literacy for Rural Youth", role: "Primary Tutor", description: "Providing interactive computer workshops and spoken English modules for schoolchildren.", progress: 40, status: "Active" },
    { name: "Radha Kund Heritage Restoration", role: "Site Coordinator", description: "Assisting administrative lead in tracking water preservation drives and clearing stepwell debris.", progress: 65, status: "Active" }
  ];

  const upcomingRegisteredEvents = [
    { name: "Radha Kund Stepwell Cleanup", date: "Sunday, 12 July", time: "07:00 AM - 11:00 AM", location: "Radha Kund, Govardhan" },
    { name: "Weekly Computer Training Class", date: "Wednesday, 15 July", time: "03:00 PM - 05:00 PM", location: "Brij Center, Vrindavan" }
  ];

  const achievements = [
    { title: "Heritage Guardian", desc: "Participated in 3 stepwell cleanliness drives.", icon: Award },
    { title: "First Cohort", desc: "Joined Brij Bhoomi Foundation volunteer group in 2026.", icon: CheckCircle }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Cockpit</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            Welcome Back, Raghav
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            "The best way to find yourself is to lose yourself in the service of others." Thank you for making a difference in Brij!
          </p>
        </div>

        <div>
          <Link
            to="/volunteer-portal/events"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all duration-300 rounded-[2px]"
          >
            Find Event Drive <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="premium-card p-6 flex flex-col justify-between min-h-[120px]">
            <div className="flex justify-between items-start">
              <span className="text-xs text-[#6B7280] font-medium tracking-wide">{stat.label}</span>
              <div className="p-2 bg-[#F2E8D6]/50 rounded-lg text-[#8B6F47]">
                <stat.icon size={16} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-sora font-semibold text-[#111111] tracking-tight">{stat.value}</h3>
              <p className="text-[10px] text-[#6B7280] mt-1">{stat.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Campaigns & Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Active Campaigns (Col Span 8) */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20">My Active Campaigns</h2>
          
          <div className="space-y-4">
            {assignedCampaigns.map((camp, index) => (
              <div key={index} className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm hover:border-[#8B6F47]/50 transition-all duration-300 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-sora font-semibold text-[#111111]">{camp.name}</h3>
                    <p className="text-[10px] text-[#8B6F47] uppercase tracking-wider font-semibold mt-1">Role: {camp.role}</p>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-semibold bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded">
                    {camp.status}
                  </span>
                </div>
                
                <p className="text-xs text-[#6B7280] leading-relaxed font-inter mt-3">{camp.description}</p>

                <div className="mt-4 pt-3.5 border-t border-[#D8C6A8]/20 flex items-center gap-4 text-xs">
                  <span className="text-[#6B7280]">Campaign Progress:</span>
                  <div className="flex-1 h-1.5 bg-[#F2E8D6] rounded-full overflow-hidden">
                    <div className="h-full bg-[#8B6F47]" style={{ width: `${camp.progress}%` }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-[#111111]">{camp.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Events and Badges (Col Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Upcoming Registered Events */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm text-left">
            <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20 mb-4">My Next Events</h3>
            
            <div className="space-y-4">
              {upcomingRegisteredEvents.map((e, index) => (
                <div key={index} className="space-y-1.5">
                  <h4 className="text-xs font-semibold text-[#111111]">{e.name}</h4>
                  <p className="text-[10px] text-[#6B7280] leading-snug">{e.date} • {e.time}</p>
                  <p className="text-[9px] text-[#8B6F47] uppercase font-semibold">{e.location}</p>
                  {index === 0 && <div className="h-[1px] bg-[#D8C6A8]/20 my-2"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Badges / Achievements */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm text-left">
            <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20 mb-4">Earned Badges</h3>
            
            <div className="space-y-3.5">
              {achievements.map((ach, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="p-2 bg-[#F2E8D6] text-[#8B6F47] rounded-lg">
                    <ach.icon size={15} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#111111] leading-none">{ach.title}</h4>
                    <p className="text-[9px] text-[#6B7280] mt-1">{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
