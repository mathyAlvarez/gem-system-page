import type { ComponentProps } from "react";
import { Button } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonTone = cva("", {
  variants: {
    tone: {
      emerald: "bg-emerald-600 text-white hover:bg-emerald-700",
      sky: "bg-sky-600 text-white hover:bg-sky-700",
      rose: "bg-rose-600 text-white hover:bg-rose-700",
    },
    shape: { default: "", pill: "rounded-full" },
  },
  defaultVariants: { shape: "default" },
});

type ToneButtonProps = ComponentProps<typeof Button> & VariantProps<typeof buttonTone>;

export function ToneButton({ tone, shape, className, ...props }: ToneButtonProps) {
  return <Button {...props} className={cn(buttonTone({ tone, shape }), className)} />;
}

export function ToneButtons() {
  return (
    <>
      <ToneButton tone="emerald" shape="pill">emerald</ToneButton>
      <ToneButton tone="sky" shape="pill">sky</ToneButton>
      <ToneButton tone="rose" shape="pill">rose</ToneButton>
    </>
  );
}
