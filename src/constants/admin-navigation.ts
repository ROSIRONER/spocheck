import {
  BarChart3,
  Building2,
  ClipboardList,
  FileText,
  GraduationCap,
  Mail,
  Settings,
  TestTube2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AdminNavigationItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const adminNavigationItems: AdminNavigationItem[] = [
  { title: "Dashboard", href: "/admin", icon: BarChart3 },
  { title: "Университеты", href: "/admin/universities", icon: Building2 },
  { title: "Программы", href: "/admin/programs", icon: GraduationCap },
  {
    title: "Приемная кампания",
    href: "/admin/admissions",
    icon: ClipboardList,
  },
  { title: "Экзамены", href: "/admin/exams", icon: TestTube2 },
  { title: "Документы", href: "/admin/documents", icon: FileText },
  { title: "Контакты", href: "/admin/contacts", icon: Mail },
  { title: "Настройки", href: "/admin/settings", icon: Settings },
];
