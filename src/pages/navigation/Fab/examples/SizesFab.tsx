import { Fab } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { FAB_SIZES, type FabTexts } from "./demo.tsx";
import "./fab-demo.css";

type SizesFabProps = { texts: FabTexts };

export function SizesFab({ texts }: SizesFabProps) {
  return (
    <div className="fab-row">
      {FAB_SIZES.map((size) => (
        <div key={size} className="fab-stack">
          <Fab position="static" size={size} icon={<Plus />} aria-label={`${texts.create} (${size})`} />
          <p className="fab-caption">{size}</p>
        </div>
      ))}
      <div className="fab-stack">
        <Fab position="static" size="lg" icon={<Plus />} label={texts.newRecord} />
        <p className="fab-caption">lg + label</p>
      </div>
    </div>
  );
}
