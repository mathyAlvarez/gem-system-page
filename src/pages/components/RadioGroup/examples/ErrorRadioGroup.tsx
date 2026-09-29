import { Radio, RadioGroup } from "@gem-org/gem-system";

type ErrorRadioGroupProps = {
  label: string;
  errorMessage: string;
  card: string;
  transfer: string;
  wallet: string;
};

export function ErrorRadioGroup({ label, errorMessage, card, transfer, wallet }: ErrorRadioGroupProps) {
  return (
    <RadioGroup name="payment-error" label={label} errorMessage={errorMessage} isRequired>
      <Radio value="card" label={card} />
      <Radio value="transfer" label={transfer} />
      <Radio value="wallet" label={wallet} />
    </RadioGroup>
  );
}
