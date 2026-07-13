"use client";

import { useState } from "react";
import { Project } from "@/lib/projects";

const statusMap: Record<Project["status"], { label: string; dot: string; text: string }> = {
  shipped: { label: "SHIPPED", dot: "bg-acid", text: "text-acid" },
  active: { label: "ACTIVE", dot: "bg-signal", text: "text-signal" },
  stub: { label: "PLACEHOLDER", dot: "bg-amber", text: "text-amber" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const status = statusMap[project.status];

  return (
    <article className="group relative flex flex-col border border-line bg-panel/60 card-glow transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#3a4640]" />
          <span className="w-2 h-2 rounded-full bg-[#3a4640]" />
          <span className="w-2 h-2 rounded-full bg-[#3a4640]" />
          <span className="ml-2 font-mono text-[11px] text-mute tracking-wide">
            github.com/REA4V-Lab/{project.name}
          </span>
        </div>
        <div className={`flex items-center gap-2 text-[10px] tracking-[0.15em] ${status.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </div>
      </div>

      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-1">
          <span className="font-mono text-xs text-mute">{project.index}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-acid/80 border border-acid/30 px-2 py-1">
            {project.category}
          </span>
        </div>

        <h3 className="font-display font-extrabold text-2xl md:text-[1.7rem] text-ink leading-tight mt-3">
          {project.name}
        </h3>
        <p className="text-acid text-sm mt-2 font-medium">{project.tagline}</p>

        <p className="text-mute text-sm leading-relaxed mt-4">{project.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-5">
          <div className="text-xs uppercase tracking-[0.15em] text-mute">{isOpen ? "Expanded" : "Collapsed"}</div>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded border border-line px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-signal transition-colors hover:border-acid/30 hover:text-acid"
            aria-expanded={isOpen}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </div>

        {isOpen && (
          <div className="mt-5 space-y-6">
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink/90 leading-snug">
                  <span className="text-acid mt-0.5 shrink-0">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line/70 pt-5">
              {project.meta.map((m) => (
                <div key={m.label} className="text-xs">
                  <div className="text-mute uppercase tracking-[0.1em]">{m.label}</div>
                  <div className="text-ink/90 font-mono mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-line/70 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono text-mute border border-line px-2.5 py-1 group-hover:border-acid/30 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>

            {project.links && (
              <div className="flex flex-wrap gap-4 border-t border-line/70 pt-5">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-[0.15em] text-signal hover:text-acid transition-colors"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
