import { Spinner } from "@gem-org/gem-system";
import { SPINNER_PLACEMENTS } from "./demo.ts";
import "./spinner-demo.css";

type PlacementSpinnerProps = { label: string };

export function PlacementSpinner({ label }: PlacementSpinnerProps) {
  return (
    <div className="spinner-row">
      {SPINNER_PLACEMENTS.map((placement) => (
        <div key={placement} className="spinner-item">
          <p className="spinner-caption">{placement}</p>
          <Spinner labelPlacement={placement} label={label} />
        </div>
      ))}
    </div>
  );
}
