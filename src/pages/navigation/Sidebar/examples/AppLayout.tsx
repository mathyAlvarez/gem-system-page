import type { ReactNode } from "react";
import { Sidebar, type SidebarItem } from "@gem-org/gem-system";

type AppLayoutProps = { items: SidebarItem[]; children: ReactNode };

export function AppLayout({ items, children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar header="gem-system" items={items} />
      <main className="min-w-0 flex-1 p-6">{children}</main>
    </div>
  );
}
