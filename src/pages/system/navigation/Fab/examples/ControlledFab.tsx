import { useState } from "react";
import { Button, Fab } from "@gem-org/gem-system";
import { speedDialActions, type FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type ControlledFabProps = {
  texts: FabTexts;
  open: string;
  close: string;
  state: string;
  opened: string;
  closed: string;
};

export function ControlledFab({
  texts,
  open: openLabel,
  close,
  state,
  opened,
  closed,
}: ControlledFabProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fab-row">
        <Button variant="secondary" onClick={() => setOpen(true)}>
          {openLabel}
        </Button>
        <Button variant="transparent" onClick={() => setOpen(false)}>
          {close}
        </Button>
        <p className="fab-log">
          {state}: <strong>{open ? opened : closed}</strong>
        </p>
      </div>
      <FabStage tall>
        <Fab
          position="absolute"
          open={open}
          onOpenChange={setOpen}
          closeOnAction={false}
          aria-label={texts.actionsLabel}
          actions={speedDialActions(texts)}
        />
      </FabStage>
    </>
  );
}
