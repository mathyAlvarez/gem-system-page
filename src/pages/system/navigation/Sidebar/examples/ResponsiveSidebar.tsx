import { Sidebar } from "@gem-org/gem-system";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { DemoUser } from "./DemoUser.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

type ResponsiveSidebarProps = { texts: SidebarTexts; note: string };

export function ResponsiveSidebar({ texts, note }: ResponsiveSidebarProps) {
  const items = useDemoItems(texts.items);

  return (
    <SidebarFrame title={texts.pageTitle} note={note}>
      <Sidebar
        position="static"
        overlayBreakpoint="lg"
        header={<DemoBrand />}
        items={items}
        footer={<DemoUser name={texts.user} />}
        {...sidebarLabels(texts)}
      />
    </SidebarFrame>
  );
}
