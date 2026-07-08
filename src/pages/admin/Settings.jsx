import React, { useState } from "react";
import { Settings, Shield, Bell, User, Building, AlertCircle } from "lucide-react";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSuccessMsg("Settings saved successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    }, 800);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "org", label: "Organization", icon: Building },
    { id: "password", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Preferences</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          System Settings
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          Configure organization records, update admin profile details, password policies, and notify schedules.
        </p>
      </div>

      {successMsg && (
        <div className="bg-green-50 border border-green-200 text-green-800 text-xs px-4 py-3 rounded-lg flex items-center gap-2 animate-in fade-in duration-300">
          <AlertCircle size={14} className="text-green-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Grid: Navigation Tabs vs Active Pane */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar (Col Span 3) */}
        <div className="md:col-span-3 bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-4 space-y-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#F2E8D6] text-[#8B6F47]"
                  : "text-[#6B7280] hover:bg-[#F2E8D6]/20 hover:text-[#111111]"
              }`}
            >
              <tab.icon size={15} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Configurations Form (Col Span 9) */}
        <div className="md:col-span-9 bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] p-6 shadow-sm">
          <form onSubmit={handleSave} className="space-y-6 text-xs text-left">
            
            {activeTab === "profile" && (
              <div className="space-y-4">
                <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/10">Admin Profile Details</h3>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center pb-4 border-b border-[#D8C6A8]/10">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                    alt="Avatar"
                    className="w-14 h-14 rounded-full object-cover border border-[#D8C6A8]"
                  />
                  <div className="space-y-1.5">
                    <button type="button" onClick={() => alert("Upload action triggered.")} className="px-3.5 py-1.5 bg-[#111111] text-white font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all rounded-[2px]">Change Avatar</button>
                    <span className="text-[10px] text-[#6B7280] block sm:inline ml-3">PNG/JPG up to 1MB.</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Full Name</label>
                    <input type="text" defaultValue="Brij L. Sharma" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Email Address</label>
                    <input type="email" defaultValue="blsharma.ngo@brijbhoomi.org" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Phone number</label>
                    <input type="text" defaultValue="+91 99887 76655" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">System Role</label>
                    <input disabled type="text" defaultValue="Super Admin" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-gray-50 rounded-lg cursor-not-allowed" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "org" && (
              <div className="space-y-4">
                <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/10">Organization Records</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Foundation Name</label>
                    <input type="text" defaultValue="Brij Bhoomi Foundation" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Registration Code</label>
                    <input type="text" defaultValue="NGO/DEL/2021/87265" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Registered Address</label>
                    <input type="text" defaultValue="Plot 45, Govardhan Road, Vrindavan, Mathura, UP - 281121" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Public Contact Email</label>
                    <input type="email" defaultValue="info@brijbhoomifoundation.org" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Public Support Phone</label>
                    <input type="text" defaultValue="+91 565 2442211" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "password" && (
              <div className="space-y-4">
                <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/10">Change Administrator Password</h3>
                
                <div className="space-y-3.5 max-w-sm">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Current Password</label>
                    <input type="password" placeholder="••••••••••••" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">New Password</label>
                    <input type="password" placeholder="••••••••••••" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Confirm Password</label>
                    <input type="password" placeholder="••••••••••••" className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-4">
                <h3 className="text-xs font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/10">Notification Channels</h3>
                
                <div className="space-y-4">
                  {[
                    { id: "email_reg", label: "Email on volunteer registration", desc: "Send summary notification when new volunteer applies." },
                    { id: "email_don", label: "Email on donation transactions", desc: "Notify transactions immediately for auditing purposes." },
                    { id: "sms_urg", label: "SMS on urgent disaster relief alerts", desc: "Broadcast alerts via SMS to nearby volunteers." },
                    { id: "system_bell", label: "Enable browser system sound", desc: "Play notifications alert sound on admin cockpit." }
                  ].map((notif) => (
                    <div key={notif.id} className="flex items-start justify-between gap-4 p-3 bg-white border border-[#D8C6A8]/20 rounded-xl hover:border-[#8B6F47]/20 transition-all">
                      <div className="space-y-0.5">
                        <span className="font-semibold text-[#111111]">{notif.label}</span>
                        <p className="text-[10px] text-[#6B7280]">{notif.desc}</p>
                      </div>
                      <input 
                        type="checkbox" 
                        defaultChecked={true} 
                        className="w-4 h-4 text-[#8B6F47] accent-[#8B6F47] rounded border-[#D8C6A8]/60 mt-0.5 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#D8C6A8]/20 flex gap-3">
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all rounded-[2px] disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}
