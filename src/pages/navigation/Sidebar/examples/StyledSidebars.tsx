import { Button, Sidebar } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { DemoUser } from "./DemoUser.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";
import "./sidebar-overrides.css";

type StyledSidebarsProps = { texts: SidebarTexts; note: string };

export function StyledSidebars({ texts, note }: StyledSidebarsProps) {
  const items = useDemoItems(texts.items);

  return (
    <SidebarFrame title={texts.pageTitle} note={note}>
      <Sidebar
        className="sidebar-inverted"
        position="static"
        bordered={false}
        shadow="md"
        header={<DemoBrand />}
        items={items}
        footer={<DemoUser name={texts.user} />}
        {...sidebarLabels(texts)}
      >
        <Button variant="transparent" size="sm" leftIcon={<Plus size="sm" />}>
          {texts.newProject}
        </Button>
      </Sidebar>
    </SidebarFrame>
  );
}
