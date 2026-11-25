import { Alert, Button, toast } from "@gem-org/gem-system";
import { Refresh } from "@gem-org/gem-system/icons";

type ActionAlertProps = { title: string; description: string; retry: string; retried: string };

export function ActionAlert({ title, description, retry, retried }: ActionAlertProps) {
  return (
    <Alert
      status="error"
      title={title}
      action={
        <Button
          variant="danger"
          size="sm"
          leftIcon={<Refresh size="sm" />}
          onClick={() => toast.info(retried)}
        >
          {retry}
        </Button>
      }
    >
      {description}
    </Alert>
  );
}
