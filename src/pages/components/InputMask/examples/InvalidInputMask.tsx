import { InputMask } from "@gem-org/gem-system";

type InvalidInputMaskProps = { label: string; errorMessage: string };

export function InvalidInputMask({ label, errorMessage }: InvalidInputMaskProps) {
  return <InputMask label={label} preset="card" defaultValue="4111 1111" isInvalid errorMessage={errorMessage} />;
}
