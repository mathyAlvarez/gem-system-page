import { Radio, type RadioProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function CardRadio({ wrapperClassName, ...props }: RadioProps) {
  return (
    <Radio
      wrapperClassName={cn(
        "rounded-lg border border-(--gem-color-border) px-4 py-3",
        "[--gem-radio-tone:var(--gem-palette-secondary-600)] [--gem-radio-tone-active:var(--gem-palette-secondary-700)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindRadioProps = {
  texts: { card: string; cardHelper: string; merged: string; mergedHelper: string };
};

export function TailwindRadio({ texts }: TailwindRadioProps) {
  return (
    <>
      <CardRadio name="tailwind-radio" value="card" label={texts.card} helperText={texts.cardHelper} defaultChecked />
      <CardRadio
        name="tailwind-radio"
        value="merged"
        label={texts.merged}
        helperText={texts.mergedHelper}
        wrapperClassName="rounded-full px-6"
      />
    </>
  );
}
