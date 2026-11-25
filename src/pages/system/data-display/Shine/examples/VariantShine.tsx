import { Shine, type ShineProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./shine-demo.css";

const shineVariants = cva("", {
  variants: {
    frame: {
      none: "",
      ring: "ring-2 ring-(--gem-color-tertiary-300) ring-offset-2",
    },
    lift: {
      false: "",
      true: "shadow-xl transition-transform hover:-translate-y-1",
    },
  },
  defaultVariants: { frame: "none", lift: false },
});

type PromoShineProps = ShineProps & VariantProps<typeof shineVariants>;

export function PromoShine({ frame, lift, className, ...props }: PromoShineProps) {
  return <Shine tone="gold" className={cn(shineVariants({ frame, lift }), className)} {...props} />;
}

type VariantShineProps = { label: string };

export function VariantShine({ label }: VariantShineProps) {
  return (
    <div className="shine-demo__row">
      <PromoShine frame="ring">
        <span className="shine-tile shine-tile--dark">{label}</span>
      </PromoShine>
      <PromoShine lift trigger="hover">
        <button type="button" className="shine-tile shine-tile--dark shine-tile--button">
          {label}
        </button>
      </PromoShine>
    </div>
  );
}
