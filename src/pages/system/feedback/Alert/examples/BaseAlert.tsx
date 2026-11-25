import { Alert } from "@gem-org/gem-system";

type BaseAlertProps = { title: string; description: string };

export function BaseAlert({ title, description }: BaseAlertProps) {
  return <Alert title={title}>{description}</Alert>;
}
