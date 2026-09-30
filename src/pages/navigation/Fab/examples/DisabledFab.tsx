import { Fab } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import type { FabTexts } from "./demo.tsx";
import "./fab-demo.css";

type DisabledFabProps = { texts: FabTexts };

export function DisabledFab({ texts }: DisabledFabProps) {
  return (
    <div className="fab-row">
      <Fab position="static" disabled icon={<Plus />} aria-label={texts.create} />
      <Fab position="static" disabled icon={<Plus />} label={texts.newRecord} />
    </div>
  );
}
