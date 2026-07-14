export type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  status: "shipped" | "active" | "stub";
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  meta: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

type GitHubRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  private: boolean;
  archived: boolean;
  pushed_at: string;
};

const fallbackProjects: Project[] = [
  {
    id: "spigban",
    index: "01",
    name: "SpigBan",
    category: "Minecraft · Spigot Plugin",
    status: "shipped",
    tagline: "An advanced all-in-one punishment management plugin for Spigot/Paper.",
    description:
      "SpigBan handles bans, tempbans, IP bans, mutes, tempmutes, kicks, and warns from a single admin command suite, with a full case viewer and punishment history behind every action. Storage runs on SQLite by default or MySQL for larger networks, with optional LuckPerms integration and configurable ban/mute screens.",
    highlights: [
      "Full punishment suite: ban, tempban, IP-ban, temp-IP-ban, mute, tempmute, kick, warn/unwarn",
      "Case viewer and punishment history via /case and /history, with SQLite or MySQL storage",
      "Admin command suite (/spigban reload | info | purge) plus optional LuckPerms integration",
      "Configurable ban/mute screens and staff broadcast settings with placeholder support",
      "Ships with a CLA-assistant bot and a documented contribution process",
    ],
    stack: ["Java", "Spigot 1.21.x", "SQLite", "MySQL", "LuckPerms", "Maven"],
    meta: [
      { label: "Language", value: "Java (100%)" },
      { label: "Latest release", value: "v1.0.0 · May 28, 2026" },
      { label: "License", value: "See LICENSE" },
      { label: "Also on", value: "Modrinth" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/REA4V-Lab/SpigBan" },
      { label: "Modrinth", href: "https://modrinth.com/plugin/SpigBan" },
    ],
  },
  {
    id: "rinthy",
    index: "02",
    name: "Rinthy",
    category: "Mobile App · Fork",
    status: "active",
    tagline: "A mobile app for Modrinth developers — manage projects and check analytics from your phone.",
    description:
      "Maintained under REA4V-Lab as an active fork of imsawiq/Rinthy. Built with React + Vite and shipped to Android through Capacitor, it gives Modrinth authors a dashboard for their projects, versions, team members, and analytics without opening a browser. Sign-in runs through Modrinth OAuth, with a personal-access-token flow kept as a fallback.",
    highlights: [
      "Projects dashboard: edit titles, summaries, descriptions, links, and status",
      "Team management, version management, and a downloads/follows analytics overview",
      "Notifications, profile editing, and appearance settings (theme + accent color)",
      "Modrinth OAuth as the primary sign-in, with PAT login kept as a fallback",
      "Packaged for Android via Capacitor (npm run build then npx cap sync android)",
      "RU/EN language support; token stored locally on-device",
    ],
    stack: ["TypeScript", "React", "Vite", "Capacitor", "Android", "Modrinth OAuth"],
    meta: [
      { label: "Language", value: "TypeScript (91%)" },
      { label: "License", value: "GPL-3.0" },
      { label: "Upstream", value: "imsawiq/Rinthy" },
      { label: "Updated", value: "Jun 20, 2026" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/REA4V-Lab/Rinthy" },
      { label: "Upstream", href: "https://github.com/imsawiq/Rinthy" },
    ],
  },
  {
    id: "rinthy-website",
    index: "03",
    name: "rinthy-website",
    category: "Marketing Site",
    status: "active",
    tagline: "The companion website for the Rinthy app, open to contributions.",
    description:
      "The public-facing site for Rinthy — introduces the app, walks through its feature set in English, Russian, and Italian, and links back to the mobile app repo. Explicitly open to community pull requests, and the most starred/forked project in the organization so far.",
    highlights: [
      "Trilingual copy (EN / RU / IT) covering the full Rinthy feature set",
      "Built with Vite + TypeScript + Tailwind CSS",
      "Deployed live at rinthy.sawiq.org",
      "Open contribution model — the README explicitly invites pull requests",
    ],
    stack: ["TypeScript", "Vite", "Tailwind CSS", "CSS", "HTML"],
    meta: [
      { label: "Language", value: "TypeScript (93%)" },
      { label: "Stars / Forks", value: "2 / 4" },
      { label: "Live at", value: "rinthy.sawiq.org" },
      { label: "Updated", value: "Jun 23, 2026" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/REA4V-Lab/rinthy-website" },
      { label: "Live site", href: "https://rinthy.sawiq.org" },
    ],
  },
  {
    id: "website",
    index: "04",
    name: "Website",
    category: "Organization Website",
    status: "active",
    tagline: "The REA4V-Lab organization site itself — working, built.",
    description:
      "A repository for the REA4V-Lab's own organization website. Worth watching if you want to see the lab's home page take shape.",
    highlights: [
      "MIT licensed and deployed",
      "Using NextJS and TS",
    ],
    stack: ["TBD"],
    meta: [
      { label: "Contents", value: "LICENSE + WEBSITE CODE" },
      { label: "License", value: "MIT" },
      { label: "Commits", value: "2" },
      { label: "Updated", value: "July 14, 2026" },
    ],
    links: 
     [{ label: "GitHub", href: "https://github.com/REA4V-Lab/Website" },
     { label: "GitHub", href: "https://github.com/REA4V-Lab/rinthy-website" },
    ]
  },
];

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Recently updated"
    : date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch("https://api.github.com/orgs/REA4V-Lab/repos?per_page=100", {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "rea4v-website",
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const repos = (await response.json()) as GitHubRepo[];
    const repoMap = new Map(repos.map((repo) => [repo.name, repo]));

    return fallbackProjects.map((project) => {
      const repo = repoMap.get(project.name);

      if (!repo) {
        return project;
      }

      const combinedStack = Array.from(
        new Set([...(repo.topics ?? []), ...project.stack.filter((item) => item !== "TBD")])
      ).slice(0, 6);

      return {
        ...project,
        description: repo.description || project.description,
        tagline: repo.description ? repo.description : project.tagline,
        highlights: [
          repo.language ? `${repo.language} is the primary language for this repository.` : project.highlights[0],
          repo.stargazers_count > 0 ? `${repo.stargazers_count} GitHub stars` : project.highlights[1],
          repo.forks_count > 0 ? `${repo.forks_count} forks` : project.highlights[2],
          repo.topics.length > 0 ? `Topics: ${repo.topics.join(", ")}` : project.highlights[3],
          repo.homepage ? `Homepage: ${repo.homepage}` : project.highlights[4],
        ].filter(Boolean),
        stack: combinedStack.length > 0 ? combinedStack : project.stack,
        meta: [
          { label: "Language", value: repo.language || project.meta[0]?.value || "Unknown" },
          { label: "Stars", value: repo.stargazers_count.toString() },
          { label: "Forks", value: repo.forks_count.toString() },
          { label: "Updated", value: formatDate(repo.pushed_at) },
        ],
        links: [
          { label: "GitHub", href: repo.html_url },
          ...(repo.homepage ? [{ label: "Live site", href: repo.homepage }] : []),
          ...(project.links || []).filter((link) => link.label !== "GitHub" && link.label !== "Live site"),
        ],
      };
    });
  } catch (error) {
    console.warn("GitHub repositories unavailable, using local fallback data.", error);
    return fallbackProjects;
  }
}

export const projects = fallbackProjects;
export const stackCloud = [
  "Java",
  "TypeScript",
  "React",
  "Vite",
  "Capacitor",
  "Android",
  "Tailwind CSS",
  "Spigot / Paper",
  "SQLite",
  "MySQL",
  "LuckPerms",
  "Modrinth OAuth",
  "Maven",
  "GPL-3.0",
  "MIT",
];

export const orgFacts: [string, string][] = [
  ["4", "public repositories"],
  ["1", "member — EmanuelPlays"],
  ["2", "languages — Java & TypeScript"],
  ["IT", "based in Italy"],
];
