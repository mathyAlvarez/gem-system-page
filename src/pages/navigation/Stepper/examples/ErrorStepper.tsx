import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type ErrorStepperProps = { texts: StepperTexts; errorDescription: string };

export function ErrorStepper({ texts, errorDescription }: ErrorStepperProps) {
  const items = setupItems(texts).map((item) =>
    item.id === "profile" ? { ...item, error: true, description: errorDescription } : item,
  );

  return (
    <div className="stepper-demo">
      <Stepper items={items} defaultValue="profile" navLabel={texts.navLabel} />
    </div>
  );
}
