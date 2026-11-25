import { InputPassword, type InputPasswordProps } from "@gem-org/gem-system";
import { Lock } from "@gem-org/gem-system/icons";
import { cn } from "@/lib/cn";

function BrandInputPassword({ wrapperClassName, ...props }: InputPasswordProps) {
  return (
    <InputPassword
      prefixIcon={<Lock size="sm" />}
      wrapperClassName={cn(
        "[--gem-color-accent:var(--gem-palette-secondary-600)]",
        "[--gem-shadow-focus:0_0_0_3px_color-mix(in_srgb,var(--gem-palette-secondary-500)_35%,transparent)]",
        "[--gem-radius-md:var(--gem-radius-full)] [--gem-radius-sm:var(--gem-radius-full)]",
        wrapperClassName,
      )}
      {...props}
    />
  );
}

type TailwindInputPasswordProps = {
  texts: { brand: string; brandHelper: string; merged: string; mergedHelper: string };
};

export function TailwindInputPassword({ texts }: TailwindInputPasswordProps) {
  return (
    <>
      <BrandInputPassword
        label={texts.brand}
        defaultValue="opensesame"
        helperText={texts.brandHelper}
      />
      <BrandInputPassword
        label={texts.merged}
        defaultValue="opensesame"
        helperText={texts.mergedHelper}
        wrapperClassName="[--gem-radius-md:var(--gem-radius-xs)]"
      />
    </>
  );
}
