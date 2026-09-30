import { Fab } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { FAB_TONES, type FabTexts } from "./demo.tsx";
import "./fab-demo.css";

type TonesFabProps = { texts: FabTexts };

export function TonesFab({ texts }: TonesFabProps) {
  return (
    <div className="fab-row">
      {FAB_TONES.map((tone) => (
        <div key={tone} className="fab-stack">
          <Fab position="static" tone={tone} icon={<Plus />} aria-label={`${texts.create} (${tone})`} />
          <p className="fab-caption">{tone}</p>
        </div>
      ))}
    </div>
  );
}
