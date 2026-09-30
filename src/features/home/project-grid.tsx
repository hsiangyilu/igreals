import { ProjectCard } from "@/features/home/project-card";
import { projects } from "@/lib/site-data";

export function ProjectGrid() {
  return (
    <section
      aria-label="Projects"
      className="w-full max-w-[1200px] px-6 pt-10 pb-20 md:px-10 xl:px-[120px] xl:pt-[120px] xl:pb-40"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} priority={index < 2} />
        ))}
      </div>
    </section>
  );
}
