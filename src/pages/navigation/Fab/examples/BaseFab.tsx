import { Fab, toast } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import type { FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type BaseFabProps = { texts: FabTexts };

export function BaseFab({ texts }: BaseFabProps) {
  return (
    <FabStage hint={texts.hint}>
      <Fab
        position="absolute"
        icon={<Plus />}
        aria-label={texts.create}
        onClick={() => toast.success(texts.created)}
      />
    </FabStage>
  );
}
