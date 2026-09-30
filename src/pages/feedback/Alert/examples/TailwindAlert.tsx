import { Alert } from "@gem-org/gem-system";

type TailwindAlertProps = { title: string; description: string };

export function TailwindAlert({ title, description }: TailwindAlertProps) {
  return (
    <Alert
      status="success"
      title={title}
      classNames={{
        root: "items-center rounded-2xl border-0 shadow-sm",
        icon: "size-9 rounded-full bg-(--gem-color-bg) p-2 m-0",
        title: "text-base",
        description: "opacity-80",
      }}
    >
      {description}
    </Alert>
  );
}
