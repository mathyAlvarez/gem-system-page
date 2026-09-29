import { Switch, type SwitchProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function SettingSwitch({ wrapperClassName, ...props }: SwitchProps) {
  return (
    <Switch
      labelPlacement="start"
      wrapperClassName={cn(
        "w-full rounded-lg border border-(--gem-color-border) px-4 py-3 [&_label]:w-full [&_label]:justify-between",
        "[--gem-switch-tone:var(--gem-palette-secondary-600)] [--gem-switch-tone-active:var(--gem-palette-secondary-700)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindSwitchProps = {
  texts: { row: string; rowHelper: string; merged: string; mergedHelper: string };
};

export function TailwindSwitch({ texts }: TailwindSwitchProps) {
  return (
    <>
      <SettingSwitch label={texts.row} helperText={texts.rowHelper} defaultChecked />
      <SettingSwitch label={texts.merged} helperText={texts.mergedHelper} wrapperClassName="rounded-2xl px-6" />
    </>
  );
}
