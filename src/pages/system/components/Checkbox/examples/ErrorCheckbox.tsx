import { Checkbox } from "@gem-org/gem-system";

export function ErrorCheckbox({ label, errorMessage }: { label: string; errorMessage: string }) {
  return <Checkbox label={label} errorMessage={errorMessage} isRequired />;
}
