import { Alert } from "@gem-org/gem-system";

type HideIconAlertProps = { title: string; description: string };

export function HideIconAlert({ title, description }: HideIconAlertProps) {
  return (
    <Alert status="success" hideIcon title={title}>
      {description}
    </Alert>
  );
}
