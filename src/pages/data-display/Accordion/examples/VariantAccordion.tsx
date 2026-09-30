import { Accordion, type AccordionProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

const accordionVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      primary:
        "[--gem-accordion-border:var(--gem-color-primary-500)] [--gem-accordion-subtle:color-mix(in_srgb,var(--gem-color-primary-500)_10%,transparent)]",
      secondary:
        "[--gem-accordion-border:var(--gem-palette-secondary-400)] [--gem-accordion-subtle:color-mix(in_srgb,var(--gem-palette-secondary-500)_10%,transparent)]",
    },
    highlight: {
      true: "[&_.gem-accordion__item--open_.gem-accordion__trigger]:bg-(--gem-accordion-subtle)",
      false: "",
    },
  },
  defaultVariants: { tone: "neutral", highlight: false },
});

type ToneAccordionProps = AccordionProps & VariantProps<typeof accordionVariants>;

export function ToneAccordion({ tone, highlight, className, ...props }: ToneAccordionProps) {
  return <Accordion className={cn(accordionVariants({ tone, highlight }), className)} {...props} />;
}

type VariantAccordionProps = { common: AccordionCommon };

export function VariantAccordion({ common }: VariantAccordionProps) {
  const items = toItems(common.sections);

  return (
    <div className="accordion-demo">
      <ToneAccordion tone="primary" items={items} defaultValue="billing" />
      <ToneAccordion tone="secondary" highlight variant="separated" items={items} defaultValue="members" />
    </div>
  );
}
