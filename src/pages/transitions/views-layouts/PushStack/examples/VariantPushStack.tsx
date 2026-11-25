import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack, type PushStackProps } from "@gem-org/gemsitions/push-stack";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { PUSH_STACK_STEPS } from "./demo.ts";
import "./push-stack-demo.css";

const panelVariants = cva("push-stack-demo__panel", {
  variants: {
    tone: {
      neutral: "",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_14%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftPushProps = PushStackProps &
  VariantProps<typeof panelVariants> & {
    label: string;
    copy: string;
  };

export function SoftPush({
  tone,
  className,
  label,
  copy,
  children: _children,
  ...props
}: SoftPushProps) {
  return (
    <PushStack duration={360} pagination={3} className={cn(className)} {...props}>
      <div className={panelVariants({ tone })}>
        {label}
        <span className="push-stack-demo__copy">{copy}</span>
      </div>
    </PushStack>
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantPushStackProps = {
  back: string;
  next: string;
  copies: Record<(typeof PUSH_STACK_STEPS)[number], string>;
};

export function VariantPushStack({ back, next, copies }: VariantPushStackProps) {
  const [step, setStep] = useState(0);
  const last = PUSH_STACK_STEPS.length - 1;
  const label = PUSH_STACK_STEPS[Math.min(Math.max(step, 0), last)];

  return (
    <div className="push-stack-demo push-stack-demo--wide">
      <div className="push-stack-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          disabled={step <= 0}
          onClick={() => setStep((v) => Math.max(0, v - 1))}
        >
          {back}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          disabled={step >= last}
          onClick={() => setStep((v) => Math.min(last, v + 1))}
        >
          {next}
        </Button>
      </div>
      <div className="push-stack-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone}>
            <p className="push-stack-demo__compare-label">{item.label}</p>
            <SoftPush
              tone={item.tone}
              index={step}
              viewKey={label}
              label={label}
              copy={copies[label]}
              onPagination={setStep}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
