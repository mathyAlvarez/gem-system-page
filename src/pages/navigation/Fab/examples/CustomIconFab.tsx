import { Fab, toast } from "@gem-org/gem-system";
import { Close, Share } from "@gem-org/gem-system/icons";
import { quickActions, type FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type CustomIconFabProps = { texts: FabTexts };

export function CustomIconFab({ texts }: CustomIconFabProps) {
  return (
    <FabStage tall>
      <Fab
        position="absolute"
        tone="secondary"
        actionVariant="surface"
        icon={<Share />}
        openIcon={<Close />}
        aria-label={texts.actionsLabel}
        actions={quickActions(texts)}
        onAction={(id) => toast.info(texts.actions[id as keyof FabTexts["actions"]])}
      />
    </FabStage>
  );
}
