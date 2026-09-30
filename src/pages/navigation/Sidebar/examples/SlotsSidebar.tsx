import { Button, Sidebar } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { DemoUser } from "./DemoUser.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

type SlotsSidebarProps = { texts: SidebarTexts; note: string };

export function SlotsSidebar({ texts, note }: SlotsSidebarProps) {
  const items = useDemoItems(texts.items);

  return (
    <SidebarFrame title={texts.pageTitle} note={note}>
      <Sidebar
        position="static"
        bordered={false}
        shadow="md"
        header={<DemoBrand />}
        items={items}
        footer={<DemoUser name={texts.user} />}
        {...sidebarLabels(texts)}
      >
        <Button variant="secondary" size="sm" leftIcon={<Plus size="sm" />}>
          {texts.newProject}
        </Button>
      </Sidebar>
    </SidebarFrame>
  );
}
