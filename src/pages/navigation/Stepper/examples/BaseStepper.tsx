import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type BaseStepperProps = { texts: StepperTexts };

export function BaseStepper({ texts }: BaseStepperProps) {
  return (
    <div className="stepper-demo">
      <Stepper items={setupItems(texts)} defaultValue="profile" navLabel={texts.navLabel} />
    </div>
  );
}
