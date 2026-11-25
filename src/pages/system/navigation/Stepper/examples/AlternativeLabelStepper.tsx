import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type AlternativeLabelStepperProps = { texts: StepperTexts };

export function AlternativeLabelStepper({ texts }: AlternativeLabelStepperProps) {
  return (
    <div className="stepper-demo">
      <Stepper
        items={setupItems(texts)}
        defaultValue="profile"
        alternativeLabel
        navLabel={texts.navLabel}
      />
    </div>
  );
}
