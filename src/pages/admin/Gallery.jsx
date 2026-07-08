import React, { useState } from "react";
import { Upload, X, Trash, Eye, Image as ImageIcon, AlertCircle } from "lucide-react";

export default function AdminGallery() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isDragging, setIsDragging] = useState(false);

  const categories = ["ALL", "EDUCATION", "HEALTHCARE", "WOMEN EMPOWERMENT", "ENVIRONMENT", "RURAL DEVELOPMENT", "EVENTS"];

  const initialImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=300", title: "Rural School Tutoring Drive", category: "EDUCATION" },
    { id: 2, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300", title: "Rural Health Diagnostic Clinic", category: "HEALTHCARE" },
    { id: 3, src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=300", title: "Women Sewing Vocational Workshop", category: "WOMEN EMPOWERMENT" },
    { id: 4, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=300", title: "Village Afforestation Tree Planting", category: "ENVIRONMENT" },
    { id: 5, src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=300", title: "Radha Kund Stepwell Debris Clean", category: "RURAL DEVELOPMENT" },
    { id: 6, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=300", title: "Community Relief Material Distribution", category: "EVENTS" },
  ];

  const [images, setImages] = useState(initialImages);

  const handleDelete = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    alert("Simulated upload: Image files dropped!");
  };

  const filteredImages = images.filter(
    (img) => selectedCategory === "ALL" || img.category === selectedCategory
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300 relative text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8C6A8]/20 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold block mb-1">Media Repository</span>
          <h1 className="text-3xl font-sora font-semibold text-[#111111] tracking-tight">
            Gallery Management
          </h1>
          <p className="text-xs text-[#6B7280] font-inter mt-1">
            Upload new photography, categorize project drives, and manage the website's image portfolios.
          </p>
        </div>
      </div>

      {/* Grid: Upload Zone + Portfolio Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Upload Zone (Col Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-sm font-sora font-semibold text-[#111111] uppercase tracking-wider pb-2 border-b border-[#D8C6A8]/20">Upload Media</h2>
          
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-[16px] p-8 text-center flex flex-col items-center justify-center space-y-4 transition-all ${
              isDragging 
                ? 'border-[#8B6F47] bg-[#F2E8D6]/20' 
                : 'border-[#D8C6A8]/65 bg-[#FCFAF5] hover:border-[#8B6F47]/50'
            }`}
          >
            <div className="p-4 bg-[#F2E8D6]/50 rounded-full text-[#8B6F47]">
              <Upload size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#111111]">Drag and drop your photos here</p>
              <p className="text-[10px] text-[#6B7280] mt-1">or click to browse local folders</p>
            </div>
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              onChange={() => alert("Simulated: Local file selector opened.")} 
              className="hidden" 
              id="file-upload-input" 
            />
            <label 
              htmlFor="file-upload-input" 
              className="px-4 py-2 border border-[#8B6F47]/50 text-[#8B6F47] hover:bg-[#F2E8D6]/20 transition-all text-[10px] font-semibold uppercase tracking-widest rounded-[2px] cursor-pointer"
            >
              Select Image
            </label>
            <p className="text-[9px] text-[#6B7280] max-w-[200px]">Supports PNG, JPG, or WEBP up to 5MB. Must match Brij Bhoomi Foundation's code of conduct.</p>
          </div>
        </div>

        {/* Portfolio Gallery (Col Span 8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-[#D8C6A8]/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider rounded-md border transition-all ${
                  selectedCategory === cat
                    ? "bg-[#F2E8D6] text-[#8B6F47] border-[#8B6F47]/30"
                    : "bg-white text-[#6B7280] border-[#D8C6A8]/40 hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredImages.map((img) => (
                <div 
                  key={img.id}
                  className="bg-white border border-[#D8C6A8]/50 rounded-xl overflow-hidden shadow-sm group hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative aspect-square"
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  />
                  
                  {/* Hover overlay overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                    <span className="text-[8px] uppercase tracking-wider bg-[#8B6F47] text-white px-2 py-0.5 w-fit rounded mb-1.5 font-semibold">
                      {img.category}
                    </span>
                    <h4 className="text-xs font-semibold text-white leading-snug">{img.title}</h4>
                    
                    <div className="flex items-center gap-3 mt-3 pt-2.5 border-t border-white/20">
                      <button 
                        onClick={() => alert(`Previewing: ${img.title}`)} 
                        className="text-white hover:text-[#8B6F47] transition-colors flex items-center gap-1 text-[10px] font-semibold"
                      >
                        <Eye size={12} /> Preview
                      </button>
                      <button 
                        onClick={() => handleDelete(img.id)} 
                        className="text-red-400 hover:text-red-600 transition-colors flex items-center gap-1 text-[10px] font-semibold ml-auto"
                      >
                        <Trash size={12} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center border border-[#D8C6A8]/30 rounded-xl bg-[#FCFAF5] flex flex-col items-center justify-center space-y-3">
              <div className="p-4 bg-[#F2E8D6]/40 text-[#8B6F47] rounded-full">
                <AlertCircle size={28} />
              </div>
              <h3 className="text-sm font-sora font-semibold text-[#111111]">No Media Items Found</h3>
              <p className="text-xs text-[#6B7280]">
                This category is currently empty. Start uploading photos to represent this initiative.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
