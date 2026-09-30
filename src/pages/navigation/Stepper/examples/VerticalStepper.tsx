import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type VerticalStepperProps = { texts: StepperTexts };

export function VerticalStepper({ texts }: VerticalStepperProps) {
  return (
    <div className="stepper-demo stepper-demo--narrow">
      <Stepper items={setupItems(texts)} defaultValue="profile" orientation="vertical" navLabel={texts.navLabel} />
    </div>
  );
}
