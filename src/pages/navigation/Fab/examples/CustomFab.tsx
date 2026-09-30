import { Fab, toast } from "@gem-org/gem-system";
import { quickActions, type FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type Toasts = Record<string, { title: string; description: string }>;

type CustomFabProps = { texts: FabTexts; toasts: Toasts };

export function CustomFab({ texts, toasts }: CustomFabProps) {
  return (
    <FabStage tall>
      <Fab
        position="absolute"
        tone="info"
        actionVariant="surface"
        transition="opacity"
        showActionLabels={false}
        defaultOpen
        aria-label={texts.actionsLabel}
        actions={quickActions(texts)}
        onAction={(id) => toast.success(toasts[id].title, { description: toasts[id].description })}
      />
    </FabStage>
  );
}
