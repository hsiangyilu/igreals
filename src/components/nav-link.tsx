import Link from "next/link";
import type { NavItem } from "@/lib/site-data";

type NavLinkProps = {
  item: NavItem;
  isActive?: boolean;
  onNavigate?: () => void;
};

const baseClass =
  "flex items-center justify-center px-3 font-display text-base font-semibold leading-[34px] whitespace-nowrap rounded-sm transition-colors";

export function NavLink({ item, isActive = false, onNavigate }: NavLinkProps) {
  const colorClass = isActive ? "text-brand" : "text-content-primary";

  // 沒有目的地的項目（尚無頁面）只呈現文字
  if (!item.href) {
    return <span className={`${baseClass} ${colorClass}`}>{item.label}</span>;
  }

  const interactiveClass = `${baseClass} ${colorClass} hover:text-brand focus-visible:outline-2 focus-visible:outline-brand`;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={interactiveClass}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={interactiveClass}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
