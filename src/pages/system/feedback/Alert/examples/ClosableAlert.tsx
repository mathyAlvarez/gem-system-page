import { useState } from "react";
import { Alert, Button } from "@gem-org/gem-system";

type ClosableAlertProps = { title: string; description: string; closeLabel: string; show: string };

export function ClosableAlert({ title, description, closeLabel, show }: ClosableAlertProps) {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
        {show}
      </Button>
    );
  }

  return (
    <Alert
      status="warning"
      title={title}
      isClosable
      closeAriaLabel={closeLabel}
      open={open}
      onClose={() => setOpen(false)}
    >
      {description}
    </Alert>
  );
}
