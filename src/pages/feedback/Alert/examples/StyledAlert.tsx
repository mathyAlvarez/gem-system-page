import { Alert } from "@gem-org/gem-system";
import { Star } from "@gem-org/gem-system/icons";
import "./alert-overrides.css";

type StyledAlertProps = { title: string; description: string };

export function StyledAlert({ title, description }: StyledAlertProps) {
  return (
    <Alert className="alert-branded" title={title} icon={<Star size="lg" strokeWidth={1.85} />}>
      {description}
    </Alert>
  );
}
