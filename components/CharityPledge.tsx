"use client";

import { useEffect, useState } from "react";

export default function CharityPledge() {
  const [raised, setRaised] = useState(0);

  useEffect(() => {
    // Fetch real total from API once wired to Supabase
    // For now, animate to starter value
    const timer = setTimeout(() => setRaised(0), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 py-14 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#009736]/20 border border-[#009736]/40 flex items-center justify-center text-lg">
          🇵🇸
        </div>
        <div>
          <h2 className="font-bebas text-3xl tracking-wide text-[#F5F5F5]">
            Real Aid. Real People.
          </h2>
          <p className="text-[#009736] text-xs font-semibold tracking-wide">
            VERIFIED CHARITY PARTNER
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="bg-[#1a1a1a] border border-[#009736]/20 rounded-2xl overflow-hidden mb-6">
        {/* Green top bar */}
        <div className="h-1 bg-gradient-to-r from-[#009736] via-[#00b344] to-[#009736]" />

        <div className="p-5">
          {/* Charity name */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-[#F5F5F5] font-bold text-base">
                Medical Aid for Palestinians
              </h3>
              <p className="text-[#888] text-xs mt-0.5">
                map.org.uk · Est. 1984 · UK Registered Charity
              </p>
            </div>
            <a
              href="https://www.map.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009736] text-xs border border-[#009736]/30 rounded-full px-3 py-1 hover:bg-[#009736]/10 transition-colors"
            >
              Visit ↗
            </a>
          </div>

          {/* 20% pledge highlight */}
          <div className="bg-[#009736]/10 border border-[#009736]/20 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bebas text-[#009736]">20%</span>
              <div>
                <p className="text-[#F5F5F5] text-sm font-semibold">
                  of every sale goes directly to MAP
                </p>
                <p className="text-[#888] text-xs">
                  That&apos;s £4.80 from every jersey sold funding Gaza
                </p>
              </div>
            </div>
          </div>

          {/* What MAP does */}
          <div className="flex flex-col gap-2">
            {[
              "🏥  Emergency medical care in Gaza hospitals",
              "💧  Clean water to displacement camps",
              "👶  Neonatal & maternity care",
              "🩺  Surgical supplies & medicines",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <p className="text-[#999] text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Running total */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-[#888] text-xs font-medium mb-1">RAISED FOR GAZA SO FAR</p>
          <p className="text-3xl font-bold text-[#009736]">
            £{raised.toFixed(2)}
          </p>
          <p className="text-[#555] text-xs mt-1">Updated monthly · Receipts published</p>
        </div>
        <div className="w-14 h-14 rounded-full bg-[#009736]/10 border border-[#009736]/20 flex items-center justify-center text-2xl">
          🕊
        </div>
      </div>

      {/* Transparency note */}
      <p className="text-center text-[#555] text-xs mt-4 leading-relaxed">
        We publish all donation receipts to MAP monthly.{" "}
        <span className="text-[#009736]">Zero excuses. Full transparency.</span>
      </p>
    </section>
  );
}
