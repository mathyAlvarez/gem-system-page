import { Spinner } from "@gem-org/gem-system";
import { SPINNER_SIZES } from "./demo.ts";
import "./spinner-demo.css";

type SizesSpinnerProps = { ariaLabel: string };

export function SizesSpinner({ ariaLabel }: SizesSpinnerProps) {
  return (
    <div className="spinner-row">
      {SPINNER_SIZES.map((size) => (
        <div key={size} className="spinner-item">
          <p className="spinner-caption">{size}</p>
          <Spinner size={size} aria-label={ariaLabel} />
        </div>
      ))}
    </div>
  );
}
