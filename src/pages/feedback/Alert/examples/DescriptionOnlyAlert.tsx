import { Alert } from "@gem-org/gem-system";

type DescriptionOnlyAlertProps = { description: string };

export function DescriptionOnlyAlert({ description }: DescriptionOnlyAlertProps) {
  return <Alert size="sm">{description}</Alert>;
}
