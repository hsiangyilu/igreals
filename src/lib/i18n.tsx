"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "cn" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("cn");

  // 同步 <html lang>，讓螢幕閱讀器用正確語系朗讀
  useEffect(() => {
    document.documentElement.lang = language === "cn" ? "zh-Hant" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage 必須在 LanguageProvider 內使用");
  }
  return context;
}
