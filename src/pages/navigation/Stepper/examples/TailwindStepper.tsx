import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type TailwindStepperProps = { texts: StepperTexts };

export function TailwindStepper({ texts }: TailwindStepperProps) {
  return (
    <div className="stepper-demo">
      <Stepper
        items={setupItems(texts)}
        defaultValue="profile"
        alternativeLabel
        navLabel={texts.navLabel}
        classNames={{
          root: "rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5 [--gem-stepper-current:var(--color-violet-500)] [--gem-stepper-completed:var(--color-violet-500)]",
          indicator: "rounded-lg",
          label: "text-xs uppercase tracking-widest",
          connector: "rounded-full",
          panel: "rounded-xl bg-(--gem-color-bg) p-4 shadow-sm",
        }}
      />
    </div>
  );
}
