import { Fab } from "@gem-org/gem-system";
import { quickActions, type FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

const directions = [
  { direction: "start", placement: "bottom-end" },
  { direction: "end", placement: "top-start" },
] as const;

type DirectionFabProps = { texts: FabTexts };

export function DirectionFab({ texts }: DirectionFabProps) {
  return (
    <div className="fab-grid">
      {directions.map(({ direction, placement }) => (
        <div key={direction} className="fab-stack">
          <p className="fab-caption">
            direction="{direction}" placement="{placement}"
          </p>
          <FabStage className="fab-stage--compact">
            <Fab
              position="absolute"
              placement={placement}
              direction={direction}
              offset={16}
              showActionLabels={false}
              aria-label={texts.actionsLabel}
              actions={quickActions(texts)}
            />
          </FabStage>
        </div>
      ))}
    </div>
  );
}
