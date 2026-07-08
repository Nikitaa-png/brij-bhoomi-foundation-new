import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  Award,
  Calendar,
  Megaphone,
  Mail,
  Menu,
  X,
  Bell,
  LogOut,
  ChevronDown
} from "lucide-react";

export default function VolunteerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Home", to: "/volunteer/dashboard", icon: Home },
    { name: "My Profile", to: "/volunteer/dashboard/profile", icon: User },
    { name: "My Activities", to: "/volunteer/dashboard/activities", icon: Briefcase },
    { name: "Certificates", to: "/volunteer/dashboard/certificates", icon: Award },
    { name: "Events", to: "/volunteer/dashboard/events", icon: Calendar },
    { name: "Announcements", to: "/volunteer/dashboard/announcements", icon: Megaphone },
    { name: "Contact Coordinator", to: "/volunteer/dashboard/contact", icon: Mail },
  ];

  const handleLogout = () => {
    localStorage.removeItem("brij_volunteer_session");
    navigate("/volunteer/login", { replace: true });
  };

  const mockAnnouncements = [
    { id: 1, text: "Urgent: Stepwell (Kund) cleaning drive scheduled for this Sunday.", time: "1 hour ago" },
    { id: 2, text: "New certificate issued for your participation in the Education Drive.", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-[#F2E8D6] text-[#111111] font-inter flex flex-col relative select-none">
      
      {/* Volunteer Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#F2E8D6]/90 backdrop-blur-md border-b border-[#D8C6A8]/30 px-6 py-4 flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-[#111111] hover:text-[#8B6F47] transition-colors p-1"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <Link to="/volunteer/dashboard" className="flex flex-col group">
            <span className="text-md font-sora font-semibold tracking-tight text-[#111111] leading-none transition-colors duration-300 group-hover:text-[#8B6F47]">
              BRIJ BHOOMI
            </span>
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mt-0.5 transition-colors duration-300 group-hover:text-[#111111]">
              Foundation
            </span>
          </Link>
          <span className="hidden sm:inline-block h-4 w-[1px] bg-[#D8C6A8]/40"></span>
          <span className="text-[10px] font-sora font-semibold tracking-widest text-[#8B6F47] uppercase bg-[#FAF9F6]/55 px-2.5 py-0.5 rounded-[4px] hidden sm:inline-block">
            VOLUNTEER PORTAL
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 relative">
          {/* Announcements Indicator */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-[#FAF9F6]/40 rounded-full transition-colors relative"
              aria-label="View Alerts"
            >
              <Bell size={18} className="text-[#111111] hover:text-[#8B6F47]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8B6F47] rounded-full"></span>
            </button>

            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowNotifications(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-80 bg-white border border-[#D8C6A8]/40 shadow-lg rounded-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 pb-2 border-b border-[#FAF9F6] flex justify-between items-center">
                    <span className="text-xs font-sora font-semibold text-[#111111]">Announcements</span>
                    <Link to="/volunteer/dashboard/announcements" onClick={() => setShowNotifications(false)} className="text-[10px] text-[#8B6F47] font-medium hover:underline">View all</Link>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {mockAnnouncements.map((ann) => (
                      <div key={ann.id} className="px-4 py-3 hover:bg-[#FAF9F6] transition-colors border-b border-[#FAF9F6] last:border-0 bg-[#FCFAF5]">
                        <p className="text-xs text-[#111111] leading-snug">{ann.text}</p>
                        <span className="text-[10px] text-[#6B7280] mt-1 block">{ann.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Volunteer Profile Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-[#D8C6A8]/30">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              alt="Volunteer Avatar"
              className="w-7 h-7 rounded-full object-cover border border-[#D8C6A8]"
            />
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-medium leading-none text-[#111111]">Raghav Sharma</span>
              <span className="text-[9px] text-[#6B7280] mt-0.5">Heritage Volunteer</span>
            </div>
          </div>
        </div>
      </header>

      {/* Body Area */}
      <div className="flex flex-1 relative w-full font-inter">
        
        {/* Desktop Sticky Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#F2E8D6] border-r border-[#D8C6A8]/30 min-h-[calc(100vh-65px)] sticky top-[65px] z-30 p-4 justify-between">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold block px-3 mb-3 font-sora">Volunteer Hub</span>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/volunteer/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#FCFAF5] text-[#8B6F47] font-semibold border border-[#D8C6A8]/45"
                        : "text-[#6B7280] hover:bg-[#FCFAF5]/50 hover:text-[#111111]"
                    }`
                  }
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t border-[#D8C6A8]/30">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-red-650 hover:bg-red-50 transition-all duration-300 w-full text-left"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Mobile Sidebar drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 bg-black/40 ${
            isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className={`w-64 bg-[#F2E8D6] border-r border-[#D8C6A8]/30 h-full flex flex-col justify-between p-4 transition-transform duration-300 ease-out transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-2 border-b border-[#D8C6A8]/30">
                <span className="text-xs font-sora font-semibold text-[#8B6F47] uppercase tracking-wider">Volunteer Hub</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 rounded-full hover:bg-[#FAF9F6]/30"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.to === "/volunteer/dashboard"}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#FCFAF5] text-[#8B6F47] font-semibold border border-[#D8C6A8]/45"
                          : "text-[#6B7280] hover:bg-[#FCFAF5]/50 hover:text-[#111111]"
                      }`
                    }
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-[#D8C6A8]/30">
              <button
                onClick={() => {
                  setIsSidebarOpen(false);
                  handleLogout();
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-red-650 hover:bg-red-50 transition-all duration-300 w-full text-left"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto w-full overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sticky Bottom Nav Drawer */}
      <footer className="lg:hidden sticky bottom-0 z-40 bg-[#F2E8D6]/95 backdrop-blur-md border-t border-[#D8C6A8]/30 flex items-center justify-around py-2.5 px-4 w-full">
        {menuItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            end={item.to === "/volunteer/dashboard"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-[9px] font-medium transition-colors duration-300 ${
                isActive ? "text-[#8B6F47]" : "text-[#6B7280] hover:text-[#111111]"
              }`
            }
          >
            <item.icon size={16} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </footer>

    </div>
  );
}
