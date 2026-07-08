import React, { useState } from "react";
import { CheckSquare, Square, Briefcase, Calendar, CheckCircle2, Clock } from "lucide-react";

export default function VolunteerActivities() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Curate computer basics reference materials for Level 1 student drive", completed: true, project: "Digital Literacy Campaign" },
    { id: 2, text: "Assemble tree planting safety checklists for Govind Kund volunteers", completed: false, project: "Environmental Conservation" },
    { id: 3, text: "Organize Radha Kund clearing drive registration sheets", completed: false, project: "Radha Kund Heritage Restoration" },
  ]);

  const currentProjects = [
    { id: 1, name: "Digital Literacy for Rural Youth", role: "Primary Tutor", joined: "12 May 2026", hours: "24 hrs logged", status: "Active" },
    { id: 2, name: "Radha Kund Heritage Restoration", role: "Site Coordinator", joined: "08 June 2026", hours: "24 hrs logged", status: "Active" }
  ];

  const completedProjects = [
    { id: 3, name: "Govardhan Community Health Diagnostics Camp", role: "Registrar Volunteer", period: "15 - 18 May 2026", hours: "16 hrs logged" }
  ];

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Contributions</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          My Activities & Tasks
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          Review your ongoing initiatives, check off assigned items, and review past completed volunteering milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Active and Completed Initiatives (Col Span 7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Active Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20">Active Projects</h2>
            
            <div className="space-y-4">
              {currentProjects.map((p) => (
                <div key={p.id} className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-5 shadow-sm hover:border-[#8B6F47]/50 transition-all duration-300">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xs font-sora font-semibold text-[#111111]">{p.name}</h3>
                      <p className="text-[10px] text-[#8B6F47] font-semibold mt-1">Assigned Role: {p.role}</p>
                    </div>
                    <span className="text-[9px] bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded border border-green-200">
                      {p.status}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D8C6A8]/10 flex justify-between items-center text-[10px] text-[#6B7280]">
                    <span className="flex items-center gap-1"><Calendar size={11} /> Joined: {p.joined}</span>
                    <span className="flex items-center gap-1 font-semibold text-[#111111]"><Clock size={11} /> {p.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20">Completed Projects</h2>
            
            <div className="space-y-4">
              {completedProjects.map((p) => (
                <div key={p.id} className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-5 shadow-sm">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xs font-sora font-semibold text-[#6B7280] line-through">{p.name}</h3>
                      <p className="text-[10px] text-[#6B7280] font-semibold mt-1">Role: {p.role} ({p.period})</p>
                    </div>
                    <span className="text-[9px] bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded border border-gray-300">
                      Completed
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D8C6A8]/10 flex justify-between items-center text-[10px] text-[#6B7280]">
                    <span>Certificate Efficacy: Issued</span>
                    <span className="flex items-center gap-1 font-semibold text-[#6B7280]"><Clock size={11} /> {p.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Assigned Tasks checklist (Col Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
            <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20 mb-4">Assigned Tasks</h3>
            
            <div className="space-y-4">
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  className="flex items-start gap-3 cursor-pointer group hover:bg-[#FAF9F6] p-2.5 rounded-lg border border-transparent hover:border-[#D8C6A8]/20 transition-all text-left"
                >
                  <button className="text-[#8B6F47] mt-0.5 shrink-0 focus:outline-none">
                    {task.completed ? <CheckSquare size={16} /> : <Square size={16} />}
                  </button>
                  <div className="space-y-0.5">
                    <p className={`text-xs ${task.completed ? 'line-through text-[#6B7280]' : 'text-[#111111] font-medium'}`}>
                      {task.text}
                    </p>
                    <span className="text-[9px] text-[#8B6F47] font-semibold block">{task.project}</span>
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
