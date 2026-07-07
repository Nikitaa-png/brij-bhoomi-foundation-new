import React, { useState } from "react";
import { Plus, Minus, ChevronUp, ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion({ 
  items = [], 
  showCategory = false, 
  iconStyle = "plus-minus",
  gridClass = "grid grid-cols-1 gap-4" 
}) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className={gridClass}>
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="premium-card overflow-hidden transition-all duration-300"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.01)" }}
          >
            {/* Question Header */}
            <button
              onClick={() => toggle(idx)}
              className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#F2E8D6]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {showCategory && item.category && (
                  <span className="text-[8px] uppercase tracking-wider bg-[#8B6F47]/10 text-[#8B6F47] px-2.5 py-0.5 rounded-full font-sora font-bold w-max flex-shrink-0">
                    {item.category}
                  </span>
                )}
                <span className="text-[13px] font-sora font-semibold text-[#1f1a14] flex items-center gap-2.5">
                  {iconStyle === "chevron" && (
                    <HelpCircle size={14} className="text-[#B67A2A] flex-shrink-0" />
                  )}
                  {item.q}
                </span>
              </div>
              <div className="text-[#B67A2A] flex-shrink-0">
                {iconStyle === "chevron" ? (
                  isOpen ? <ChevronUp size={14} className="text-[#555] flex-shrink-0" /> : <ChevronDown size={14} className="text-[#555] flex-shrink-0" />
                ) : (
                  isOpen ? <Minus size={12} /> : <Plus size={12} />
                )}
              </div>
            </button>

            {/* Answer Body */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[300px] border-t border-[#D8C6A8]/50 py-4 px-5" : "max-h-0 overflow-hidden"
              }`}
            >
              <p className="text-xs text-[#555555] leading-relaxed font-inter font-normal">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
