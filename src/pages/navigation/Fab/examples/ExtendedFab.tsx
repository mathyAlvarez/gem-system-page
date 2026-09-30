import { Fab, toast } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import type { FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type ExtendedFabProps = { texts: FabTexts };

export function ExtendedFab({ texts }: ExtendedFabProps) {
  return (
    <FabStage>
      <Fab
        position="absolute"
        icon={<Plus />}
        label={texts.newRecord}
        onClick={() => toast.success(texts.created)}
      />
    </FabStage>
  );
}
