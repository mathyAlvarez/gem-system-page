import { Fab } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { FAB_PLACEMENTS, type FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

type PlacementsFabProps = { texts: FabTexts };

export function PlacementsFab({ texts }: PlacementsFabProps) {
  return (
    <div className="fab-grid">
      {FAB_PLACEMENTS.map((placement) => (
        <div key={placement} className="fab-stack">
          <p className="fab-caption">{placement}</p>
          <FabStage className="fab-stage--compact">
            <Fab
              position="absolute"
              placement={placement}
              offset={16}
              size="sm"
              icon={<Plus />}
              aria-label={`${texts.create} (${placement})`}
            />
          </FabStage>
        </div>
      ))}
    </div>
  );
}
