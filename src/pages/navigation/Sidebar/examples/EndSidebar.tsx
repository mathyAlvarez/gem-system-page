import { Sidebar } from "@gem-org/gem-system";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { DemoUser } from "./DemoUser.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

type EndSidebarProps = { texts: SidebarTexts; note: string };

export function EndSidebar({ texts, note }: EndSidebarProps) {
  const items = useDemoItems(texts.items);

  return (
    <SidebarFrame end title={texts.pageTitle} note={note}>
      <Sidebar
        side="end"
        position="static"
        header={<DemoBrand />}
        items={items}
        footer={<DemoUser name={texts.user} />}
        {...sidebarLabels(texts)}
      />
    </SidebarFrame>
  );
}
