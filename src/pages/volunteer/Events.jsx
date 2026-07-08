import React, { useState } from "react";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function VolunteerEvents() {
  const [events, setEvents] = useState([
    { id: 1, name: "Radha Kund Stepwell Cleanup", date: "Sunday, 12 July 2026", time: "07:00 AM - 11:00 AM", location: "Radha Kund, Govardhan", registered: true, category: "Heritage Restoration", capacity: 40, enrolledCount: 28 },
    { id: 2, name: "Weekly Computer Training Class", date: "Wednesday, 15 July 2026", time: "03:00 PM - 05:00 PM", location: "Brij Center, Vrindavan", registered: true, category: "Education", capacity: 15, enrolledCount: 12 },
    { id: 3, name: "Vrindavan Tree Plantation Drive", date: "Friday, 17 July 2026", time: "08:00 AM - 12:00 PM", location: "Kesi Ghat Area, Vrindavan", registered: false, category: "Environmental Conservation", capacity: 30, enrolledCount: 15 },
    { id: 4, name: "Govind Kund Educational Resources Setup", date: "Saturday, 18 July 2026", time: "10:00 AM - 02:00 PM", location: "Govind Kund Village", registered: false, category: "Education", capacity: 45, enrolledCount: 42 }
  ]);

  const handleRegisterToggle = (id) => {
    setEvents(events.map(ev => {
      if (ev.id === id) {
        const isRegistered = !ev.registered;
        return {
          ...ev,
          registered: isRegistered,
          enrolledCount: isRegistered ? ev.enrolledCount + 1 : ev.enrolledCount - 1
        };
      }
      return ev;
    }));
  };

  const registeredEvents = events.filter(e => e.registered);
  const availableEvents = events.filter(e => !e.registered);

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Calendar</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          Community Event Drives
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          Explore upcoming stepwell cleanliness drives, tutoring slots, and village afforestation campaigns.
        </p>
      </div>

      {/* Grid: My Schedule vs Available Events */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Registered events schedule (Col Span 6) */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20">My Schedule</h2>
          
          <div className="space-y-4">
            {registeredEvents.length > 0 ? (
              registeredEvents.map((e) => (
                <div key={e.id} className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-5 shadow-sm hover:border-[#8B6F47]/50 transition-all duration-300 text-left space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-0.5 text-[9px] font-semibold bg-[#F2E8D6] text-[#8B6F47] rounded">
                        {e.category}
                      </span>
                      <h3 className="text-xs font-sora font-semibold text-[#111111] mt-1.5">{e.name}</h3>
                    </div>
                    <button 
                      onClick={() => handleRegisterToggle(e.id)}
                      className="px-2.5 py-1 text-[9px] font-bold text-red-650 hover:bg-red-50 rounded border border-red-200 uppercase tracking-wider transition-colors"
                    >
                      Unregister
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <CalendarIcon size={12} className="text-[#8B6F47]" />
                      <span>{e.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-[#8B6F47]" />
                      <span>{e.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#8B6F47]" />
                      <span>{e.location}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center bg-[#FCFAF5] border border-[#D8C6A8]/30 rounded-xl space-y-2">
                <AlertCircle size={20} className="text-[#6B7280] mx-auto" />
                <p className="text-xs text-[#6B7280]">No events registered yet. Browse available campaigns below to sign up.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Available events registry (Col Span 6) */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20">Available Drives</h2>
          
          <div className="space-y-4">
            {availableEvents.length > 0 ? (
              availableEvents.map((e) => (
                <div key={e.id} className="bg-white border border-[#D8C6A8]/40 rounded-[16px] p-5 shadow-sm hover:border-[#8B6F47]/50 transition-all duration-300 text-left space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-0.5 text-[9px] font-semibold bg-gray-100 text-[#6B7280] rounded">
                        {e.category}
                      </span>
                      <h3 className="text-xs font-sora font-semibold text-[#111111] mt-1.5">{e.name}</h3>
                    </div>
                    <button 
                      onClick={() => handleRegisterToggle(e.id)}
                      className="px-2.5 py-1 text-[9px] font-bold bg-[#111111] text-white hover:bg-[#8B6F47] rounded uppercase tracking-wider transition-colors"
                    >
                      Register
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <CalendarIcon size={12} className="text-[#8B6F47]" />
                      <span>{e.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-[#8B6F47]" />
                      <span>{e.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#8B6F47]" />
                      <span>{e.location}</span>
                    </div>
                  </div>

                  <div className="border-t border-[#D8C6A8]/20 pt-2.5 flex justify-between items-center text-[10px] text-[#6B7280]">
                    <span>Quota: {e.enrolledCount} / {e.capacity} enrolled</span>
                    <div className="w-16 h-1 bg-[#F2E8D6] rounded-full overflow-hidden">
                      <div className="h-full bg-[#8B6F47]" style={{ width: `${(e.enrolledCount / e.capacity) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center bg-[#FCFAF5] border border-[#D8C6A8]/30 rounded-xl space-y-2">
                <CheckCircle2 size={20} className="text-[#8B6F47] mx-auto" />
                <p className="text-xs text-[#6B7280]">You are fully registered for all scheduled campaign events!</p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
