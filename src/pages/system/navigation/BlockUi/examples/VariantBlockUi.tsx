import { useState } from "react";
import { BlockUi, Button, type BlockUiProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { useTimedBlock, type BlockUiTexts } from "./demo.ts";
import "./block-ui-demo.css";

const overlayVariants = cva("", {
  variants: {
    tone: {
      light: "",
      dark: "[--gem-block-ui-overlay:var(--gem-palette-neutral-900)]",
      brand: "[--gem-block-ui-overlay:var(--gem-color-primary-600)]",
    },
    spinner: {
      md: "[--gem-block-ui-spinner-size:var(--gem-icon-4xl)]",
      lg: "",
    },
  },
  defaultVariants: { tone: "light", spinner: "lg" },
});

type LoadingOverlayProps = BlockUiProps & VariantProps<typeof overlayVariants>;

export function LoadingOverlay({ tone, spinner, className, ...props }: LoadingOverlayProps) {
  return <BlockUi className={cn(overlayVariants({ tone, spinner }), className)} {...props} />;
}

const variants = [
  { tone: "dark", spinner: "lg", opacity: 70 },
  { tone: "brand", spinner: "md", opacity: 30 },
] as const;

type VariantBlockUiProps = { texts: BlockUiTexts };

export function VariantBlockUi({ texts }: VariantBlockUiProps) {
  const { blocking, blockFor } = useTimedBlock();
  const [current, setCurrent] = useState<(typeof variants)[number]>(variants[0]);

  return (
    <div className="block-panel">
      <p className="block-panel__title">{texts.title}</p>
      <div className="block-row">
        {variants.map((variant) => (
          <Button
            key={variant.tone}
            variant="secondary"
            size="sm"
            onClick={() => {
              setCurrent(variant);
              blockFor();
            }}
          >
            tone="{variant.tone}" spinner="{variant.spinner}"
          </Button>
        ))}
      </div>
      <LoadingOverlay
        blocking={blocking}
        tone={current.tone}
        spinner={current.spinner}
        opacity={current.opacity}
        aria-label={texts.loading}
      />
    </div>
  );
}
