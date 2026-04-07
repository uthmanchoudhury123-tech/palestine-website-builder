"use client";

import { useState, useEffect } from "react";

export default function Navbar({ onBuyClick }: { onBuyClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="font-bebas text-2xl tracking-widest text-[#F5F5F5]">
          PALESTINA
        </span>

        {/* Centre badge */}
        <div className="hidden sm:flex items-center gap-2 bg-[#009736]/10 border border-[#009736]/30 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-[#009736] pulse" />
          <span className="text-[#009736] text-xs font-semibold tracking-wide">
            20% TO GAZA
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={onBuyClick}
          className="bg-[#FF2D9B] hover:bg-[#e0257f] active:scale-95 transition-all text-white text-sm font-semibold px-4 py-2 rounded-full"
        >
          Buy Now
        </button>
      </div>
    </nav>
  );
}
