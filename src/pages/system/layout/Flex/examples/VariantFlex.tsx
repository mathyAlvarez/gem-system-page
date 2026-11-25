import { Flex, type FlexProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { FlexItem } from "./FlexItem.tsx";

const barVariants = cva("", {
  variants: {
    space: {
      tight: "[--gem-flex-gap:var(--gem-space-1)]",
      normal: "[--gem-flex-gap:var(--gem-space-3)]",
      loose: "[--gem-flex-gap:var(--gem-space-8)]",
    },
    surface: {
      none: "",
      bar: "rounded-lg border border-(--gem-color-border) bg-(--gem-color-bg) px-4 py-3",
    },
  },
  defaultVariants: { space: "normal", surface: "none" },
});

type BarProps = FlexProps & VariantProps<typeof barVariants>;

export function Bar({ space, surface, className, ...props }: BarProps) {
  return (
    <Flex align="center" className={cn(barVariants({ space, surface }), className)} {...props} />
  );
}

const variants: VariantProps<typeof barVariants>[] = [
  { space: "tight" },
  { space: "loose" },
  { space: "normal", surface: "bar" },
];

export function VariantFlexes() {
  return (
    <div className="flex-compare">
      {variants.map((variant) => {
        const label = Object.entries(variant)
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ");
        return (
          <div key={label}>
            <div className="flex-caption">{label}</div>
            <Bar {...variant}>
              <FlexItem>A</FlexItem>
              <FlexItem>B</FlexItem>
              <FlexItem>C</FlexItem>
            </Bar>
          </div>
        );
      })}
    </div>
  );
}
