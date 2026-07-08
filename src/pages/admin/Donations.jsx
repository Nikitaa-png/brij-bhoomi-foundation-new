import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  ArrowUpRight, 
  DollarSign, 
  Calendar,
  AlertCircle
} from "lucide-react";

export default function AdminDonations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [programFilter, setProgramFilter] = useState("all");
  const [isExporting, setIsExporting] = useState(false);

  const donationsLedger = [
    { id: "TXN10294", donor: "Ramesh Aggarwal", program: "Heritage Restoration", amount: "₹25,000", date: "08 July 2026", time: "11:20 AM", status: "Success", method: "UPI" },
    { id: "TXN10293", donor: "Sunita Deshmukh", program: "Education Support", amount: "₹5,000", date: "08 July 2026", time: "09:15 AM", status: "Success", method: "Netbanking" },
    { id: "TXN10292", donor: "Aarav Mehta", program: "General Fund", amount: "₹10,000", date: "07 July 2026", time: "06:40 PM", status: "Success", method: "Card" },
    { id: "TXN10291", donor: "Karan Johar", program: "Women Empowerment", amount: "₹15,000", date: "06 July 2026", time: "02:10 PM", status: "Success", method: "UPI" },
    { id: "TXN10290", donor: "Priyah Nair", program: "Environmental Conservation", amount: "₹2,500", date: "05 July 2026", time: "10:30 AM", status: "Success", method: "UPI" },
    { id: "TXN10289", donor: "Vikram Sethi", program: "General Fund", amount: "₹50,000", date: "04 July 2026", time: "04:55 PM", status: "Pending", method: "Bank Transfer" },
    { id: "TXN10288", donor: "Ananya Roy", program: "Education Support", amount: "₹1,000", date: "02 July 2026", time: "11:05 AM", status: "Success", method: "Card" }
  ];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert("Ledger exported successfully as CSV!");
    }, 1200);
  };

  const filteredDonations = donationsLedger.filter(d => {
    const matchesSearch = d.donor.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProgram = programFilter === "all" || d.program.toLowerCase().includes(programFilter.toLowerCase());
    return matchesSearch && matchesProgram;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Ledger</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            Donations Ledger
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Track, search, and audit donor contributions across Brij Bhoomi Foundation's active campaigns.
          </p>
        </div>

        <div>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all duration-300 rounded-[2px] disabled:opacity-50"
          >
            <Download size={14} />
            {isExporting ? "Exporting..." : "Export Ledger (CSV)"}
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search donor name or transaction ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#D8C6A8]/50 bg-white text-xs text-[#111111] rounded-lg focus:outline-none focus:border-[#8B6F47] transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <Filter size={12} />
            <span>Campaign:</span>
          </div>

          <select
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            className="p-2 border border-[#D8C6A8]/50 bg-white text-xs text-[#111111] rounded-lg focus:outline-none focus:border-[#8B6F47] font-semibold"
          >
            <option value="all">All Campaigns</option>
            <option value="Heritage">Heritage Restoration</option>
            <option value="Education">Education Support</option>
            <option value="Women">Women Empowerment</option>
            <option value="Environmental">Environmental Conservation</option>
            <option value="General">General Fund</option>
          </select>
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          {filteredDonations.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D8C6A8]/20 bg-[#FAF9F6]/50">
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold pl-6">Transaction ID</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Donor Name</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Assigned Campaign</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Method</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Date & Time</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-right">Amount</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-right pr-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8C6A8]/10 text-xs">
                {filteredDonations.map((d) => (
                  <tr key={d.id} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    
                    {/* Txn ID */}
                    <td className="p-4 pl-6 font-mono font-semibold text-[#8B6F47]">{d.id}</td>

                    {/* Donor */}
                    <td className="p-4 font-semibold text-[#111111]">{d.donor}</td>

                    {/* Campaign */}
                    <td className="p-4 text-[#6B7280]">{d.program}</td>

                    {/* Method */}
                    <td className="p-4 text-[#6B7280]">{d.method}</td>

                    {/* Date */}
                    <td className="p-4 text-[#6B7280]">
                      <div className="flex flex-col">
                        <span>{d.date}</span>
                        <span className="text-[10px] text-[#6B7280] mt-0.5">{d.time}</span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="p-4 text-right font-bold text-[#111111]">{d.amount}</td>

                    {/* Status Badge */}
                    <td className="p-4 text-right pr-6">
                      <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold rounded-md ${
                        d.status === 'Success' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {d.status}
                      </span>
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
              <h3 className="text-sm font-sora font-semibold text-[#111111]">No Donations Found</h3>
              <p className="text-xs text-[#6B7280] max-w-sm">
                No transaction entries matched your search criteria. Try a different campaign filter or keyword.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
