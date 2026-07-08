import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  User, 
  Briefcase, 
  Award, 
  Clock, 
  Mail, 
  Phone, 
  X, 
  ChevronRight,
  AlertCircle
} from "lucide-react";

export default function AdminVolunteers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const volunteersList = [
    { 
      id: 1, 
      name: "Devendra Singh", 
      email: "devendra.singh@gmail.com",
      phone: "+91 98765 43210",
      status: "Onboarding", 
      program: "Radha Kund Restoration", 
      location: "Vrindavan", 
      joinedDate: "08 July 2026", 
      hours: 0,
      skills: ["Team Leadership", "Historical Research", "Water Engineering"],
      interests: ["Heritage Preservation", "Clean Water Campaigns"],
      availability: "Weekends only"
    },
    { 
      id: 2, 
      name: "Meera Patel", 
      email: "meera.patel@yahoo.com",
      phone: "+91 87654 32109",
      status: "Active", 
      program: "Education Support", 
      location: "Mathura", 
      joinedDate: "12 May 2026", 
      hours: 48,
      skills: ["Mathematics Teaching", "English Literacy", "Child Psychology"],
      interests: ["Primary Tutoring", "Library Infrastructure Setup"],
      availability: "Mon, Wed, Fri (Afternoons)"
    },
    { 
      id: 3, 
      name: "Dr. Alok Sen", 
      email: "alok.sen@health.org",
      phone: "+91 76543 21098",
      status: "Active", 
      program: "Healthcare Camp", 
      location: "Govardhan", 
      joinedDate: "05 June 2026", 
      hours: 32,
      skills: ["Pediatric Care", "General Medicine", "Emergency First Aid"],
      interests: ["Rural Health Diagnostics", "Nutrition Campaigns"],
      availability: "Monthly camps, custom emergency calls"
    },
    { 
      id: 4, 
      name: "Radhika Malhotra", 
      email: "radhika.m@empower.in",
      phone: "+91 99887 76655",
      status: "Active", 
      program: "Women Empowerment", 
      location: "Vrindavan", 
      joinedDate: "20 January 2026", 
      hours: 120,
      skills: ["Apparel Design", "Tailoring Instruction", "Financial Literacy"],
      interests: ["Craft Workshops", "Micro-loans Coaching"],
      availability: "Saturdays full day"
    },
    { 
      id: 5, 
      name: "Shyam Sundar", 
      email: "shyam.s@eco.com",
      phone: "+91 88776 65544",
      status: "Inactive", 
      program: "Environment Drive", 
      location: "Barsana", 
      joinedDate: "15 April 2025", 
      hours: 74,
      skills: ["Organic Horticulture", "Composting", "Public Outreach"],
      interests: ["Afforestation", "Water Harvesting Systems"],
      availability: "On-call basis only"
    }
  ];

  const filteredVolunteers = volunteersList.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          v.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          v.program.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || v.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Management</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            Volunteers Database
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Review and coordinate volunteer applications, assigned programs, and total logged contribution hours.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search name, location, or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#D8C6A8]/50 bg-white text-xs text-[#111111] rounded-lg focus:outline-none focus:border-[#8B6F47] transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <Filter size={12} />
            <span>Status:</span>
          </div>

          <div className="flex bg-white border border-[#D8C6A8]/50 rounded-lg p-0.5">
            {["all", "active", "onboarding", "inactive"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 text-[10px] uppercase font-semibold tracking-wider rounded-md transition-all ${
                  statusFilter === status
                    ? "bg-[#F2E8D6] text-[#8B6F47]"
                    : "text-[#6B7280] hover:text-[#111111]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteers Cards/Table Container */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          {filteredVolunteers.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D8C6A8]/20 bg-[#FAF9F6]/50">
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold pl-6">Volunteer</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Assigned Program</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Location</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Joined Date</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Status</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-right pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8C6A8]/10 text-xs">
                {filteredVolunteers.map((v) => (
                  <tr key={v.id} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    
                    {/* Volunteer Identity */}
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F2E8D6] text-[#8B6F47] font-sora font-semibold text-[11px] flex items-center justify-center">
                          {v.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-left">
                          <div className="font-sora font-semibold text-xs text-[#111111]">{v.name}</div>
                          <div className="text-[10px] text-[#6B7280] mt-0.5">{v.email}</div>
                        </div>
                      </div>
                    </td>

                    {/* Assigned Program */}
                    <td className="p-4 text-[#6B7280] font-medium">{v.program}</td>

                    {/* Location */}
                    <td className="p-4 text-[#6B7280]">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-[#8B6F47]" />
                        <span>{v.location}</span>
                      </div>
                    </td>

                    {/* Joined Date */}
                    <td className="p-4 text-[#6B7280]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-[#8B6F47]" />
                        <span>{v.joinedDate}</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="p-4">
                      <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold rounded-md ${
                        v.status === 'Active' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : v.status === 'Onboarding' 
                          ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {v.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right pr-6">
                      <button
                        onClick={() => setSelectedVolunteer(v)}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-[#8B6F47] hover:underline"
                      >
                        View Details <ChevronRight size={12} />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center space-y-3">
              <div className="p-4 bg-[#F2E8D6]/40 text-[#8B6F47] rounded-full">
                <AlertCircle size={28} />
              </div>
              <h3 className="text-sm font-sora font-semibold text-[#111111]">No Volunteers Found</h3>
              <p className="text-xs text-[#6B7280] max-w-sm">
                We couldn't find any volunteers matching your search keywords. Please adjust your filters.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Volunteer Detail Modal (Slide-over drawer style) */}
      {selectedVolunteer && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/40 transition-opacity"
            onClick={() => setSelectedVolunteer(null)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FAF9F6] border-l border-[#D8C6A8]/50 shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-4 border-b border-[#D8C6A8]/20">
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">Volunteer Details</span>
                  <h2 className="text-md font-sora font-semibold text-[#111111] uppercase tracking-wider mt-0.5">Profile Info</h2>
                </div>
                <button
                  onClick={() => setSelectedVolunteer(null)}
                  className="p-1 hover:bg-[#F2E8D6]/40 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Avatar Summary */}
              <div className="flex items-center gap-4 bg-white border border-[#D8C6A8]/20 p-4 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[#F2E8D6] text-[#8B6F47] font-sora font-bold text-sm flex items-center justify-center">
                  {selectedVolunteer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-sora font-semibold text-[#111111]">{selectedVolunteer.name}</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#6B7280] mt-1 font-medium">
                    <span className="bg-[#FAF9F6] px-1.5 py-0.5 rounded border border-[#D8C6A8]/30">{selectedVolunteer.status}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {selectedVolunteer.hours} hours logged</span>
                  </div>
                </div>
              </div>

              {/* Detail fields */}
              <div className="space-y-4 text-xs text-left">
                
                {/* Contact details */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Contact Details</h4>
                  <div className="bg-white border border-[#D8C6A8]/20 p-3 rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-[#111111]">
                      <Mail size={12} className="text-[#8B6F47]" />
                      <span>{selectedVolunteer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#111111]">
                      <Phone size={12} className="text-[#8B6F47]" />
                      <span>{selectedVolunteer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#111111]">
                      <MapPin size={12} className="text-[#8B6F47]" />
                      <span>{selectedVolunteer.location}</span>
                    </div>
                  </div>
                </div>

                {/* Assignment & Availability */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Project Allocation</h4>
                  <div className="bg-white border border-[#D8C6A8]/20 p-3 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#6B7280]">Assigned Program:</span>
                      <span className="font-semibold text-[#111111]">{selectedVolunteer.program}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#6B7280]">Availability:</span>
                      <span className="font-semibold text-[#111111]">{selectedVolunteer.availability}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#6B7280]">Member Since:</span>
                      <span className="font-semibold text-[#111111]">{selectedVolunteer.joinedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedVolunteer.skills.map((skill, index) => (
                      <span key={index} className="px-2.5 py-1 bg-[#F2E8D6]/40 text-[#8B6F47] rounded-md font-medium text-[10px] border border-[#D8C6A8]/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Interests & Causes</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedVolunteer.interests.map((interest, index) => (
                      <span key={index} className="px-2.5 py-1 bg-white text-[#111111] rounded-md font-medium text-[10px] border border-[#D8C6A8]/40">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            <div className="pt-6 border-t border-[#D8C6A8]/20 flex gap-3">
              <button
                onClick={() => alert(`Email interface triggered for ${selectedVolunteer.email}`)}
                className="flex-1 py-2 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all rounded-[2px]"
              >
                Send Message
              </button>
              <button
                onClick={() => setSelectedVolunteer(null)}
                className="px-4 py-2 border border-[#D8C6A8] text-[#111111] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#F2E8D6]/20 transition-all rounded-[2px]"
              >
                Close
              </button>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
