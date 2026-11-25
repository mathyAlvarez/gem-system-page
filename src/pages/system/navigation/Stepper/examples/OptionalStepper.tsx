import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type OptionalStepperProps = { texts: StepperTexts; optional: string };

export function OptionalStepper({ texts, optional }: OptionalStepperProps) {
  const items = setupItems(texts).map((item) =>
    item.id === "profile" ? { ...item, description: optional } : item,
  );

  return (
    <div className="stepper-demo">
      <Stepper items={items} navLabel={texts.navLabel} />
    </div>
  );
}
