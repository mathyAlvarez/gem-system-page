import { Fab } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import type { FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";
import "./fab-overrides.css";

type StyledFabProps = { texts: FabTexts };

export function StyledFab({ texts }: StyledFabProps) {
  return (
    <FabStage className="fab-stage--compact">
      <Fab
        position="absolute"
        placement="bottom-start"
        className="fab-branded"
        icon={<Plus />}
        aria-label={texts.create}
      />
      <Fab position="absolute" className="fab-branded" icon={<Plus />} label={texts.newRecord} />
    </FabStage>
  );
}
