import Image from "next/image";
import { links } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex w-full max-w-[1200px] flex-col items-center gap-16 px-6 pt-[120px] pb-10 md:px-10 md:pt-40 xl:flex-row xl:items-end xl:justify-between xl:gap-0 xl:pt-40 xl:pr-20 xl:pb-20 xl:pl-[120px]"
    >
      <div className="flex w-full flex-col items-start gap-6 md:gap-20 xl:min-w-0 xl:flex-1">
        <h1
          id="hero-title"
          className="font-display text-5xl leading-[56px] font-extrabold whitespace-nowrap text-content-heading md:text-[88px]"
        >
          Hi ! I am Vivi
        </h1>
        <div className="flex w-full flex-col items-start gap-4 md:gap-6">
          <div className="flex w-full flex-col gap-2 font-display text-content-heading">
            <p className="text-xs leading-[19.2px] md:text-lg md:leading-[28.8px]">
              An Architect for Digital Product
            </p>
            <p className="text-lg leading-[28.8px] tracking-[0.9px]">
              Turning complex financial systems into experiences people trust
            </p>
          </div>
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-brand"
          >
            <span className="font-display text-lg leading-[21.6px] font-medium tracking-[0.9px] text-content-heading transition-colors group-hover:text-brand">
              View CV
            </span>
            <Image
              src="/images/rise.svg"
              alt=""
              width={24}
              height={24}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="flex shrink-0 items-center xl:pb-20 xl:pl-20">
        <Image
          src="/images/homepage-ani.gif"
          alt="Vivi 的動態插畫"
          width={400}
          height={400}
          unoptimized
          priority
          className="size-[295px] object-cover md:size-80 xl:size-[400px]"
        />
      </div>
    </section>
  );
}
