export default function BrandStory() {
  return (
    <section className="px-4 py-14 max-w-lg mx-auto">
      {/* Palestinian flag bar */}
      <div className="flex h-1.5 rounded-full overflow-hidden mb-8">
        <div className="flex-1 bg-[#EE2A35]" />
        <div className="flex-1 bg-[#F5F5F5]" />
        <div className="flex-1 bg-[#0d0d0d] border-y border-[#2a2a2a]" />
        <div className="flex-1 bg-[#009736]" />
      </div>

      <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide text-[#F5F5F5] mb-2">
        More Than A Jersey.
      </h2>
      <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide gradient-text mb-6">
        It&apos;s A Statement.
      </h3>

      <div className="flex flex-col gap-4 text-[#999] text-sm sm:text-base leading-relaxed">
        <p>
          Palestine has always dressed with meaning. From the tatreez — the intricate
          hand-stitched embroidery woven into every Palestinian thobe — to the keffiyeh
          worn as both armour and identity. Palestinian clothing has never just been
          clothing. It has been survival, culture and defiance in one.
        </p>

        <p>
          This jersey carries that same spirit. The floral pattern echoes the tatreez
          of Palestinian artisans. The hot pink Arabic calligraphy — <span className="text-[#FF2D9B] font-semibold">فلسطين</span> — does
          not whisper. It declares. Every detail was chosen to represent a people who
          refuse to be erased.
        </p>

        <p>
          We don&apos;t do fast fashion. We do{" "}
          <span className="text-[#F5F5F5] font-semibold">purposeful fashion</span>. Wearing
          Palestina means you stand with Gaza — visibly, with class, without apology.
          This is how the movement looks when it dresses well.
        </p>

        <p className="text-[#F5F5F5] font-semibold">
          One jersey. One statement. Worn with intention. 🇵🇸
        </p>
      </div>
    </section>
  );
}
