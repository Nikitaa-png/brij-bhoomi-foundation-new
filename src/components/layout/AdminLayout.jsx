import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Heart,
  Calendar,
  Image,
  FileText,
  Mail,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  LogOut,
  ChevronDown
} from "lucide-react";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Dashboard", to: "/admin", icon: LayoutDashboard },
    { name: "Programs", to: "/admin/programs", icon: BookOpen },
    { name: "Volunteers", to: "/admin/volunteers", icon: Users },
    { name: "Donations", to: "/admin/donations", icon: Heart },
    { name: "Events", to: "/admin/events", icon: Calendar },
    { name: "Gallery", to: "/admin/gallery", icon: Image },
    { name: "News & Blog", to: "/admin/news", icon: FileText },
    { name: "Messages", to: "/admin/messages", icon: Mail },
    { name: "Reports", to: "/admin/reports", icon: BarChart3 },
    { name: "Settings", to: "/admin/settings", icon: Settings },
  ];

  const mockNotifications = [
    { id: 1, text: "New volunteer registered: Devendra Singh", time: "5 mins ago", read: false },
    { id: 2, text: "Donation received: ₹10,000 from Rajesh Mehra", time: "1 hour ago", read: false },
    { id: 3, text: "Urgent cleanup drive announcement approved", time: "3 hours ago", read: true },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-inter flex flex-col relative select-none">
      
      {/* Admin Top Navbar (Desktop & Mobile) */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#D8C6A8]/30 px-6 py-4 flex justify-between items-center w-full">
        {/* Left Side: Brand Logo and Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-[#111111] hover:text-[#8B6F47] transition-colors p-1"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <Link to="/" className="flex flex-col group">
            <span className="text-md font-sora font-semibold tracking-tight text-[#111111] leading-none transition-colors duration-300 group-hover:text-[#8B6F47]">
              BRIJ BHOOMI
            </span>
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mt-0.5 transition-colors duration-300 group-hover:text-[#111111]">
              Foundation
            </span>
          </Link>
          <span className="hidden sm:inline-block h-4 w-[1px] bg-[#D8C6A8]/40"></span>
          <span className="text-[10px] font-sora font-semibold tracking-widest text-[#8B6F47] uppercase bg-[#F2E8D6] px-2.5 py-0.5 rounded-[4px] hidden sm:inline-block">
            ADMIN PORTAL
          </span>
        </div>

        {/* Right Side: Quick Notifications & Profile */}
        <div className="flex items-center gap-4 relative">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-[#F2E8D6]/40 rounded-full transition-colors relative"
              aria-label="View Notifications"
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
                    <span className="text-xs font-sora font-semibold text-[#111111]">Notifications</span>
                    <button className="text-[10px] text-[#8B6F47] font-medium hover:underline">Mark all read</button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {mockNotifications.map((n) => (
                      <div key={n.id} className={`px-4 py-3 hover:bg-[#FAF9F6] transition-colors border-b border-[#FAF9F6] last:border-0 ${!n.read ? 'bg-[#FCFAF5]' : ''}`}>
                        <p className="text-xs text-[#111111] leading-snug">{n.text}</p>
                        <span className="text-[10px] text-[#6B7280] mt-1 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="flex items-center gap-2 pl-2 border-l border-[#D8C6A8]/30">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
              alt="Admin Avatar"
              className="w-7 h-7 rounded-full object-cover border border-[#D8C6A8]"
            />
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-medium leading-none text-[#111111]">B. L. Sharma</span>
              <span className="text-[9px] text-[#6B7280] mt-0.5">Super Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body Layout */}
      <div className="flex flex-1 relative w-full font-inter">
        
        {/* Desktop Sticky Sidebar (Left) */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#FAF9F6] border-r border-[#D8C6A8]/30 min-h-[calc(100vh-65px)] sticky top-[65px] z-30 p-4 justify-between">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold block px-3 mb-3 font-sora">Navigation</span>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/admin"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#F2E8D6] text-[#8B6F47] font-semibold"
                        : "text-[#6B7280] hover:bg-[#F2E8D6]/30 hover:text-[#111111]"
                    }`
                  }
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="pt-4 border-t border-[#D8C6A8]/30">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-all duration-300"
            >
              <LogOut size={16} />
              <span>Back to main site</span>
            </Link>
          </div>
        </aside>

        {/* Mobile/Tablet Drawer Menu (Overlay/Left Drawer) */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 bg-black/40 ${
            isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className={`w-64 bg-[#FAF9F6] border-r border-[#D8C6A8]/30 h-full flex flex-col justify-between p-4 transition-transform duration-300 ease-out transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-2 border-b border-[#D8C6A8]/30">
                <span className="text-xs font-sora font-semibold text-[#8B6F47] uppercase tracking-wider">Navigation</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 rounded-full hover:bg-[#F2E8D6]/30"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.to === "/admin"}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#F2E8D6] text-[#8B6F47] font-semibold"
                          : "text-[#6B7280] hover:bg-[#F2E8D6]/30 hover:text-[#111111]"
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
              <Link
                to="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-all duration-300"
              >
                <LogOut size={16} />
                <span>Back to main site</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto w-full overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sticky Bottom Nav Drawer */}
      <footer className="lg:hidden sticky bottom-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-[#D8C6A8]/30 flex items-center justify-around py-2.5 px-4 w-full">
        {menuItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            end={item.to === "/admin"}
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
