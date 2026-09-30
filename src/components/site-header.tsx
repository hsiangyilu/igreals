"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { NavLink } from "@/components/nav-link";
import { navItems } from "@/lib/site-data";

function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      aria-label="Vivi Lu 首頁"
      onClick={onNavigate}
      className="relative block h-6 w-[50px] shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-brand md:h-[34px] md:w-[71px]"
    >
      <Image src="/images/logo.png" alt="Vivi Lu" fill sizes="71px" priority />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // 手機選單開啟時鎖住背景捲動，並可用 Esc 關閉
  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.classList.add("overflow-hidden");
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg-base">
      <div className="flex items-center justify-center px-6 py-3 md:px-10 md:py-6">
        <div className="flex w-full max-w-[960px] items-center justify-between">
          <Logo />

          {/* 平板／桌機：水平導覽列 */}
          <nav aria-label="主選單" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} isActive={item.href === pathname} />
            ))}
            <LanguageSwitch orientation="horizontal" />
          </nav>

          {/* 手機：漢堡選單按鈕 */}
          <button
            type="button"
            aria-label="開啟選單"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
            className="block size-7 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-brand md:hidden"
          >
            <Image src="/images/menu-bar.svg" alt="" width={28} height={28} />
          </button>
        </div>
      </div>

      {/* 手機：全螢幕展開選單 */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="主選單"
          className="fixed inset-0 z-50 flex flex-col bg-bg-base px-6 py-3 md:hidden"
        >
          <div className="flex w-full items-center justify-between">
            <Logo onNavigate={closeMenu} />
            <button
              type="button"
              aria-label="關閉選單"
              onClick={closeMenu}
              autoFocus
              className="block size-7 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-brand"
            >
              <Image src="/images/close.svg" alt="" width={28} height={28} />
            </button>
          </div>
          <nav aria-label="主選單" className="flex flex-1 flex-col items-center px-6 py-10">
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  isActive={item.href === pathname}
                  onNavigate={closeMenu}
                />
              ))}
              <LanguageSwitch orientation="vertical" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
