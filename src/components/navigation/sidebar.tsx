import Link from "next/link";
import { navigationItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r bg-background/80 p-4 lg:block">
      <Link
        href="/"
        className="mb-8 flex items-center gap-3 rounded-xl px-3 py-2"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          S
        </div>
        <div>
          <p className="font-semibold">SPO Check</p>
          <p className="text-xs text-muted-foreground">Admissions workspace</p>
        </div>
      </Link>
      <nav className="space-y-1">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
