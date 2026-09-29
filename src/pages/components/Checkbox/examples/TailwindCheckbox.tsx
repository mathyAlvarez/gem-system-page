import { Checkbox, type CheckboxProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function CardCheckbox({ wrapperClassName, ...props }: CheckboxProps) {
  return (
    <Checkbox
      wrapperClassName={cn(
        "rounded-lg border border-(--gem-color-border) px-4 py-3",
        "[--gem-checkbox-tone:var(--gem-palette-secondary-600)] [--gem-checkbox-tone-active:var(--gem-palette-secondary-700)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindCheckboxProps = {
  texts: { card: string; cardHelper: string; merged: string; mergedHelper: string };
};

export function TailwindCheckbox({ texts }: TailwindCheckboxProps) {
  return (
    <>
      <CardCheckbox label={texts.card} helperText={texts.cardHelper} defaultChecked />
      <CardCheckbox
        label={texts.merged}
        helperText={texts.mergedHelper}
        wrapperClassName="rounded-full px-6"
        defaultChecked
      />
    </>
  );
}
