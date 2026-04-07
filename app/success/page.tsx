import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-4 text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#009736]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm mx-auto">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-[#009736]/20 border border-[#009736]/40 flex items-center justify-center text-4xl">
          🇵🇸
        </div>

        {/* Heading */}
        <div>
          <h1 className="font-bebas text-5xl tracking-wide text-[#F5F5F5] mb-2">
            Order Confirmed!
          </h1>
          <p className="text-[#009736] font-semibold text-sm">
            Payment successful
          </p>
        </div>

        {/* Message */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5">
          <p className="text-[#888] text-sm leading-relaxed mb-4">
            Thank you for your order. Your FC Palestina jersey will be dispatched
            within 1–2 business days via Evri. A confirmation email is on its way to you.
          </p>
          <div className="bg-[#009736]/10 border border-[#009736]/20 rounded-xl p-4">
            <p className="text-[#009736] text-sm font-semibold">
              🕊 Your 20% is going to Gaza
            </p>
            <p className="text-[#666] text-xs mt-1">
              A portion of your purchase has been pledged to Medical Aid for
              Palestinians. Thank you for standing with Gaza.
            </p>
          </div>
        </div>

        {/* Palestinian flag bar */}
        <div className="flex h-1 rounded-full overflow-hidden w-32">
          <div className="flex-1 bg-[#EE2A35]" />
          <div className="flex-1 bg-[#F5F5F5]" />
          <div className="flex-1 bg-[#0d0d0d] border-y border-[#333]" />
          <div className="flex-1 bg-[#009736]" />
        </div>

        <Link
          href="/"
          className="w-full text-center border border-[#FF2D9B] text-[#FF2D9B] font-semibold py-3 rounded-2xl hover:bg-[#FF2D9B]/10 transition-colors"
        >
          ← Back to Store
        </Link>
      </div>
    </main>
  );
}
