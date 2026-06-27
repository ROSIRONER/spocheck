import {
  BarChart3,
  Building2,
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
  Mail,
  Scale,
  Settings,
  TestTube2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: BarChart3,
    description: "Обзор ключевых метрик",
  },
  {
    title: "Университеты",
    href: "/universities",
    icon: Building2,
    description: "Каталог вузов",
  },
  {
    title: "Программы",
    href: "/programs",
    icon: GraduationCap,
    description: "Направления подготовки",
  },
  {
    title: "Приемная кампания",
    href: "/admissions",
    icon: ClipboardList,
    description: "Этапы поступления",
  },
  {
    title: "Вступительные экзамены",
    href: "/exams",
    icon: TestTube2,
    description: "Расписание и требования",
  },
  {
    title: "Документы",
    href: "/documents",
    icon: FileText,
    description: "Чек-листы документов",
  },
  {
    title: "Контакты",
    href: "/contacts",
    icon: Mail,
    description: "Полезные контакты",
  },
  {
    title: "Календарь",
    href: "/calendar",
    icon: CalendarDays,
    description: "Дедлайны и события",
  },
  {
    title: "Сравнение",
    href: "/comparison",
    icon: Scale,
    description: "Сравнение программ",
  },
  {
    title: "Настройки",
    href: "/settings",
    icon: Settings,
    description: "Персонализация",
  },
];
