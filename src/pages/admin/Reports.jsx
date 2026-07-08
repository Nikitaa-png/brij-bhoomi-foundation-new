import React from "react";
import { BarChart3, TrendingUp, Heart, Users, Download, ArrowUpRight } from "lucide-react";

export default function AdminReports() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Analytics</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            Reports & Analytics
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Audit foundation donations flow, monthly volunteer growth metrics, and program outcomes.
          </p>
        </div>

        <div>
          <button
            onClick={() => alert("Simulated action: Full annual PDF audit report generated.")}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all duration-300 rounded-[2px]"
          >
            <Download size={14} />
            Download Audit Report (PDF)
          </button>
        </div>
      </div>

      {/* Reports Summary KPI Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Average Donation Value", value: "₹7,250", change: "+11.4%", detail: "per transaction", icon: Heart },
          { title: "Volunteer Retention Rate", value: "88.6%", change: "+4.2%", detail: "from last quarter", icon: Users },
          { title: "Resource Utilization", value: "94.2%", change: "Optimal", detail: "6.8% overhead cost", icon: BarChart3 }
        ].map((kpi, idx) => (
          <div key={idx} className="premium-card p-6 flex items-start gap-4">
            <div className="p-3 bg-[#F2E8D6]/50 rounded-lg text-[#8B6F47]">
              <kpi.icon size={18} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#6B7280] uppercase tracking-wider font-semibold block">{kpi.title}</span>
              <h3 className="text-xl font-sora font-semibold text-[#111111] tracking-tight">{kpi.value}</h3>
              <div className="flex items-center gap-1 mt-1 text-[10px]">
                <span className="text-green-600 font-semibold">{kpi.change}</span>
                <span className="text-[#6B7280]">{kpi.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Donation Growth Trend (SVG Line Chart) */}
        <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#D8C6A8]/20">
            <div>
              <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider">Donations Overview</h3>
              <p className="text-[10px] text-[#6B7280] mt-0.5">Monthly revenue trends for 2026 (INR in Thousands)</p>
            </div>
            <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 border border-green-200 rounded flex items-center gap-0.5">
              <TrendingUp size={10} /> +14.2% YoY
            </span>
          </div>

          {/* SVG Line Graph */}
          <div className="w-full h-64 bg-white border border-[#D8C6A8]/20 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex-1 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                {/* Horizontal Grid lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#D8C6A8" strokeDasharray="3,3" strokeOpacity="0.3" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#D8C6A8" strokeDasharray="3,3" strokeOpacity="0.3" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#D8C6A8" strokeDasharray="3,3" strokeOpacity="0.3" />
                
                {/* Graph line path */}
                <path
                  d="M 10 180 Q 90 140 100 130 T 200 80 T 300 120 T 400 60 T 490 40"
                  fill="none"
                  stroke="#8B6F47"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                
                {/* Dot markers */}
                <circle cx="10" cy="180" r="4" fill="#8B6F47" />
                <circle cx="100" cy="130" r="4" fill="#8B6F47" />
                <circle cx="200" cy="80" r="4" fill="#8B6F47" />
                <circle cx="300" cy="120" r="4" fill="#8B6F47" />
                <circle cx="400" cy="60" r="4" fill="#8B6F47" />
                <circle cx="490" cy="40" r="4" fill="#8B6F47" />
              </svg>
            </div>
            
            {/* X Axis Labels */}
            <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-[#6B7280] font-semibold pt-3 border-t border-[#FAF9F6] mt-2">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>
          </div>
        </div>

        {/* Volunteer Registrations Growth (SVG Bar Chart) */}
        <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#D8C6A8]/20">
            <div>
              <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider">Volunteer Growth</h3>
              <p className="text-[10px] text-[#6B7280] mt-0.5">Accumulated onboardings by region</p>
            </div>
          </div>

          {/* SVG Bar Chart */}
          <div className="w-full h-64 bg-white border border-[#D8C6A8]/20 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex-1 w-full flex items-end justify-around relative px-4">
              
              {/* Bars */}
              {[
                { label: "Vrindavan", val: "75%" },
                { label: "Mathura", val: "50%" },
                { label: "Govardhan", val: "65%" },
                { label: "Barsana", val: "30%" },
                { label: "Nandgaon", val: "45%" }
              ].map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 w-10">
                  <div className="text-[9px] text-[#6B7280] font-bold">{bar.val}</div>
                  <div 
                    className="w-5 bg-[#8B6F47]/20 border border-[#8B6F47]/50 rounded-t-md hover:bg-[#8B6F47] transition-all duration-300"
                    style={{ height: `${parseInt(bar.val) * 1.5}px` }}
                  ></div>
                  <span className="text-[9px] font-semibold text-[#6B7280] truncate w-full text-center">{bar.label}</span>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

      {/* Program Summary Allocation Table */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
        <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider mb-4 pb-3 border-b border-[#D8C6A8]/20 text-left">Initiative Budget Allocations</h3>
        
        <div className="overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#D8C6A8]/20 text-[#6B7280] font-bold">
                <th className="pb-3 text-[11px] uppercase tracking-wider font-semibold">Initiative</th>
                <th className="pb-3 text-[11px] uppercase tracking-wider font-semibold text-right">Funds Allocated</th>
                <th className="pb-3 text-[11px] uppercase tracking-wider font-semibold text-right">Funds Spent</th>
                <th className="pb-3 text-[11px] uppercase tracking-wider font-semibold text-right">Resource Efficacy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8C6A8]/10">
              {[
                { name: "Radha Kund Heritage Restoration", allocated: "₹4,50,000", spent: "₹2,92,500", efficacy: "High" },
                { name: "Digital Literacy for Rural Youth", allocated: "₹2,20,000", spent: "₹88,000", efficacy: "Optimal" },
                { name: "Vrindavan Tree Plantation Drive", allocated: "₹1,80,000", spent: "₹1,44,000", efficacy: "High" },
                { name: "Shakti Vocational Center", allocated: "₹3,00,000", spent: "₹3,00,000", efficacy: "Excellent" },
              ].map((p, idx) => (
                <tr key={idx} className="hover:bg-[#FAF9F6]/50">
                  <td className="py-3 font-semibold text-[#111111]">{p.name}</td>
                  <td className="py-3 text-right text-[#111111]">{p.allocated}</td>
                  <td className="py-3 text-right text-[#6B7280]">{p.spent}</td>
                  <td className="py-3 text-right font-bold text-green-600">{p.efficacy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
