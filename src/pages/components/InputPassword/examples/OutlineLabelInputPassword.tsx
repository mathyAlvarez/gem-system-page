import { InputPassword } from "@gem-org/gem-system";

type OutlineLabelInputPasswordProps = { label: string };

export function OutlineLabelInputPassword({ label }: OutlineLabelInputPasswordProps) {
  return <InputPassword label={label} labelPlacement="outline" placeholder="••••••••" />;
}
