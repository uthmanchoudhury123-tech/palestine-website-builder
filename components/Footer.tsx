export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] px-4 py-10 mt-6">
      <div className="max-w-lg mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <h3 className="font-bebas text-4xl tracking-widest text-[#F5F5F5] mb-1">
            PALESTINA
          </h3>
          <p className="text-[#555] text-xs">Wear it. Mean it. Free Palestine.</p>

          {/* Palestinian flag bar */}
          <div className="flex h-1 rounded-full overflow-hidden w-24 mx-auto mt-3">
            <div className="flex-1 bg-[#EE2A35]" />
            <div className="flex-1 bg-[#F5F5F5]" />
            <div className="flex-1 bg-[#0d0d0d] border-y border-[#2a2a2a]" />
            <div className="flex-1 bg-[#009736]" />
          </div>
        </div>

        {/* Charity reminder */}
        <div className="bg-[#009736]/10 border border-[#009736]/20 rounded-xl p-4 mb-8 flex items-center gap-3">
          <span className="text-2xl">🕊</span>
          <div>
            <p className="text-[#009736] text-sm font-semibold">
              20% of all profits → Medical Aid for Palestinians
            </p>
            <a
              href="https://www.map.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] text-xs hover:text-[#009736] transition-colors"
            >
              map.org.uk ↗
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 text-sm">
          {[
            { label: "TikTok", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Contact Us", href: "mailto:hello@palestina.store" },
            { label: "Returns Policy", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[#555] hover:text-[#FF2D9B] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2a2a2a] pt-6 text-center">
          <p className="text-[#444] text-xs">
            © {new Date().getFullYear()} Palestina. All rights reserved.
          </p>
          <p className="text-[#333] text-xs mt-1">
            From the river to the sea 🇵🇸
          </p>
        </div>
      </div>
    </footer>
  );
}
