import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StackMarquee from "@/components/StackMarquee";
import ProjectCard from "@/components/ProjectCard";
import { SectionHeading } from "@/components/Timeline";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <StackMarquee />

      <section id="projects" className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="/projects" title={`All ${projects.length} repositories`} />
          <p className="text-mute text-sm max-w-xl mt-5 leading-relaxed">
            Everything currently public under github.com/REA4V-Lab — pulled live from GitHub
            when available and kept in sync with the organization&apos;s public repos.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-7">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <Footer />
    </main>
  );
}
