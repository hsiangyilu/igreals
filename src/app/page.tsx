import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/features/home/hero-section";
import { ProjectGrid } from "@/features/home/project-grid";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex w-full flex-1 flex-col items-center bg-bg-base">
        <HeroSection />
        <ProjectGrid />
      </main>
      <SiteFooter />
    </>
  );
}
