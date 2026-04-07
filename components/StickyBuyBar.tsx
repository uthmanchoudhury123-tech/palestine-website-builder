"use client";

interface StickyBuyBarProps {
  onBuyClick: () => void;
}

export default function StickyBuyBar({ onBuyClick }: StickyBuyBarProps) {
  return (
    <div className="sticky-buy-bar sm:hidden">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="price-original text-xs text-[#555]">£29.99</span>
          <span className="text-[#FF2D9B] font-bold text-xl leading-none">£23.99</span>
        </div>
        <button
          onClick={onBuyClick}
          className="flex-1 bg-[#FF2D9B] hover:bg-[#e0257f] active:scale-95 transition-all text-white font-bold text-base py-3.5 rounded-2xl glow-pink"
        >
          Buy Now — Free Delivery
        </button>
      </div>
    </div>
  );
}
