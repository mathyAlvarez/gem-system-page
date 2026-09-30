import { Divider } from "@gem-org/gem-system";
import "./divider-demo.css";

type VerticalDividerProps = { left: string; right: string };

export function VerticalDivider({ left, right }: VerticalDividerProps) {
  return (
    <div className="divider-row">
      <p className="divider-copy">{left}</p>
      <Divider orientation="vertical" />
      <p className="divider-copy">{right}</p>
    </div>
  );
}
