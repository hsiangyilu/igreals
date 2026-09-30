"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const { language } = useLanguage();
  const title = project.title[language];
  const description = project.description?.[language];

  const content = (
    <>
      {/* 圖片：平板／桌機 hover 時覆蓋 90% 白底並顯示作品名稱 */}
      <div className="relative aspect-[600/380] w-full overflow-hidden rounded-t-[20px] md:rounded-none">
        <Image
          src={project.image}
          alt={title}
          fill
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
          unoptimized={project.image.endsWith(".gif")}
          priority={priority}
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden items-center justify-center bg-white/90 px-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex"
        >
          <p className="font-body text-2xl leading-8 font-medium text-content-primary text-center">
            {title}
          </p>
        </div>
      </div>

      {/* 手機：圖片下方的說明卡 */}
      <div className="flex w-full flex-col gap-2 rounded-b-[20px] bg-bg-surface p-5 md:sr-only">
        <div className="flex w-full items-start gap-2">
          <h3 className="min-w-0 flex-1 font-body text-base leading-6 font-medium text-content-primary">
            {title}
          </h3>
          <Image src="/images/rise.svg" alt="" width={24} height={24} className="shrink-0" />
        </div>
        {description && (
          <p className="font-body text-sm leading-6 whitespace-pre-line text-content-body">
            {description}
          </p>
        )}
      </div>
    </>
  );

  const cardClass = "group flex w-full flex-col items-start";

  if (project.href) {
    return (
      <Link
        href={project.href}
        className={`${cardClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
      >
        {content}
      </Link>
    );
  }

  // 內頁尚未完成：保留 hover 效果，並可用鍵盤聚焦瀏覽
  return (
    <article
      tabIndex={0}
      className={`${cardClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
    >
      {content}
    </article>
  );
}
