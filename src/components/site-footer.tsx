import Image from "next/image";
import { links } from "@/lib/site-data";

const footerLinks = [
  {
    href: links.medium,
    icon: "/images/footer-medium.gif",
    label: "My Thoughts",
    // 設計稿中此項字級與其他兩項不同，依稿實作
    labelClass: "text-base font-normal tracking-[1.28px]",
    external: true,
  },
  {
    href: links.behance,
    icon: "/images/footer-behance.gif",
    label: "My Creativity",
    labelClass: "text-sm font-medium leading-[34px]",
    external: true,
  },
  {
    href: links.email,
    icon: "/images/footer-mail.gif",
    label: "Contact Me!",
    labelClass: "text-sm font-medium leading-[34px]",
    external: false,
  },
];

export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col items-center gap-4 bg-bg-base p-6 md:px-10">
      <div className="flex w-full max-w-[960px] items-start justify-between md:h-10 md:items-center">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-brand"
          >
            <Image
              src={link.icon}
              alt=""
              width={36}
              height={36}
              unoptimized
              className="size-9 object-cover"
            />
            <span
              className={`hidden px-3 font-display text-brand whitespace-nowrap group-hover:underline underline-offset-4 md:inline ${link.labelClass}`}
            >
              {link.label}
            </span>
          </a>
        ))}
      </div>
      <p className="w-full max-w-[960px] font-display text-xs tracking-[0.96px] text-content-muted">
        © 2025 Designed by Vivi Lu
      </p>
    </footer>
  );
}
