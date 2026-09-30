import { Fab } from "@gem-org/gem-system";
import { speedDialActions, type FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type TailwindFabProps = { texts: FabTexts };

export function TailwindFab({ texts }: TailwindFabProps) {
  return (
    <FabStage tall>
      <Fab
        position="absolute"
        actionVariant="surface"
        aria-label={texts.actionsLabel}
        actions={speedDialActions(texts)}
        classNames={{
          trigger:
            "rounded-2xl border-0 bg-linear-to-br from-violet-600 to-fuchsia-500 text-white hover:brightness-110",
          action: "rounded-xl",
          actionLabel: "rounded-full bg-neutral-900 px-3 text-white shadow-none",
        }}
      />
    </FabStage>
  );
}
