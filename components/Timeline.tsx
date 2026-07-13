export default function Timeline() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="/about" title="Inside the organization" />

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border border-line bg-panel/60 p-7">
            <div className="font-mono text-xs text-mute uppercase tracking-[0.2em] mb-4">
              // org profile
            </div>
            <p className="text-ink/90 text-sm leading-relaxed">
              REA4V-Lab is a small GitHub organization based in Italy, currently maintaining
              four public repositories: a Spigot punishment plugin (<span className="text-acid">SpigBan</span>),
              a fork of the Modrinth companion app <span className="text-acid">Rinthy</span> and its
              dedicated <span className="text-acid">rinthy-website</span>, and a reserved,
              not-yet-built <span className="text-acid">Website</span> repo for the org&apos;s own
              future home page.
            </p>
            <p className="text-mute text-sm leading-relaxed mt-4">
              rinthy-website carries an explicit open-contribution note in its README —
              pull requests are welcome if you want to help shape it.
            </p>
          </div>

          <div className="border border-line bg-panel/60 p-7 font-mono text-sm">
            <div className="text-mute mb-4 text-xs uppercase tracking-[0.2em]">
              // people
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-acid shadow-[0_0_8px_rgba(140,255,107,0.6)]" />
              <a
                href="https://github.com/EmanuelPlays"
                target="_blank"
                rel="noreferrer"
                className="text-ink hover:text-acid transition-colors"
              >
                EmanuelPlays
              </a>
            </div>
            <div className="text-mute text-xs mt-2 pl-5">1 follower · sole maintainer</div>

            <div className="mt-6 pt-4 border-t border-line/60 space-y-1.5 text-xs text-mute">
              <p><span className="text-signal">location</span>: Italy</p>
              <p><span className="text-signal">repos</span>: 4 public</p>
              <p><span className="text-signal">languages</span>: Java, TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div>
        <div className="font-mono text-xs text-acid uppercase tracking-[0.3em] mb-3">{eyebrow}</div>
        <h2 className="font-display font-black text-4xl md:text-5xl text-ink leading-none">{title}</h2>
      </div>
    </div>
  );
}
