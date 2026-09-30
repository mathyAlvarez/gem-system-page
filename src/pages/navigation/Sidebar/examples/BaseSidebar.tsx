import { Sidebar } from "@gem-org/gem-system";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { DemoUser } from "./DemoUser.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

type BaseSidebarProps = { texts: SidebarTexts; note: string };

export function BaseSidebar({ texts, note }: BaseSidebarProps) {
  const items = useDemoItems(texts.items);

  return (
    <SidebarFrame title={texts.pageTitle} note={note}>
      <Sidebar
        position="static"
        header={<DemoBrand />}
        items={items}
        footer={<DemoUser name={texts.user} />}
        {...sidebarLabels(texts)}
      />
    </SidebarFrame>
  );
}
