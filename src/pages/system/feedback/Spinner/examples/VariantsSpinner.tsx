import { Spinner } from "@gem-org/gem-system";
import { SPINNER_VARIANTS } from "./demo.ts";
import "./spinner-demo.css";

type VariantsSpinnerProps = { ariaLabel: string };

export function VariantsSpinner({ ariaLabel }: VariantsSpinnerProps) {
  return (
    <div className="spinner-row">
      {SPINNER_VARIANTS.map((variant) => (
        <div key={variant} className="spinner-item">
          <p className="spinner-caption">{variant}</p>
          <Spinner variant={variant} size="xl" aria-label={ariaLabel} />
        </div>
      ))}
    </div>
  );
}
