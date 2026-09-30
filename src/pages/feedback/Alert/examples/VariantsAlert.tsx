import { Alert } from "@gem-org/gem-system";
import { ALERT_STATUSES, ALERT_VARIANTS, type AlertCopy } from "./demo.ts";
import "./alert-demo.css";

type VariantsAlertProps = { copy: AlertCopy };

export function VariantsAlert({ copy }: VariantsAlertProps) {
  return (
    <div className="alert-stack">
      {ALERT_VARIANTS.map((variant) => (
        <div key={variant} className="alert-stack">
          <p className="alert-label">{variant}</p>
          {ALERT_STATUSES.map((status) => (
            <Alert key={status} variant={variant} status={status} title={copy[status].title}>
              {copy[status].description}
            </Alert>
          ))}
        </div>
      ))}
    </div>
  );
}
