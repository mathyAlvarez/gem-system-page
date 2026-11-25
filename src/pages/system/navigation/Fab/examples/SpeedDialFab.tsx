import { useState } from "react";
import { Fab } from "@gem-org/gem-system";
import { speedDialActions, type FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type SpeedDialFabProps = { texts: FabTexts };

export function SpeedDialFab({ texts }: SpeedDialFabProps) {
  const [lastId, setLastId] = useState<string | null>(null);
  const actions = speedDialActions(texts);
  const last = actions.find((action) => action.id === lastId)?.label ?? texts.none;

  return (
    <>
      <FabStage tall>
        <Fab
          position="absolute"
          aria-label={texts.actionsLabel}
          actions={actions}
          onAction={setLastId}
        />
      </FabStage>
      <p className="fab-log">
        {texts.lastAction}: <strong>{last}</strong>
      </p>
    </>
  );
}
