export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20">
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-ink leading-[1.02]">
              Building something?
              <br />
              <span className="text-acid">Let&apos;s look at the repo.</span>
            </h2>
            <p className="text-mute mt-6 max-w-md text-sm leading-relaxed">
              REA4V-Lab is a small, active organization — SpigBan and the Rinthy apps
              ship on no fixed schedule. The best way to follow along is the source itself.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/REA4V-Lab"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.2em] bg-acid text-void px-6 py-3 font-semibold hover:bg-ink transition-colors"
              >
                Browse REA4V-Lab ↗
              </a>
              <a
                href="https://github.com/EmanuelPlays"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.2em] border border-line px-6 py-3 text-ink hover:border-acid hover:text-acid transition-colors"
              >
                @EmanuelPlays ↗
              </a>
            </div>
          </div>

          <div className="border border-line bg-panel/60 p-6 font-mono text-sm">
            <div className="text-mute mb-4 text-xs uppercase tracking-[0.2em]">
              // whoami
            </div>
            <div className="space-y-2 text-ink/90">
              <p><span className="text-acid">org</span>: REA4V-Lab</p>
              <p><span className="text-acid">maintainer</span>: EmanuelPlays</p>
              <p><span className="text-acid">base</span>: Italy</p>
              <p><span className="text-acid">languages</span>: Java, TypeScript</p>
              <p><span className="text-acid">repos</span>: SpigBan · Rinthy · rinthy-website · Website</p>
              <p className="pt-2 border-t border-line/60 mt-3">
                <span className="text-signal">$</span> <span className="animate-blink">_</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-line flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-mute">
          <span>© {new Date().getFullYear()} REA4V-Lab. Built solo, shipped in the open.</span>
          <span className="font-mono">status: <span className="text-acid">operational</span></span>
        </div>
      </div>
    </footer>
  );
}



