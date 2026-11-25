import { Stepper, type StepperItem } from "@gem-org/gem-system";
import "./stepper-demo.css";

type TrackingStep = { label: string; description: string };

type ReadOnlyStepperProps = {
  navLabel: string;
  steps: {
    placed: TrackingStep;
    packed: TrackingStep;
    shipped: TrackingStep;
    delivered: TrackingStep;
  };
};

export function ReadOnlyStepper({ navLabel, steps }: ReadOnlyStepperProps) {
  const items: StepperItem[] = [
    { id: "placed", ...steps.placed },
    { id: "packed", ...steps.packed },
    { id: "shipped", ...steps.shipped },
    { id: "delivered", ...steps.delivered },
  ];

  return (
    <div className="stepper-demo">
      <Stepper
        items={items}
        value="shipped"
        clickable={false}
        alternativeLabel
        size="sm"
        navLabel={navLabel}
      />
    </div>
  );
}
