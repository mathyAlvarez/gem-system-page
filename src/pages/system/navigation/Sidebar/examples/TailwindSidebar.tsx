import { Sidebar, type SidebarProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { DemoUser } from "./DemoUser.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

function AppSidebar({ className, ...props }: SidebarProps) {
  return (
    <Sidebar
      className={cn(
        "[--gem-sidebar-width:14rem] [--gem-sidebar-bg:var(--gem-color-bg-subtle)]",
        "[--gem-sidebar-border:var(--gem-color-primary-200)]",
        "[&_.gem-sidebar__item]:rounded-full [&_.gem-sidebar__control]:rounded-full",
        className,
      )}
      {...props}
    />
  );
}

type TailwindSidebarProps = { texts: SidebarTexts; note: string };

export function TailwindSidebar({ texts, note }: TailwindSidebarProps) {
  const items = useDemoItems(texts.items);

  return (
    <SidebarFrame title={texts.pageTitle} note={note}>
      <AppSidebar
        position="static"
        header={<DemoBrand />}
        items={items}
        footer={<DemoUser name={texts.user} />}
        {...sidebarLabels(texts)}
      />
    </SidebarFrame>
  );
}
