import { Divider } from "@gem-org/gem-system";
import "./divider-demo.css";

type BaseDividerProps = { heading: string; body: string };

export function BaseDivider({ heading, body }: BaseDividerProps) {
  return (
    <div className="divider-demo">
      <div className="divider-stack">
        <p className="divider-copy">{heading}</p>
        <Divider />
        <p className="divider-copy">{body}</p>
      </div>
    </div>
  );
}
