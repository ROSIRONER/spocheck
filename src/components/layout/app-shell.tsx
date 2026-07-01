import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/navigation/sidebar";
import { TopNavigation } from "@/components/navigation/top-navigation";
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavigation />
        <main className="flex-1 p-4 md:p-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
