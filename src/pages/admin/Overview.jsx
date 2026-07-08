import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  BookOpen,
  Calendar,
  ArrowUpRight,
  Plus,
  MessageSquare,
  FileText,
  Clock,
  ArrowRight
} from "lucide-react";

export default function AdminOverview() {
  const getTimeOfDayGreeting = () => {
    const hrs = new Date().getHours();
    if (hrs < 12) return "Good Morning";
    if (hrs < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const stats = [
    { label: "Total Donations", value: "₹12,84,500", change: "+14.2%", detail: "from last month", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
    { label: "Active Volunteers", value: "342", change: "+8.5%", detail: "22 new this week", icon: Users, color: "text-[#8B6F47]", bg: "bg-[#F2E8D6]/50" },
    { label: "Ongoing Programs", value: "6", change: "0.0%", detail: "2 active heritage sites", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Upcoming Events", value: "4", change: "+25%", detail: "in the next 15 days", icon: Calendar, color: "text-green-500", bg: "bg-green-50" },
  ];

  const recentDonations = [
    { donor: "Ramesh Aggarwal", program: "Heritage Restoration", amount: "₹25,000", date: "Today, 11:20 AM", status: "Success" },
    { donor: "Sunita Deshmukh", program: "Education Support", amount: "₹5,000", date: "Today, 09:15 AM", status: "Success" },
    { donor: "Aarav Mehta", program: "General Donation", amount: "₹10,000", date: "Yesterday", status: "Success" },
    { donor: "Karan Johar", program: "Women Empowerment", amount: "₹15,000", date: "06 July 2026", status: "Success" },
  ];

  const recentVolunteers = [
    { name: "Devendra Singh", program: "Environment Drive", location: "Vrindavan", date: "Today, 10:05 AM", status: "Onboarding" },
    { name: "Meera Patel", program: "Education Support", location: "Mathura", date: "Yesterday", status: "Active" },
    { name: "Dr. Alok Sen", program: "Healthcare Camp", location: "Govardhan", date: "05 July 2026", status: "Active" },
  ];

  const upcomingEvents = [
    { name: "Radha Kund Stepwell Cleanup", date: "Sunday, 12 July", volunteers: "28 registered", status: "Urgent" },
    { name: "Vrindavan Tree Plantation Drive", date: "Wednesday, 15 July", volunteers: "15 registered", status: "Normal" },
    { name: "Rural Education Resources Camp", date: "Saturday, 18 July", volunteers: "42 registered", status: "Full" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Welcome & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Overview</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            {getTimeOfDayGreeting()}, B. L. Sharma
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Here is the status of the Brij Bhoomi Foundation campaigns and operations today.
          </p>
        </div>

        {/* Quick actions row */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/admin/events"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all duration-300 rounded-[2px]"
          >
            <Plus size={13} />
            Create Event
          </Link>
          <Link
            to="/admin/messages"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#D8C6A8]/70 text-[#111111] text-[11px] font-semibold uppercase tracking-wider hover:border-[#8B6F47] transition-all duration-300 rounded-[2px]"
          >
            <MessageSquare size={13} />
            Inbox
          </Link>
        </div>
      </div>

      {/* Statistics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="premium-card p-6 flex flex-col justify-between min-h-[140px]">
            <div className="flex justify-between items-start">
              <span className="text-xs text-[#6B7280] font-medium tracking-wide">{stat.label}</span>
              <div className={`p-2.5 rounded-lg ${stat.bg}`}>
                <stat.icon size={16} className={stat.color} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-sora font-semibold text-[#111111] tracking-tight">{stat.value}</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className={`text-[11px] font-semibold ${stat.change.startsWith('+') && stat.change !== '+0.0%' ? 'text-green-600' : 'text-[#6B7280]'}`}>
                  {stat.change}
                </span>
                <span className="text-[10px] text-[#8B6F47]">{stat.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Recent Donations Ledger (Col Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#D8C6A8]/20">
              <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider">Recent Donations</h2>
              <Link to="/admin/donations" className="text-xs text-[#8B6F47] font-semibold flex items-center gap-1 hover:underline">
                View Ledger <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#D8C6A8]/20">
                    <th className="pb-3 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Donor</th>
                    <th className="pb-3 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Program</th>
                    <th className="pb-3 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-right">Amount</th>
                    <th className="pb-3 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8C6A8]/10 text-xs">
                  {recentDonations.map((d, index) => (
                    <tr key={index} className="hover:bg-[#FAF9F6]/50 transition-colors">
                      <td className="py-3.5 font-medium text-[#111111]">
                        <div>{d.donor}</div>
                        <div className="text-[10px] text-[#6B7280] font-normal mt-0.5">{d.date}</div>
                      </td>
                      <td className="py-3.5 text-[#6B7280]">{d.program}</td>
                      <td className="py-3.5 text-right font-semibold text-[#111111]">{d.amount}</td>
                      <td className="py-3.5 text-right">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-green-50 text-green-700 rounded-md">
                          {d.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Volunteers List */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#D8C6A8]/20">
              <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider">New Volunteer Registrations</h2>
              <Link to="/admin/volunteers" className="text-xs text-[#8B6F47] font-semibold flex items-center gap-1 hover:underline">
                Manage Volunteers <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="space-y-4">
              {recentVolunteers.map((v, index) => (
                <div key={index} className="flex justify-between items-center p-3 hover:bg-[#FAF9F6] border border-transparent hover:border-[#D8C6A8]/20 rounded-xl transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F2E8D6] text-[#8B6F47] font-sora font-bold text-xs flex items-center justify-center">
                      {v.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-semibold text-[#111111]">{v.name}</h4>
                      <p className="text-[10px] text-[#6B7280] mt-0.5">{v.program} • {v.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold rounded-md ${
                      v.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {v.status}
                    </span>
                    <span className="block text-[9px] text-[#6B7280] mt-1">{v.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Upcoming Events & Updates (Col Span 1) */}
        <div className="space-y-6">
          
          {/* Upcoming Events Calendar Summary */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#D8C6A8]/20">
              <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider">Upcoming Calendar</h2>
              <Link to="/admin/events" className="text-xs text-[#8B6F47] font-semibold flex items-center gap-1 hover:underline">
                All Events <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((e, index) => (
                <div key={index} className="flex gap-4 items-start p-3 bg-white border border-[#D8C6A8]/20 rounded-xl hover:border-[#8B6F47]/40 transition-colors">
                  <div className="bg-[#F2E8D6] text-[#8B6F47] p-2.5 rounded-lg font-sora font-semibold text-[10px] text-center w-12 shrink-0">
                    <span className="block text-xs leading-none">JUL</span>
                    <span className="block text-base leading-none font-bold mt-1">{e.date.split(' ').slice(1,2)}</span>
                  </div>
                  <div className="text-left space-y-1">
                    <span className={`inline-block px-1.5 py-0.5 text-[8px] font-semibold rounded uppercase tracking-wider ${
                      e.status === 'Urgent' ? 'bg-red-50 text-red-700' : e.status === 'Full' ? 'bg-gray-150 text-gray-700' : 'bg-green-50 text-green-700'
                    }`}>
                      {e.status}
                    </span>
                    <h4 className="text-xs font-semibold text-[#111111] leading-tight">{e.name}</h4>
                    <p className="text-[10px] text-[#6B7280]">{e.volunteers}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest News & Blog Updates */}
          <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#D8C6A8]/20">
              <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider">Blog & News Drafts</h2>
              <Link to="/admin/news" className="text-xs text-[#8B6F47] font-semibold flex items-center gap-1 hover:underline">
                Write Post <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { title: "Celebrating the restoration of ancient stepwells in Govardhan", date: "Draft saved 2 hrs ago", author: "Devendra S.", status: "Draft" },
                { title: "Empowering Rural Women: Launching vocational training in Govind Kund", date: "Published 4 days ago", author: "Radhika M.", status: "Published" },
              ].map((blog, idx) => (
                <div key={idx} className="space-y-2 text-left">
                  <div className="flex justify-between items-start gap-3">
                    <h4 className="text-xs font-semibold text-[#111111] hover:text-[#8B6F47] transition-colors leading-snug cursor-pointer">
                      {blog.title}
                    </h4>
                    <span className={`text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded font-semibold shrink-0 ${
                      blog.status === 'Draft' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {blog.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#6B7280] font-medium">
                    <span>By {blog.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {blog.date}</span>
                  </div>
                  {idx === 0 && <div className="h-[1px] bg-[#D8C6A8]/20 my-2"></div>}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
