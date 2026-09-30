import { useState } from "react";
import { Button, Modal, type ModalProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

const modalVariants = cva("", {
  variants: {
    tone: {
      default: "",
      danger:
        "border-(--gem-palette-error-500) [&_.gem-modal__header]:bg-[color-mix(in_srgb,var(--gem-palette-error-500)_12%,transparent)] [&_.gem-modal__title]:text-(--gem-palette-error-600)",
      brand:
        "border-(--gem-palette-secondary-500) [&_.gem-modal__header]:bg-[color-mix(in_srgb,var(--gem-palette-secondary-500)_12%,transparent)] [&_.gem-modal__title]:text-(--gem-palette-secondary-600)",
    },
    placement: {
      center: "",
      top: "mt-[8vh]",
    },
  },
  defaultVariants: { tone: "default", placement: "center" },
});

type ToneModalProps = ModalProps & VariantProps<typeof modalVariants>;

export function ToneModal({ tone, placement, className, ...props }: ToneModalProps) {
  return <Modal className={cn(modalVariants({ tone, placement }), className)} {...props} />;
}

const variants = [
  { tone: "danger", placement: "center" },
  { tone: "brand", placement: "top" },
] as const;

type Variant = (typeof variants)[number];

type VariantModalProps = { common: ModalCommon; title: string; body: string };

export function VariantModal({ common, title, body }: VariantModalProps) {
  const [active, setActive] = useState<Variant | null>(null);

  return (
    <div className="modal-row">
      {variants.map((variant) => (
        <Button key={variant.tone} variant="secondary" size="sm" onClick={() => setActive(variant)}>
          tone="{variant.tone}" placement="{variant.placement}"
        </Button>
      ))}
      <ToneModal
        tone={active?.tone}
        placement={active?.placement}
        open={active !== null}
        onOpenChange={(next) => {
          if (!next) setActive(null);
        }}
        title={title}
        subtitle={active ? `tone="${active.tone}"` : undefined}
        closeLabel={common.closeLabel}
        footer={
          <Button size="sm" onClick={() => setActive(null)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </ToneModal>
    </div>
  );
}
