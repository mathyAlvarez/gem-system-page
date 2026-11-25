import { Spinner } from "@gem-org/gem-system";
import "./spinner-demo.css";

type CustomSizeSpinnerProps = { ariaLabel: string };

export function CustomSizeSpinner({ ariaLabel }: CustomSizeSpinnerProps) {
  return (
    <div className="spinner-row">
      <div className="spinner-item">
        <p className="spinner-caption">size={"{48}"}</p>
        <Spinner size={48} aria-label={ariaLabel} />
      </div>
      <div className="spinner-item">
        <p className="spinner-caption">size="3.25rem"</p>
        <Spinner size="3.25rem" aria-label={ariaLabel} />
      </div>
      <div className="spinner-item">
        <p className="spinner-caption">size="72px"</p>
        <Spinner size="72px" aria-label={ariaLabel} />
      </div>
    </div>
  );
}
