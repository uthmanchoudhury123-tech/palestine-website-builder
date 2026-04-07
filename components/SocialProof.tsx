export default function SocialProof() {
  return (
    <section className="px-4 py-12 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-widest text-[#FF2D9B] uppercase">
          As Seen On
        </span>
        <h2 className="font-bebas text-3xl tracking-wide text-[#F5F5F5] mt-1">
          TikTok
        </h2>
      </div>

      {/* TikTok embed placeholder */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden mb-6">
        <div className="aspect-[9/16] flex flex-col items-center justify-center gap-3 text-center px-6">
          <div className="w-14 h-14 rounded-full bg-[#FF2D9B]/10 border border-[#FF2D9B]/30 flex items-center justify-center text-2xl">
            ▶
          </div>
          <p className="text-[#888] text-sm">
            Add your TikTok video embed code here
          </p>
          <p className="text-[#555] text-xs">
            Replace this block with a{" "}
            <code className="text-[#FF2D9B]">&lt;blockquote&gt;</code> TikTok embed
          </p>
        </div>
      </div>

      {/* Social stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { stat: "🇵🇸", label: "Free Palestine" },
          { stat: "100%", label: "Authentic" },
          { stat: "MAP", label: "Verified Charity" },
        ].map(({ stat, label }) => (
          <div
            key={label}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl py-4 flex flex-col items-center gap-1"
          >
            <span className="font-bebas text-2xl text-[#FF2D9B]">{stat}</span>
            <span className="text-[#888] text-[10px] font-medium text-center">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
