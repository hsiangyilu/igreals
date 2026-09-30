import type { Language } from "@/lib/i18n";

type Localized = Record<Language, string>;

export const links = {
  cv: "https://drive.google.com/file/d/1hHlfCyq9o49VWLmTnDOWf8F9K9kJWiLw/view?usp=sharing",
  medium: "https://medium.com/@capricornus8200",
  behance: "https://www.behance.net/luhsiangyi",
  email: "mailto:vivilu0195@gmail.com",
};

export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
};

// ABOUT ME 尚無設計稿頁面，先不給連結
export const navItems: NavItem[] = [
  { label: "PROJECTS", href: "/" },
  { label: "ABOUT ME" },
  { label: "RESUME", href: links.cv, external: true },
];

export type Project = {
  id: string;
  image: string;
  title: Localized;
  description?: Localized;
  // 專案內頁完成後填入
  href?: string;
};

export const projects: Project[] = [
  {
    id: "digital-voucher",
    image: "/images/project-1.png",
    title: { cn: "數位券專區設計", en: "Digital Voucher Hub" },
    description: {
      cn: "整合原有支付功能，打造集中、直覺的一站式票券體驗",
      en: "Integrating existing payment features into a centralized, intuitive one-stop voucher experience",
    },
  },
  {
    id: "fubon-design-system",
    image: "/images/project-2.gif",
    title: { cn: "富邦設計系統", en: "Fubon Design System" },
    description: {
      cn: "以暫時規範穩定設計品質，並參與正式設計系統的建議提供與驗收",
      en: "Stabilizing design quality with interim guidelines, and shaping and reviewing the official design system",
    },
  },
  {
    id: "tarobo-fund-search",
    image: "/images/project-3.gif",
    title: { cn: "TAROBO APP-基金搜尋 基金資訊", en: "TAROBO APP - Fund Search & Info" },
    description: {
      cn: "透過 APP 優化使用者在手機上的操作體驗",
      en: "Optimizing the mobile experience through the app",
    },
  },
  {
    id: "other-works",
    image: "/images/project-4.gif",
    title: { cn: "其他作品", en: "Other Works" },
  },
  {
    id: "tarobo-fund-compare",
    image: "/images/project-5.png",
    title: { cn: "TAROBO-基金比較優化", en: "TAROBO - Fund Comparison Redesign" },
    description: {
      cn: "優化基金比較頁面的功能和資訊架構，讓主要功能頁面更符合使用者需求",
      en: "Reworking the features and information architecture of fund comparison to better fit user needs",
    },
  },
  {
    id: "tarobo-blog",
    image: "/images/project-6.gif",
    title: { cn: "TAROBO APP-財經部落格", en: "TAROBO APP - Finance Blog" },
    description: {
      cn: "創造新的管道 更多方面的接觸使用者\n以更主動的方式和使用者互動",
      en: "Creating a new channel to reach users more broadly\nand engage them more proactively",
    },
  },
];
