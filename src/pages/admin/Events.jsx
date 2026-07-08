import React, { useState } from "react";
import { 
  Plus, 
  Calendar as CalendarIcon, 
  MapPin, 
  Users, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  Edit,
  Trash,
  AlertCircle
} from "lucide-react";

export default function AdminEvents() {
  const [currentMonth, setCurrentMonth] = useState("July 2026");
  const [showAddForm, setShowAddForm] = useState(false);

  const initialEvents = [
    { id: 1, name: "Radha Kund Stepwell Cleanup", date: "12 July 2026", time: "07:00 AM - 11:00 AM", location: "Radha Kund, Govardhan", registered: 28, capacity: 40, status: "Urgent", category: "Heritage Restoration" },
    { id: 2, name: "Vrindavan Tree Plantation Drive", date: "15 July 2026", time: "08:00 AM - 12:00 PM", location: "Kesi Ghat Area, Vrindavan", registered: 15, capacity: 30, status: "Active", category: "Environmental Conservation" },
    { id: 3, name: "Rural Education Resources Camp", date: "18 July 2026", time: "10:00 AM - 02:00 PM", location: "Govind Kund Village", registered: 42, capacity: 45, status: "Active", category: "Education" },
    { id: 4, name: "Shakti Stitching & Embroidery Seminar", date: "24 July 2026", time: "02:00 PM - 05:00 PM", location: "Vocational Center, Mathura", registered: 12, capacity: 20, status: "Active", category: "Women Empowerment" }
  ];

  const [events, setEvents] = useState(initialEvents);

  // New Event Form State
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loc, setLoc] = useState("");
  const [cap, setCap] = useState("");
  const [cat, setCat] = useState("Education");

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!name || !date || !loc) return;

    const newEv = {
      id: Date.now(),
      name,
      date: date.split('-').reverse().join(' '), // simple format check
      time: time || "09:00 AM - 12:00 PM",
      location: loc,
      registered: 0,
      capacity: parseInt(cap) || 30,
      status: "Active",
      category: cat
    };

    setEvents([newEv, ...events]);
    setName("");
    setDate("");
    setTime("");
    setLoc("");
    setCap("");
    setShowAddForm(false);
  };

  // Static July 2026 calendar configuration
  const calendarDays = [
    { day: 28, isCurrentMonth: false }, { day: 29, isCurrentMonth: false }, { day: 30, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true }, { day: 2, isCurrentMonth: true }, { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true }, { day: 5, isCurrentMonth: true }, { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true }, { day: 8, isCurrentMonth: true }, { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true }, { day: 11, isCurrentMonth: true }, 
    { day: 12, isCurrentMonth: true, hasEvent: true, eventName: "Radha Kund Cleanup" }, 
    { day: 13, isCurrentMonth: true }, { day: 14, isCurrentMonth: true }, 
    { day: 15, isCurrentMonth: true, hasEvent: true, eventName: "Tree Plantation" }, 
    { day: 16, isCurrentMonth: true }, { day: 17, isCurrentMonth: true }, 
    { day: 18, isCurrentMonth: true, hasEvent: true, eventName: "Rural Resources" }, 
    { day: 19, isCurrentMonth: true }, { day: 20, isCurrentMonth: true }, { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true }, { day: 23, isCurrentMonth: true }, 
    { day: 24, isCurrentMonth: true, hasEvent: true, eventName: "Shakti Seminar" }, 
    { day: 25, isCurrentMonth: true }, { day: 26, isCurrentMonth: true }, { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true }, { day: 29, isCurrentMonth: true }, { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true }, { day: 1, isCurrentMonth: false }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Calendar</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            Events Management
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Schedule events, track volunteer registration quotas, and inspect dates on the visual calendar.
          </p>
        </div>

        <div>
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all duration-300 rounded-[2px]"
          >
            <Plus size={14} />
            Schedule Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Event Cards (Col Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20">Upcoming Events ({events.length})</h2>
          
          <div className="space-y-4">
            {events.map((e) => (
              <div key={e.id} className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-5 shadow-sm hover:border-[#8B6F47]/50 transition-all duration-300 flex flex-col justify-between gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="text-left space-y-1">
                    <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold rounded ${
                      e.status === 'Urgent' ? 'bg-red-50 text-red-700 border border-red-150' : 'bg-[#F2E8D6] text-[#8B6F47]'
                    }`}>
                      {e.category}
                    </span>
                    <h3 className="text-sm font-sora font-semibold text-[#111111] mt-1">{e.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-[#F2E8D6]/40 rounded text-[#8B6F47] transition-colors">
                      <Edit size={12} />
                    </button>
                    <button className="p-1.5 hover:bg-red-50 rounded text-red-600 transition-colors">
                      <Trash size={12} />
                    </button>
                  </div>
                </div>

                {/* Event details summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#6B7280]">
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
                    <span className="truncate">{e.location}</span>
                  </div>
                </div>

                {/* Capacity indicators */}
                <div className="border-t border-[#D8C6A8]/20 pt-3.5 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <Users size={13} className="text-[#8B6F47]" />
                    <span className="text-[#111111] font-semibold">{e.registered} / {e.capacity}</span>
                    <span className="text-[#6B7280]">volunteers registered</span>
                  </div>

                  <div className="w-24 h-1.5 bg-[#F2E8D6] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${e.registered / e.capacity >= 0.8 ? 'bg-amber-600' : 'bg-[#8B6F47]'} transition-all`} 
                      style={{ width: `${(e.registered / e.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Calendar & Action Forms (Col Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Calendar Widget */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider">{currentMonth}</h3>
              <div className="flex gap-1.5">
                <button className="p-1 hover:bg-[#F2E8D6]/40 rounded"><ChevronLeft size={14} /></button>
                <button className="p-1 hover:bg-[#F2E8D6]/40 rounded"><ChevronRight size={14} /></button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase font-bold text-[#6B7280] pb-2 border-b border-[#D8C6A8]/10 mb-2">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>

            {/* Monthly Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((dayObj, index) => (
                <div 
                  key={index}
                  className={`aspect-square flex flex-col items-center justify-center text-xs rounded-md relative ${
                    !dayObj.isCurrentMonth ? 'text-gray-300' : 'text-[#111111]'
                  } ${dayObj.hasEvent ? 'bg-[#F2E8D6] font-bold text-[#8B6F47] border border-[#8B6F47]/20' : 'hover:bg-[#F2E8D6]/20'}`}
                  title={dayObj.eventName || ""}
                >
                  <span>{dayObj.day}</span>
                  {dayObj.hasEvent && <span className="absolute bottom-1 w-1 h-1 bg-[#8B6F47] rounded-full"></span>}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#D8C6A8]/10 flex flex-wrap gap-4 text-[10px] text-[#6B7280] font-medium justify-center">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#F2E8D6] rounded-md border border-[#8B6F47]/20 block"></span>
                <span>Scheduled Drive</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#8B6F47] rounded-full block"></span>
                <span>Event Active</span>
              </div>
            </div>

          </div>

          {/* Form Modal when clicked */}
          {showAddForm && (
            <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm animate-in fade-in duration-300">
              <div className="flex justify-between items-center pb-3 border-b border-[#D8C6A8]/20 mb-4">
                <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider">Configure New Event</h3>
                <button onClick={() => setShowAddForm(false)} className="text-[#6B7280] hover:text-[#111111]"><X size={16} /></button>
              </div>

              <form onSubmit={handleAddEvent} className="space-y-3.5 text-xs text-left">
                <div className="space-y-1">
                  <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Event Name</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="e.g. Govardhan Tree Plantation" className="w-full p-2 border border-[#D8C6A8]/50 rounded-lg bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Date</label>
                    <input required value={date} onChange={(e) => setDate(e.target.value)} type="date" className="w-full p-2 border border-[#D8C6A8]/50 rounded-lg bg-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Capacity (slots)</label>
                    <input value={cap} onChange={(e) => setCap(e.target.value)} type="number" placeholder="30" className="w-full p-2 border border-[#D8C6A8]/50 rounded-lg bg-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Location</label>
                  <input required value={loc} onChange={(e) => setLoc(e.target.value)} type="text" placeholder="e.g. Radha Kund, Mathura" className="w-full p-2 border border-[#D8C6A8]/50 rounded-lg bg-white" />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Category</label>
                  <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full p-2 border border-[#D8C6A8]/50 rounded-lg bg-white font-semibold">
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Environmental Conservation">Environmental Conservation</option>
                    <option value="Heritage Restoration">Heritage Restoration</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-2 bg-[#111111] text-white font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#8B6F47] transition-all">Schedule Event</button>
              </form>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
