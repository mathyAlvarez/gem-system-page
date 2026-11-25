import { Stepper, type StepperProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

const stepperVariants = cva("", {
  variants: {
    tone: {
      primary: "",
      success:
        "[--gem-stepper-current:var(--gem-palette-success-600)] [--gem-stepper-completed:var(--gem-palette-success-600)]",
      neutral:
        "[--gem-stepper-current:var(--gem-palette-neutral-800)] [--gem-stepper-completed:var(--gem-palette-neutral-800)]",
    },
    indicator: {
      circle: "",
      square: "[&_.gem-stepper__indicator]:rounded-md",
    },
  },
  defaultVariants: { tone: "primary", indicator: "circle" },
});

type ProgressStepperProps = StepperProps & VariantProps<typeof stepperVariants>;

export function ProgressStepper({ tone, indicator, className, ...props }: ProgressStepperProps) {
  return <Stepper className={cn(stepperVariants({ tone, indicator }), className)} {...props} />;
}

const variants = [
  { tone: "success", indicator: "circle" },
  { tone: "neutral", indicator: "square" },
] as const;

type VariantStepperProps = { texts: StepperTexts };

export function VariantStepper({ texts }: VariantStepperProps) {
  return (
    <div className="stepper-demo stepper-demo--stack">
      {variants.map(({ tone, indicator }) => (
        <div key={tone}>
          <p className="stepper-caption">
            tone="{tone}" indicator="{indicator}"
          </p>
          <ProgressStepper
            tone={tone}
            indicator={indicator}
            items={setupItems(texts)}
            defaultValue="profile"
            showContent={false}
            navLabel={`${texts.navLabel} (${tone})`}
          />
        </div>
      ))}
    </div>
  );
}
