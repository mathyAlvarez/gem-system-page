import { InputNumber } from "@gem-org/gem-system";

type ErrorInputNumberProps = { label: string; errorMessage: string };

export function ErrorInputNumber({ label, errorMessage }: ErrorInputNumberProps) {
  return <InputNumber label={label} defaultValue={-1} isInvalid errorMessage={errorMessage} />;
}
