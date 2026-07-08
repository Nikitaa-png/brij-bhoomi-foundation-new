import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  Edit, 
  Trash, 
  X,
  FileText,
  AlertCircle
} from "lucide-react";

export default function AdminBlog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showWriteForm, setShowWriteForm] = useState(false);

  const initialPosts = [
    { id: 1, title: "Restoring the Heritage Kunds of Vrindavan", category: "Heritage Restoration", date: "05 July 2026", author: "Devendra Singh", status: "Published" },
    { id: 2, title: "Vocational Tailoring Center Empowers Local Women", category: "Women Empowerment", date: "02 July 2026", author: "Radhika Malhotra", status: "Published" },
    { id: 3, title: "Vrindavan Afforestation: Over 10,000 Saplings Planted", category: "Environmental Conservation", date: "28 June 2026", author: "Shyam Sundar", status: "Published" },
    { id: 4, title: "Education and Digital Literacy: Empowering Underprivileged Kids", category: "Education", date: "08 July 2026", author: "Meera Patel", status: "Draft" },
    { id: 5, title: "Community Healthcare Camp in Govardhan to Offer Free Checkups", category: "Healthcare", date: "07 July 2026", author: "Dr. Alok Sen", status: "Draft" }
  ];

  const [posts, setPosts] = useState(initialPosts);

  // New Post Form State
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("Education");
  const [content, setContent] = useState("");

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!title) return;

    const newPost = {
      id: Date.now(),
      title,
      category: cat,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
      author: "Super Admin",
      status: "Draft"
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
    setShowWriteForm(false);
  };

  const filteredPosts = posts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Publications</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            News & Blog Portal
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Write new articles, manage drafts, and publish announcements regarding campaign progress and events.
          </p>
        </div>

        <div>
          <button
            onClick={() => setShowWriteForm(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all duration-300 rounded-[2px]"
          >
            <Plus size={14} />
            Write Article
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
            placeholder="Search article titles, author..."
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
            {["all", "published", "draft"].map((status) => (
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

      {/* Articles List / Table */}
      <div className="bg-[#FCFAF5] border border-[#D8C6A8]/50 rounded-[16px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          {filteredPosts.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D8C6A8]/20 bg-[#FAF9F6]/50">
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold pl-6">Article Title</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Category</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Author</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Last Modified</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold">Status</th>
                  <th className="p-4 text-[11px] uppercase tracking-wider text-[#6B7280] font-semibold text-right pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8C6A8]/10 text-xs">
                {filteredPosts.map((p) => (
                  <tr key={p.id} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    
                    {/* Title */}
                    <td className="p-4 pl-6 max-w-sm">
                      <div className="font-sora font-semibold text-xs text-[#111111] leading-snug truncate">
                        {p.title}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-4 text-[#6B7280]">{p.category}</td>

                    {/* Author */}
                    <td className="p-4 text-[#111111] font-medium">{p.author}</td>

                    {/* Date */}
                    <td className="p-4 text-[#6B7280]">
                      <div className="flex items-center gap-1.5">
                        <Clock size={11} className="text-[#8B6F47]" />
                        <span>{p.date}</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="p-4">
                      <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold rounded-md ${
                        p.status === 'Published' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {p.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right pr-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 hover:bg-[#F2E8D6]/40 rounded text-[#8B6F47] transition-colors" title="Edit Post">
                          <Edit size={13} />
                        </button>
                        <button className="p-1 hover:bg-red-50 rounded text-red-600 transition-colors" title="Delete Post">
                          <Trash size={13} />
                        </button>
                      </div>
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
              <h3 className="text-sm font-sora font-semibold text-[#111111]">No Articles Found</h3>
              <p className="text-xs text-[#6B7280] max-w-sm">
                No published articles or drafts matched your keyword search. Try another query.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Write Post Form Modal */}
      {showWriteForm && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/40 transition-opacity"
            onClick={() => setShowWriteForm(false)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#FAF9F6] border-l border-[#D8C6A8]/50 shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-[#D8C6A8]/20">
                <h2 className="text-md font-sora font-semibold text-[#111111] uppercase tracking-wider">Draft Article</h2>
                <button
                  onClick={() => setShowWriteForm(false)}
                  className="p-1 hover:bg-[#F2E8D6]/40 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="space-y-4 text-xs text-left">
                
                <div className="space-y-1">
                  <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Article Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter catching header..."
                    className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Category</label>
                  <select
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                    className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47] font-semibold"
                  >
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Environmental Conservation">Environmental Conservation</option>
                    <option value="Heritage Restoration">Heritage Restoration</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Article Body Content</label>
                  <textarea
                    rows={8}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start drafting here... HTML/Markdown tags are parsed on the public portal."
                    className="w-full p-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47]"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#8B6F47] transition-all rounded-[2px]"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      alert("Article directly published to home portal!");
                      setShowWriteForm(false);
                    }}
                    className="flex-1 py-2.5 bg-[#8B6F47] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#111111] transition-all rounded-[2px]"
                  >
                    Publish Directly
                  </button>
                </div>

              </form>

            </div>

            <div className="pt-4 border-t border-[#D8C6A8]/20 text-[10px] text-[#6B7280] text-center">
              Published articles appear instantly on the public News tab.
            </div>

          </div>
        </>
      )}

    </div>
  );
}
