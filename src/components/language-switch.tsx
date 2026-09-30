"use client";

import Image from "next/image";
import { useLanguage, type Language } from "@/lib/i18n";

const options: { value: Language; label: string; font: string }[] = [
  { value: "cn", label: "繁中", font: "font-body" },
  { value: "en", label: "English", font: "font-display font-semibold" },
];

type LanguageSwitchProps = {
  orientation: "horizontal" | "vertical";
};

export function LanguageSwitch({ orientation }: LanguageSwitchProps) {
  const { language, setLanguage } = useLanguage();
  const isVertical = orientation === "vertical";

  return (
    <div
      role="group"
      aria-label="語言切換 Language"
      className={`flex items-center gap-1 ${isVertical ? "flex-col" : ""}`}
    >
      {/* 分隔線：垂直排列時轉為橫線，且不佔高度（同設計稿） */}
      <div className={isVertical ? "flex h-0 w-4 items-center justify-center" : "flex"}>
        <Image
          src="/images/divider.svg"
          alt=""
          width={1}
          height={17}
          className={isVertical ? "-rotate-90" : ""}
        />
      </div>
      {options.map((option) => {
        const isActive = option.value === language;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setLanguage(option.value)}
            className={`cursor-pointer px-1 text-sm leading-[34px] font-medium transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-brand rounded-sm ${option.font} ${
              isActive ? "text-content-primary" : "text-content-muted"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
