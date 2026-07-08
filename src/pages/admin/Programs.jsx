import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  X, 
  SlidersHorizontal, 
  ArrowUpRight, 
  Edit, 
  Trash, 
  AlertCircle 
} from "lucide-react";

export default function AdminPrograms() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddDrawer, setShowAddDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const initialPrograms = [
    { id: 1, name: "Radha Kund Heritage Restoration", category: "Heritage Restoration", status: "Active", volunteers: 28, budget: "₹4,50,000", progress: 65 },
    { id: 2, name: "Digital Literacy for Rural Youth", category: "Education", status: "Active", volunteers: 42, budget: "₹2,20,000", progress: 40 },
    { id: 3, name: "Vrindavan Tree Plantation Drive", category: "Environmental Conservation", status: "Active", volunteers: 56, budget: "₹1,80,000", progress: 80 },
    { id: 4, name: "Shakti Vocational Tailoring Center", category: "Women Empowerment", status: "Completed", volunteers: 18, budget: "₹3,00,000", progress: 100 },
    { id: 5, name: "Govardhan Community Health Camp", category: "Healthcare", status: "Completed", volunteers: 25, budget: "₹1,50,000", progress: 100 },
    { id: 6, name: "Organic Agriculture Farming Model", category: "Rural Development", status: "Planned", volunteers: 0, budget: "₹2,80,000", progress: 0 },
  ];

  const [programs, setPrograms] = useState(initialPrograms);

  // New Program Form State
  const [newProgName, setNewProgName] = useState("");
  const [newProgCat, setNewProgCat] = useState("Education");
  const [newProgBudget, setNewProgBudget] = useState("");
  const [newProgDesc, setNewProgDesc] = useState("");

  const handleAddProgram = (e) => {
    e.preventDefault();
    if (!newProgName || !newProgBudget) return;

    setIsLoading(true);
    setTimeout(() => {
      const newProgram = {
        id: Date.now(),
        name: newProgName,
        category: newProgCat,
        status: "Planned",
        volunteers: 0,
        budget: newProgBudget.startsWith("₹") ? newProgBudget : "₹" + newProgBudget,
        progress: 0
      };

      setPrograms([newProgram, ...programs]);
      setNewProgName("");
      setNewProgBudget("");
      setNewProgDesc("");
      setIsLoading(false);
      setShowAddDrawer(false);
      setSuccessMsg("Program registered successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    }, 800);
  };

  const filteredPrograms = programs.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Management</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            Programs & Initiatives
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Oversee existing projects, track milestones, budget utilization, and volunteer allocation.
          </p>
        </div>

        <div>
          <button
            onClick={() => setShowAddDrawer(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all duration-300 rounded-[2px]"
          >
            <Plus size={14} />
            Register New Program
          </button>
        </div>
      </div>

      {/* Alert banner */}
      {successMsg && (
        <div className="bg-green-50 border border-green-200 text-green-800 text-xs px-4 py-3 rounded-lg flex items-center gap-2 animate-in fade-in duration-300">
          <AlertCircle size={14} className="text-green-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Search & Filters Panel */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search programs or categories..."
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
            {["all", "active", "completed", "planned"].map((status) => (
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

      {/* Program Table Component */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          {filteredPrograms.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D8C6A8]/20 bg-[#FAF9F6]/50">
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold pl-6">Program Name</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Category</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Budget</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-center">Volunteers</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Milestone</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Status</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-right pr-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8C6A8]/10 text-xs">
                {filteredPrograms.map((p) => (
                  <tr key={p.id} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    
                    {/* Program Info */}
                    <td className="p-4 pl-6 font-medium text-[#111111] max-w-xs">
                      <div className="truncate font-sora text-xs">{p.name}</div>
                    </td>
                    
                    {/* Category */}
                    <td className="p-4 text-[#6B7280]">{p.category}</td>
                    
                    {/* Budget */}
                    <td className="p-4 font-semibold text-[#111111]">{p.budget}</td>
                    
                    {/* Active Volunteers */}
                    <td className="p-4 text-center font-medium text-[#111111]">{p.volunteers}</td>
                    
                    {/* Progress Bar */}
                    <td className="p-4 w-40">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-[#F2E8D6] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#8B6F47] transition-all duration-500" 
                            style={{ width: `${p.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] text-[#6B7280] font-semibold">{p.progress}%</span>
                      </div>
                    </td>
                    
                    {/* Status Badge */}
                    <td className="p-4">
                      <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-md ${
                        p.status === 'Active' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : p.status === 'Completed' 
                          ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    
                    {/* Action Buttons */}
                    <td className="p-4 text-right pr-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 hover:bg-[#F2E8D6]/40 rounded text-[#8B6F47] transition-colors" title="Edit Program">
                          <Edit size={13} />
                        </button>
                        <button className="p-1 hover:bg-red-50 rounded text-red-600 transition-colors" title="Delete Program">
                          <Trash size={13} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            // Empty State Component
            <div className="p-12 text-center flex flex-col items-center justify-center space-y-3">
              <div className="p-4 bg-[#F2E8D6]/40 text-[#8B6F47] rounded-full">
                <AlertCircle size={28} />
              </div>
              <h3 className="text-sm font-sora font-semibold text-[#111111]">No Programs Found</h3>
              <p className="text-xs text-[#6B7280] max-w-sm">
                We couldn't find any initiatives matching your filter or search keywords. Please adjust your criteria.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setStatusFilter("all"); }} 
                className="px-4 py-2 border border-[#8B6F47]/50 text-[#8B6F47] hover:bg-[#F2E8D6]/20 transition-all text-[10px] font-semibold uppercase tracking-widest mt-2 rounded-[2px]"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Program Registration Drawer Layout */}
      {showAddDrawer && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/40 transition-opacity"
            onClick={() => setShowAddDrawer(false)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FAF9F6] border-l border-[#D8C6A8]/50 shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-[#D8C6A8]/20">
                <h2 className="text-md font-sora font-semibold text-[#111111] uppercase tracking-wider">Register Program</h2>
                <button
                  onClick={() => setShowAddDrawer(false)}
                  className="p-1 hover:bg-[#F2E8D6]/40 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form fields */}
              <form onSubmit={handleAddProgram} className="space-y-4 text-xs">
                
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">Program Name *</label>
                  <input
                    type="text"
                    required
                    value={newProgName}
                    onChange={(e) => setNewProgName(e.target.value)}
                    placeholder="e.g. Govind Kund Historical Cleanliness Drive"
                    className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">Category *</label>
                  <select
                    value={newProgCat}
                    onChange={(e) => setNewProgCat(e.target.value)}
                    className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47]"
                  >
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Environmental Conservation">Environmental Conservation</option>
                    <option value="Heritage Restoration">Heritage Restoration</option>
                    <option value="Rural Development">Rural Development</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">Estimated Budget (INR) *</label>
                  <input
                    type="text"
                    required
                    value={newProgBudget}
                    onChange={(e) => setNewProgBudget(e.target.value)}
                    placeholder="e.g. 2,50,000"
                    className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">Program Description</label>
                  <textarea
                    rows={4}
                    value={newProgDesc}
                    onChange={(e) => setNewProgDesc(e.target.value)}
                    placeholder="Briefly state the goal, geographic scope, and community impact objectives..."
                    className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47]"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all rounded-[2px] disabled:opacity-50"
                  >
                    {isLoading ? "Saving..." : "Register Program"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddDrawer(false)}
                    className="px-4 py-2.5 border border-[#D8C6A8] text-[#111111] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#F2E8D6]/20 transition-all rounded-[2px]"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
            
            <div className="pt-4 border-t border-[#D8C6A8]/20 text-[10px] text-[#6B7280] text-center">
              Program starts as "Planned" state pending initial resource audits.
            </div>
          </div>
        </>
      )}

    </div>
  );
}
