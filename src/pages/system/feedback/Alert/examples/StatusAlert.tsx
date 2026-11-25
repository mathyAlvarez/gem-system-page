import { Alert } from "@gem-org/gem-system";
import { ALERT_STATUSES, type AlertCopy } from "./demo.ts";
import "./alert-demo.css";

type StatusAlertProps = { copy: AlertCopy };

export function StatusAlert({ copy }: StatusAlertProps) {
  return (
    <div className="alert-stack">
      {ALERT_STATUSES.map((status) => (
        <Alert key={status} status={status} title={copy[status].title}>
          {copy[status].description}
        </Alert>
      ))}
    </div>
  );
}
