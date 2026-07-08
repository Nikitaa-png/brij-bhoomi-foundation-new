import React, { useState } from "react";
import { Search, Mail, Send, ChevronRight, Check, User, ShieldCheck } from "lucide-react";

export default function AdminMessages() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const initialThreads = [
    { 
      id: 1, 
      sender: "Harish Chandra", 
      email: "harish.chandra@gmail.com",
      subject: "CSR Partnership Proposal", 
      preview: "We would like to partner with your foundation for our annual CSR tree plantation drive.", 
      time: "10 mins ago", 
      unread: true,
      messages: [
        { sender: "Harish Chandra", text: "Hello Brij Bhoomi Foundation team, I am Harish from TechCorp. We would like to partner with your foundation for our annual CSR tree plantation drive.", time: "10 mins ago", isSelf: false }
      ]
    },
    { 
      id: 2, 
      sender: "Nisha Dwivedi", 
      email: "nisha.d@outlook.com",
      subject: "Volunteer Application Query", 
      preview: "Hello, I completed the registration form yesterday. How long does the review take?", 
      time: "2 hours ago", 
      unread: true,
      messages: [
        { sender: "Nisha Dwivedi", text: "Hello, I completed the registration form yesterday. How long does the review take? I am keen to help out with the primary school tutor campaigns.", time: "2 hours ago", isSelf: false }
      ]
    },
    { 
      id: 3, 
      sender: "Vikram Malhotra", 
      email: "v.malhotra@yahoo.com",
      subject: "Stepwell Cleaning Drive Schedule", 
      preview: "Thank you for the update. I will be joining with 3 other team members this Sunday.", 
      time: "Yesterday", 
      unread: false,
      messages: [
        { sender: "NGO Admin", text: "Hi Vikram, the stepwell drive starts at 07:00 AM. Water bottles and gloves will be provided.", time: "Yesterday, 04:00 PM", isSelf: true },
        { sender: "Vikram Malhotra", text: "Thank you for the update. I will be joining with 3 other team members this Sunday.", time: "Yesterday, 04:15 PM", isSelf: false }
      ]
    },
    { 
      id: 4, 
      sender: "Rajendra Prasad", 
      email: "r.prasad@gov.in",
      subject: "Govardhan Camp Approvals", 
      preview: "The local municipal corporation has issued permits for the Govardhan health camp.", 
      time: "3 days ago", 
      unread: false,
      messages: [
        { sender: "Rajendra Prasad", text: "The local municipal corporation has issued permits for the Govardhan health camp on 18th July.", time: "3 days ago", isSelf: false }
      ]
    }
  ];

  const [threads, setThreads] = useState(initialThreads);
  const [activeThreadId, setActiveThreadId] = useState(1);
  const [responseMsg, setResponseMsg] = useState("");

  const activeThread = threads.find(t => t.id === activeThreadId);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!responseMsg.trim()) return;

    const updatedThreads = threads.map(t => {
      if (t.id === activeThreadId) {
        const newMsg = {
          sender: "NGO Admin",
          text: responseMsg,
          time: "Just now",
          isSelf: true
        };
        return {
          ...t,
          preview: responseMsg,
          time: "Just now",
          unread: false,
          messages: [...t.messages, newMsg]
        };
      }
      return t;
    });

    setThreads(updatedThreads);
    setResponseMsg("");
  };

  const handleThreadSelect = (id) => {
    setActiveThreadId(id);
    setThreads(threads.map(t => t.id === id ? { ...t, unread: false } : t));
  };

  const filteredThreads = threads.filter(t => 
    t.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="border-b border-[#D8C6A8]/20 pb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Inbox</span>
        <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
          Inbox & Messages
        </h1>
        <p className="text-xs text-[#6B7280] font-inter mt-1">
          Respond to public queries, CSR proposals, and coordinate directly with regional campaign teams.
        </p>
      </div>

      {/* Main Grid: Inbox Panel Split */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
        
        {/* Left Side: Threads List (Col Span 5) */}
        <div className="md:col-span-5 border-r border-[#D8C6A8]/30 flex flex-col">
          
          {/* Thread Search */}
          <div className="p-4 border-b border-[#D8C6A8]/20">
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8.5 pr-4 py-2 border border-[#D8C6A8]/50 bg-white text-xs rounded-lg focus:outline-none focus:border-[#8B6F47]"
              />
            </div>
          </div>

          {/* Threads Rows */}
          <div className="flex-1 overflow-y-auto max-h-[420px]">
            {filteredThreads.map((thread) => (
              <div
                key={thread.id}
                onClick={() => handleThreadSelect(thread.id)}
                className={`p-4 border-b border-[#D8C6A8]/10 last:border-0 cursor-pointer transition-all flex items-start gap-3 relative ${
                  activeThreadId === thread.id 
                    ? 'bg-[#F2E8D6]/60 border-l-2 border-l-[#8B6F47]' 
                    : 'hover:bg-[#FAF9F6] bg-transparent'
                }`}
              >
                {thread.unread && (
                  <span className="absolute top-4 left-1.5 w-1.5 h-1.5 bg-[#8B6F47] rounded-full"></span>
                )}
                
                <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#D8C6A8]/50 text-[#8B6F47] font-sora font-semibold text-[10px] flex items-center justify-center shrink-0">
                  {thread.sender.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-semibold ${thread.unread ? 'text-[#111111] font-bold' : 'text-[#6B7280]'}`}>{thread.sender}</span>
                    <span className="text-[9px] text-[#6B7280]">{thread.time}</span>
                  </div>
                  <h4 className="text-[11px] font-semibold text-[#111111] truncate mt-1">{thread.subject}</h4>
                  <p className="text-[10px] text-[#6B7280] truncate mt-0.5">{thread.preview}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Conversation Thread (Col Span 7) */}
        <div className="md:col-span-7 flex flex-col justify-between bg-white min-h-[400px]">
          {activeThread ? (
            <>
              {/* Thread Header */}
              <div className="p-4 border-b border-[#D8C6A8]/20 bg-[#FCFAF5]/50 flex justify-between items-center text-left">
                <div>
                  <h3 className="text-xs font-sora font-semibold text-[#111111]">{activeThread.sender}</h3>
                  <p className="text-[10px] text-[#6B7280] mt-0.5">{activeThread.email} • {activeThread.subject}</p>
                </div>
                <span className="text-[9px] text-[#8B6F47] bg-[#F2E8D6] px-2 py-0.5 font-semibold rounded-[4px] uppercase tracking-wider">
                  Active Thread
                </span>
              </div>

              {/* Message History list */}
              <div className="flex-1 p-4 overflow-y-auto max-h-[300px] space-y-4">
                {activeThread.messages.map((m, index) => (
                  <div key={index} className={`flex ${m.isSelf ? 'justify-end' : 'justify-start'} text-left`}>
                    <div className={`max-w-[75%] rounded-xl p-3 text-xs ${
                      m.isSelf 
                        ? 'bg-[#F2E8D6] text-[#111111] border border-[#8B6F47]/20 rounded-tr-none' 
                        : 'bg-[#FAF9F6] text-[#111111] border border-[#D8C6A8]/50 rounded-tl-none'
                    }`}>
                      <p className="leading-relaxed">{m.text}</p>
                      <span className="text-[8px] text-[#6B7280] mt-1.5 block text-right">
                        {m.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-[#D8C6A8]/20 bg-[#FCFAF5]/50 flex gap-3">
                <input
                  type="text"
                  value={responseMsg}
                  onChange={(e) => setResponseMsg(e.target.value)}
                  placeholder={`Write your response to ${activeThread.sender}...`}
                  className="flex-1 px-3 py-2 border border-[#D8C6A8]/50 bg-white text-xs rounded-lg focus:outline-none focus:border-[#8B6F47]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#8B6F47] transition-all flex items-center gap-1.5"
                >
                  <span>Send</span>
                  <Send size={11} />
                </button>
              </form>
            </>
          ) : (
            // Thread Empty state
            <div className="p-12 text-center flex flex-col items-center justify-center h-full space-y-3">
              <Mail size={32} className="text-[#8B6F47]" />
              <p className="text-xs text-[#6B7280]">Select a thread from the inbox to view conversation history.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
