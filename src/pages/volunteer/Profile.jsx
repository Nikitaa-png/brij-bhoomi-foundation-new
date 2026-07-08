import React, { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function VolunteerProfile() {
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const [skills, setSkills] = useState(["Primary Tutoring", "Computer Operations", "Spoken English", "First Aid"]);
  const [interests, setInterests] = useState(["Heritage Preservation", "Education Drives", "Rural Health Camp Coordinator"]);
  const [availability, setAvailability] = useState("Weekends full day, Weekdays on-call");

  const [newSkill, setNewSkill] = useState("");

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 800);
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (!newSkill.trim() || skills.includes(newSkill)) return;
    setSkills([...skills, newSkill.trim()]);
    setNewSkill("");
  };

  const removeSkill = (skToRemove) => {
    setSkills(skills.filter(s => s !== skToRemove));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Account</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          My Volunteer Profile
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          Keep your contact information up-to-date and define your active skills, availability windows, and campaign interests.
        </p>
      </div>

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 text-xs px-4 py-3 rounded-lg flex items-center gap-2 animate-in fade-in duration-300">
          <CheckCircle2 size={14} className="text-green-600" />
          <span>Profile changes saved successfully!</span>
        </div>
      )}

      {/* Grid: Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Personal info (Col Span 7) */}
        <div className="lg:col-span-7 bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
          <form onSubmit={handleSaveProfile} className="space-y-6 text-xs text-left">
            
            <div className="flex items-center gap-4 pb-4 border-b border-[#D8C6A8]/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                alt="Raghav Sharma Avatar"
                className="w-14 h-14 rounded-full object-cover border border-[#D8C6A8]"
              />
              <div>
                <h3 className="text-sm font-sora font-semibold text-[#111111]">Raghav Sharma</h3>
                <span className="text-[9px] uppercase tracking-wider bg-[#F2E8D6] text-[#8B6F47] px-2 py-0.5 rounded mt-1 block w-fit">Active Volunteer</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Email Address</label>
                <input required type="email" defaultValue="raghav.sharma@gmail.com" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Phone number</label>
                <input required type="text" defaultValue="+91 99887 76655" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Current Location</label>
                <input required type="text" defaultValue="Vrindavan, Mathura" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Availability Details</label>
                <input 
                  required 
                  type="text" 
                  value={availability} 
                  onChange={(e) => setAvailability(e.target.value)} 
                  className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" 
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all rounded-[2px] disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Contact Info"}
            </button>

          </form>
        </div>

        {/* Right Column: Skills & Interests (Col Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Skills Management */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm text-left">
            <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20 mb-4">My Skills</h3>
            
            {/* Input tag to add */}
            <form onSubmit={addSkill} className="flex gap-2 mb-4">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add skill (e.g. Photoshop)..."
                className="flex-1 px-3 py-1.5 border border-[#D8C6A8]/50 bg-white text-xs rounded-lg focus:outline-none focus:border-[#8B6F47]"
              />
              <button 
                type="submit" 
                className="px-3.5 py-1.5 bg-[#111111] text-white text-[10px] uppercase font-bold tracking-wider rounded-[2px] hover:bg-[#8B6F47]"
              >
                Add
              </button>
            </form>

            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <span key={index} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F2E8D6]/40 text-[#8B6F47] rounded-md font-semibold text-[10px] border border-[#D8C6A8]/30">
                  <span>{skill}</span>
                  <button type="button" onClick={() => removeSkill(skill)} className="hover:text-red-600 transition-colors ml-1 font-bold">×</button>
                </span>
              ))}
            </div>
          </div>

          {/* Interests Info */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm text-left">
            <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20 mb-4">Causes & Interests</h3>
            
            <div className="space-y-2 text-xs">
              {interests.map((interest, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#111111] font-semibold bg-white border border-[#D8C6A8]/20 p-2.5 rounded-lg">
                  <span className="w-1.5 h-1.5 bg-[#8B6F47] rounded-full block"></span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
