import { Divider } from "@gem-org/gem-system";
import "./divider-demo.css";

type VerticalLabelDividerProps = { left: string; right: string; label: string };

export function VerticalLabelDivider({ left, right, label }: VerticalLabelDividerProps) {
  return (
    <div className="divider-row">
      <p className="divider-copy">{left}</p>
      <Divider orientation="vertical" variant="dashed">
        {label}
      </Divider>
      <p className="divider-copy">{right}</p>
    </div>
  );
}
