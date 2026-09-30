import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";
import "./stepper-overrides.css";

type StyledStepperProps = { texts: StepperTexts };

export function StyledStepper({ texts }: StyledStepperProps) {
  return (
    <div className="stepper-demo">
      <Stepper
        items={setupItems(texts)}
        defaultValue="profile"
        alternativeLabel
        showContent={false}
        className="stepper-branded"
        navLabel={texts.navLabel}
      />
    </div>
  );
}
