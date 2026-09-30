import { Alert } from "@gem-org/gem-system";
import { Bell } from "@gem-org/gem-system/icons";

type CustomIconAlertProps = { title: string; description: string };

export function CustomIconAlert({ title, description }: CustomIconAlertProps) {
  return (
    <Alert title={title} icon={<Bell size="md" strokeWidth={1.85} />}>
      {description}
    </Alert>
  );
}
