import { Radio, RadioGroup, type RadioGroupProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function CardRadioGroup({ wrapperClassName, ...props }: RadioGroupProps) {
  return (
    <RadioGroup
      wrapperClassName={cn(
        "rounded-lg border border-(--gem-color-border) px-4 py-3",
        "[&_.gem-radio]:[--gem-radio-tone:var(--gem-palette-secondary-600)] [&_.gem-radio]:[--gem-radio-tone-active:var(--gem-palette-secondary-700)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindRadioGroupProps = {
  texts: {
    card: string;
    cardHelper: string;
    merged: string;
    mergedHelper: string;
    a: string;
    b: string;
  };
};

export function TailwindRadioGroup({ texts }: TailwindRadioGroupProps) {
  return (
    <>
      <CardRadioGroup
        name="tailwind-card"
        label={texts.card}
        helperText={texts.cardHelper}
        defaultValue="a"
      >
        <Radio value="a" label={texts.a} />
        <Radio value="b" label={texts.b} />
      </CardRadioGroup>
      <CardRadioGroup
        name="tailwind-merged"
        label={texts.merged}
        helperText={texts.mergedHelper}
        orientation="horizontal"
        wrapperClassName="rounded-full px-6"
        defaultValue="a"
      >
        <Radio value="a" label={texts.a} />
        <Radio value="b" label={texts.b} />
      </CardRadioGroup>
    </>
  );
}
