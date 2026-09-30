import { useState } from "react";
import { Sidebar, Typography } from "@gem-org/gem-system";
import { sidebarLabels, useDemoItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { DemoUser } from "./DemoUser.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

type CollapsedSidebarProps = {
  texts: SidebarTexts;
  note: string;
  state: string;
  collapsed: string;
  expanded: string;
};

export function CollapsedSidebar({ texts, note, state, collapsed, expanded }: CollapsedSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const items = useDemoItems(texts.items);

  return (
    <div className="flex w-full flex-col gap-3">
      <Typography variant="caption" as="p" className="m-0">
        {state}: {isCollapsed ? collapsed : expanded}
      </Typography>
      <SidebarFrame title={texts.pageTitle} note={note}>
        <Sidebar
          position="static"
          collapsed={isCollapsed}
          onCollapsedChange={setIsCollapsed}
          header={<DemoBrand />}
          items={items}
          footer={<DemoUser name={texts.user} />}
          {...sidebarLabels(texts)}
        />
      </SidebarFrame>
    </div>
  );
}
