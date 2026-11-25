import { Divider } from "@gem-org/gem-system";
import { DIVIDER_PLACEMENTS } from "./demo.ts";
import "./divider-demo.css";

type LabelDividerProps = { label: string };

export function LabelDivider({ label }: LabelDividerProps) {
  return (
    <div className="divider-demo">
      {DIVIDER_PLACEMENTS.map((placement) => (
        <div key={placement} className="divider-stack">
          <p className="divider-caption">{placement}</p>
          <Divider labelPlacement={placement}>{label}</Divider>
        </div>
      ))}
    </div>
  );
}
