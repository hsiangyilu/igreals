import type { Metadata } from "next";
import { Noto_Sans_TC, Raleway } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

// 中文字型檔很大，依 unicode-range 按需載入，不預載
const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Vivi Lu | Portfolio",
  description:
    "An Architect for Digital Product — turning complex financial systems into experiences people trust.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${raleway.variable} ${notoSansTC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
