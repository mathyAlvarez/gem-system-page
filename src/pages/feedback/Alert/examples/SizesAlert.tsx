import { Alert } from "@gem-org/gem-system";
import { ALERT_SIZES } from "./demo.ts";
import "./alert-demo.css";

type SizesAlertProps = { title: string; description: string };

export function SizesAlert({ title, description }: SizesAlertProps) {
  return (
    <div className="alert-stack">
      {ALERT_SIZES.map((size) => (
        <Alert key={size} size={size} title={`${size} · ${title}`}>
          {description}
        </Alert>
      ))}
    </div>
  );
}
