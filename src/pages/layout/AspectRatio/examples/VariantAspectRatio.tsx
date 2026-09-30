import { AspectRatio, type AspectRatioProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./aspect-demo.css";

const mediaVariants = cva("", {
  variants: {
    frame: {
      plain: "",
      card: "shadow-md ring-1 ring-(--gem-color-border)",
      polaroid: "border-8 border-b-24 border-white shadow-lg",
    },
    corners: {
      default: "",
      soft: "[--gem-aspect-ratio-radius:var(--gem-radius-2xl)]",
      sharp: "[--gem-aspect-ratio-radius:0]",
    },
  },
  defaultVariants: { frame: "plain", corners: "default" },
});

type MediaProps = AspectRatioProps & VariantProps<typeof mediaVariants>;

export function Media({ frame, corners, className, ...props }: MediaProps) {
  return <AspectRatio className={cn(mediaVariants({ frame, corners }), className)} {...props} />;
}

const variants: VariantProps<typeof mediaVariants>[] = [
  { frame: "card", corners: "soft" },
  { frame: "polaroid", corners: "sharp" },
  { frame: "plain", corners: "sharp" },
];

type VariantAspectRatiosProps = { alt: string };

export function VariantAspectRatios({ alt }: VariantAspectRatiosProps) {
  return (
    <div className="aspect-grid">
      {variants.map((variant) => {
        const label = Object.entries(variant)
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ");
        return (
          <div key={label}>
            <div className="aspect-caption">{label}</div>
            <Media ratio="4:3" {...variant}>
              <img src="/gem-org-banner.jpeg" alt={alt} />
            </Media>
          </div>
        );
      })}
    </div>
  );
}
