import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type NonLinearStepperProps = { texts: StepperTexts };

export function NonLinearStepper({ texts }: NonLinearStepperProps) {
  return (
    <div className="stepper-demo">
      <Stepper items={setupItems(texts)} linear={false} alternativeLabel navLabel={texts.navLabel} />
    </div>
  );
}
