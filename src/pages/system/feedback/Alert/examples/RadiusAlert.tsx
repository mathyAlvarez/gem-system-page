import { Alert } from "@gem-org/gem-system";
import { ALERT_RADII } from "./demo.ts";
import "./alert-demo.css";

type RadiusAlertProps = { description: string };

export function RadiusAlert({ description }: RadiusAlertProps) {
  return (
    <div className="alert-stack">
      {ALERT_RADII.map((radius) => (
        <Alert
          key={radius}
          variant="outline"
          status="success"
          radius={radius}
          title={`radius="${radius}"`}
        >
          {description}
        </Alert>
      ))}
    </div>
  );
}
