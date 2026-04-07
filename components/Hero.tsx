"use client";

import dynamic from "next/dynamic";

const JerseyViewer = dynamic(() => import("./JerseyViewer"), { ssr: false });

export default function Hero({ onBuyClick }: { onBuyClick: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a1e] via-[#0d0d0d] to-[#0d0d0d] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7B5EA7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[#FF2D9B]/10 border border-[#FF2D9B]/30 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF2D9B] pulse" />
          <span className="text-[#FF2D9B] text-xs font-semibold tracking-widest uppercase">
            Limited Stock
          </span>
        </div>

        {/* Headline */}
        <div className="text-center fade-in-up">
          <h1 className="font-bebas text-[72px] sm:text-[96px] leading-none tracking-wide gradient-text">
            WEAR
          </h1>
          <h1 className="font-bebas text-[72px] sm:text-[96px] leading-none tracking-wide text-[#F5F5F5]">
            PALESTINE.
          </h1>
        </div>

        {/* Subline */}
        <p className="text-center text-[#888] text-sm sm:text-base leading-relaxed max-w-sm">
          Limited FC Palestina floral jersey. Arabic calligraphy. All-over print.{" "}
          <span className="text-[#009736] font-semibold">
            20% of every sale funds Gaza.
          </span>
        </p>

        {/* 3D Viewer */}
        <div className="w-full">
          <JerseyViewer />
        </div>

        {/* Price + CTA */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex items-baseline gap-3">
            <span className="price-original text-lg text-[#555]">£29.99</span>
            <span className="text-3xl font-bold text-[#FF2D9B]">£23.99</span>
            <span className="bg-[#FF2D9B]/10 text-[#FF2D9B] text-xs font-bold px-2 py-0.5 rounded-full border border-[#FF2D9B]/30">
              20% OFF
            </span>
          </div>

          <button
            onClick={onBuyClick}
            className="w-full max-w-sm bg-[#FF2D9B] hover:bg-[#e0257f] active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-2xl glow-pink"
          >
            Get Yours — £23.99
          </button>

          <p className="text-[#555] text-xs text-center">
            Free UK delivery · Secure checkout · Ships via Evri
          </p>
        </div>
      </div>
    </section>
  );
}
