"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import JerseyDetails from "@/components/JerseyDetails";
import BrandStory from "@/components/BrandStory";
import CharityPledge from "@/components/CharityPledge";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";

const CheckoutModal = dynamic(() => import("@/components/CheckoutModal"), {
  ssr: false,
});

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  function openCheckout(size?: string) {
    if (size) setSelectedSize(size);
    setCheckoutOpen(true);
  }

  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navbar onBuyClick={() => openCheckout()} />

      <Hero onBuyClick={() => openCheckout()} />

      <ProductSection
        onBuyClick={(size) => openCheckout(size)}
      />

      <div className="border-t border-[#1a1a1a]" />
      <JerseyDetails />

      <div className="border-t border-[#1a1a1a]" />
      <BrandStory />

      <div className="border-t border-[#1a1a1a]" />
      <CharityPledge />

      <div className="border-t border-[#1a1a1a]" />
      <SocialProof />

      <Footer />

      {/* Mobile sticky bar */}
      <StickyBuyBar onBuyClick={() => openCheckout()} />

      {/* Checkout modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        initialSize={selectedSize}
      />
    </main>
  );
}
