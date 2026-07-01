import { ShieldCheck } from "lucide-react";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { LogoutButton } from "@/components/admin/logout-button";
import { Badge } from "@/components/ui/badge";

export function AdminTopbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 md:px-8">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="font-medium">Admin</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Dashboard</span>
          </div>
          <p className="hidden text-xs text-muted-foreground md:block">
            Защищенная панель управления данными SPO Check
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="hidden md:inline-flex">Auth protected</Badge>
          <ThemeSwitcher />
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
