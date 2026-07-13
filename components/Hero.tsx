import { orgFacts } from "@/lib/projects";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 md:pt-48 md:pb-36 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-acid mb-8 animate-rise">
          <span className="w-8 h-px bg-acid" />
          github.com/REA4V-Lab · Italy
        </div>

        <h1 className="font-display font-black leading-[0.92] text-[13vw] md:text-[6.5rem] lg:text-[7.5rem] tracking-tight text-ink animate-rise" style={{ animationDelay: "80ms" }}>
          REA4V<span className="text-acid text-glow">-LAB</span>.
        </h1>

        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end animate-rise" style={{ animationDelay: "180ms" }}>
          <p className="max-w-2xl text-mute text-base md:text-lg leading-relaxed">
            The GitHub organization of <span className="text-ink">EmanuelPlays</span> — home to a
            Spigot punishment plugin, a Modrinth companion app, its marketing site, and one
            reserved spot for the lab&apos;s own home page. Four repositories, everything
            below pulled straight from the source.
          </p>
          <a
            href="#projects"
            className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] border border-acid text-acid px-6 py-3 hover:bg-acid hover:text-void transition-colors self-start md:self-end"
          >
            [ view repositories ]
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-20 border-t border-line pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs animate-rise" style={{ animationDelay: "260ms" }}>
        {orgFacts.map(([n, label]) => (
          <div key={label}>
            <div className="font-display text-3xl md:text-4xl font-extrabold text-ink">{n}</div>
            <div className="text-mute mt-1 uppercase tracking-wide">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
