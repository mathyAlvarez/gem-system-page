import { Sidebar } from "@gem-org/gem-system";
import { sidebarLabels, useNestedItems, type SidebarTexts } from "./demo.tsx";
import { DemoBrand } from "./DemoBrand.tsx";
import { SidebarFrame } from "./SidebarFrame.tsx";

type NestedSidebarProps = { texts: SidebarTexts; note: string };

export function NestedSidebar({ texts, note }: NestedSidebarProps) {
  const items = useNestedItems(texts.items);

  return (
    <SidebarFrame title={texts.pageTitle} note={note}>
      <Sidebar position="static" header={<DemoBrand />} items={items} {...sidebarLabels(texts)} />
    </SidebarFrame>
  );
}
