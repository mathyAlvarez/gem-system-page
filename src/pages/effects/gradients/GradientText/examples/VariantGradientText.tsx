import { GradientText, type GradientTextProps } from "@gem-org/gemffects/gradient-text";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

const brandVariants = cva("font-extrabold", {
  variants: {
    tone: {
      brand:
        "[--gemfx-gradient-text-from:var(--gem-palette-primary-400)] [--gemfx-gradient-text-via:var(--gem-palette-secondary-400)] [--gemfx-gradient-text-to:var(--gem-palette-tertiary-400)]",
      sunset:
        "[--gemfx-gradient-text-from:var(--gem-palette-tertiary-300)] [--gemfx-gradient-text-via:var(--gem-palette-error-400)] [--gemfx-gradient-text-to:var(--gem-palette-secondary-400)]",
      silver:
        "[--gemfx-gradient-text-from:var(--gem-palette-neutral-400)] [--gemfx-gradient-text-via:var(--gem-palette-neutral-100)] [--gemfx-gradient-text-to:var(--gem-palette-neutral-400)]",
    },
    size: {
      md: "text-[length:var(--gem-font-size-2xl)]",
      lg: "text-[length:var(--gem-font-size-4xl)]",
    },
  },
  defaultVariants: { tone: "brand", size: "md" },
});

type BrandTextProps = GradientTextProps & VariantProps<typeof brandVariants>;

export function BrandText({ tone, size, className, ...props }: BrandTextProps) {
  return <GradientText className={cn(brandVariants({ tone, size }), className)} {...props} />;
}

export function VariantGradientText() {
  return (
    <div className="gt-demo">
      {(["brand", "sunset", "silver"] as const).map((tone) => (
        <TextTile key={tone} label={`tone="${tone}"`}>
          <BrandText tone={tone} size="lg">
            <span>{tone}</span>
          </BrandText>
        </TextTile>
      ))}
    </div>
  );
}
