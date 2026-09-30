import { Divider } from "@gem-org/gem-system";
import "./divider-demo.css";

type AccessibleDividerProps = { results: string; end: string; or: string };

export function AccessibleDivider({ results, end, or }: AccessibleDividerProps) {
  return (
    <div className="divider-demo">
      <div className="divider-stack">
        <p className="divider-caption">decorative=false</p>
        <p className="divider-copy">{results}</p>
        <Divider decorative={false} aria-label={end} />
      </div>
      <div className="divider-stack">
        <p className="divider-caption">decorative</p>
        <Divider decorative>{or}</Divider>
      </div>
    </div>
  );
}
