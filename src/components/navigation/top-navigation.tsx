import { Search } from "lucide-react";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 md:px-8">
        <div>
          <Breadcrumbs />
          <p className="hidden text-xs text-muted-foreground md:block">
            Фундамент для поиска, сравнения и отслеживания программ
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-lg border px-3 py-2 text-sm text-muted-foreground sm:flex">
            <Search className="h-4 w-4" />
            Поиск скоро
          </div>
          <Badge className="hidden md:inline-flex">Phase 1</Badge>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
