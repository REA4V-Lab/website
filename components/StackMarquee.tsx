import { stackCloud } from "@/lib/projects";

export default function StackMarquee() {
  const items = [...stackCloud, ...stackCloud];
  return (
    <div id="stack" className="border-y border-line bg-panel/40 py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-5 font-mono text-sm text-mute flex items-center gap-5"
          >
            {item}
            <span className="text-acid/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
