import { Button, Tooltip, type TooltipProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function BrandTooltip({ className, ...props }: TooltipProps) {
  return (
    <Tooltip
      className={cn(
        "rounded-lg bg-(--gem-palette-primary-600) px-3 py-2 font-bold text-(--gem-palette-neutral-50)",
        className,
      )}
      {...props}
    />
  );
}

type TailwindTooltipProps = {
  texts: { brand: string; brandContent: string; merged: string; mergedContent: string };
};

export function TailwindTooltip({ texts }: TailwindTooltipProps) {
  return (
    <>
      <BrandTooltip content={texts.brandContent}>
        <Button variant="secondary">{texts.brand}</Button>
      </BrandTooltip>
      <BrandTooltip content={texts.mergedContent} className="rounded-full bg-(--gem-palette-secondary-600)">
        <Button variant="secondary">{texts.merged}</Button>
      </BrandTooltip>
    </>
  );
}
