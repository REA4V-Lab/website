export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-line/80 bg-void/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative w-2.5 h-2.5 rounded-full bg-acid shadow-[0_0_12px_2px_rgba(140,255,107,0.7)]">
            <span className="absolute inset-0 rounded-full bg-acid animate-ping opacity-60" />
          </span>
          <span className="font-display font-extrabold tracking-tight text-sm md:text-base text-ink">
            REA4V<span className="text-acid">-LAB</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-mute">
          <a href="#projects" className="hover:text-acid transition-colors">Projects</a>
          <a href="#stack" className="hover:text-acid transition-colors">Stack</a>
          <a href="#about" className="hover:text-acid transition-colors">About</a>
          <a href="#contact" className="hover:text-acid transition-colors">Contact</a>
        </nav>
        <a
          href="https://github.com/REA4V-Lab"
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.2em] border border-line px-4 py-2 text-ink hover:border-acid hover:text-acid transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
