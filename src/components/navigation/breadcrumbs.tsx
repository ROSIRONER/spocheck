import { ChevronRight, Home } from "lucide-react";
export function Breadcrumbs() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Home className="h-4 w-4 text-muted-foreground" />
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
      <span className="font-medium">Рабочее пространство</span>
    </div>
  );
}
