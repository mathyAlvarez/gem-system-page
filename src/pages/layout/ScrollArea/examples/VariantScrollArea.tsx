import { ScrollArea, type ScrollAreaProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { LongCopy } from "./LongCopy.tsx";

const scrollerVariants = cva("ring-1 ring-(--gem-color-border)", {
  variants: {
    tone: {
      neutral: "",
      primary:
        "[--gem-scroll-area-thumb:var(--gem-color-primary-400)] [--gem-scroll-area-thumb-hover:var(--gem-color-primary-600)]",
      subtle: "bg-(--gem-color-bg-subtle) ring-0",
    },
    fade: {
      true: "[mask-image:linear-gradient(to_bottom,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)]",
      false: "",
    },
  },
  defaultVariants: { tone: "neutral", fade: false },
});

type ScrollerProps = ScrollAreaProps & VariantProps<typeof scrollerVariants>;

export function Scroller({ tone, fade, className, ...props }: ScrollerProps) {
  return <ScrollArea className={cn(scrollerVariants({ tone, fade }), className)} {...props} />;
}

const variants: VariantProps<typeof scrollerVariants>[] = [
  { tone: "primary" },
  { tone: "subtle", fade: true },
];

type VariantScrollAreasProps = { paragraphs: string[] };

export function VariantScrollAreas({ paragraphs }: VariantScrollAreasProps) {
  return (
    <div className="scroll-grid">
      {variants.map((variant) => {
        const label = Object.entries(variant)
          .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
          .join(" ");
        return (
          <div key={label}>
            <p className="scroll-caption">{label}</p>
            <Scroller type="always" maxHeight={200} label={label} {...variant}>
              <LongCopy paragraphs={paragraphs} />
            </Scroller>
          </div>
        );
      })}
    </div>
  );
}
