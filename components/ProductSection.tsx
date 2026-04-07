"use client";

import { useState } from "react";

const STOCK: Record<string, number> = {
  S: 6,
  M: 2,
  L: 5,
  XL: 0,
};

const SIZES = ["S", "M", "L", "XL"];

interface ProductSectionProps {
  onBuyClick: (size: string) => void;
}

export default function ProductSection({ onBuyClick }: ProductSectionProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const totalLeft = Object.values(STOCK).reduce((a, b) => a + b, 0);

  function handleBuy() {
    if (!selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    onBuyClick(selectedSize);
  }

  return (
    <section id="product" className="px-4 py-12 max-w-lg mx-auto">
      {/* Product title */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#009736]/10 border border-[#009736]/30 text-[#009736] text-xs font-semibold px-2 py-0.5 rounded-full">
            IN STOCK
          </span>
          <span className="text-[#555] text-xs">{totalLeft} remaining</span>
        </div>
        <h2 className="font-bebas text-4xl tracking-wide text-[#F5F5F5]">
          FC Palestina Floral Jersey
        </h2>
        <p className="text-[#888] text-sm mt-1">
          All-over botanical print · Hot pink Arabic calligraphy · FC Palestina badge
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-6">
        <span className="price-original text-base text-[#555]">£29.99</span>
        <span className="text-4xl font-bold text-[#FF2D9B]">£23.99</span>
        <span className="bg-[#FF2D9B]/10 text-[#FF2D9B] text-xs font-bold px-2 py-0.5 rounded-full border border-[#FF2D9B]/30">
          SAVE £6
        </span>
      </div>

      {/* Size selector */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-[#F5F5F5]">Select Size</span>
          <button className="text-xs text-[#FF2D9B] underline underline-offset-2">
            Size Guide
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {SIZES.map((size) => {
            const stock = STOCK[size];
            const outOfStock = stock === 0;
            const lowStock = stock > 0 && stock <= 2;
            const isSelected = selectedSize === size;

            return (
              <button
                key={size}
                disabled={outOfStock}
                onClick={() => setSelectedSize(size)}
                className={`relative py-3 rounded-xl border text-sm font-semibold transition-all
                  ${outOfStock
                    ? "border-[#2a2a2a] text-[#444] cursor-not-allowed line-through bg-[#111]"
                    : isSelected
                    ? "border-[#FF2D9B] bg-[#FF2D9B]/10 text-[#FF2D9B] glow-pink"
                    : "border-[#2a2a2a] text-[#F5F5F5] bg-[#1a1a1a] hover:border-[#FF2D9B]/50 active:scale-95"
                  }`}
              >
                {size}
                {lowStock && !outOfStock && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#EE2A35] text-white text-[9px] font-bold px-1 rounded-full">
                    {stock} left
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {error && (
          <p className="text-[#EE2A35] text-xs mt-2 fade-in-up">
            Please select a size before continuing.
          </p>
        )}
      </div>

      {/* Buy button */}
      <button
        onClick={handleBuy}
        className="w-full bg-[#FF2D9B] hover:bg-[#e0257f] active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-2xl glow-pink mb-3"
      >
        Add to Cart — £23.99
      </button>

      {/* Trust signals */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {[
          { icon: "🔒", label: "Secure Pay" },
          { icon: "📦", label: "Ships Evri" },
          { icon: "🇵🇸", label: "20% to Gaza" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl py-3"
          >
            <span className="text-xl">{icon}</span>
            <span className="text-[#888] text-[10px] font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
