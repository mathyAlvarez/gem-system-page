import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

const sizes = ["sm", "md", "lg"] as const;

type SizesStepperProps = { texts: StepperTexts };

export function SizesStepper({ texts }: SizesStepperProps) {
  return (
    <div className="stepper-demo stepper-demo--stack">
      {sizes.map((size) => (
        <div key={size}>
          <p className="stepper-caption">size="{size}"</p>
          <Stepper
            items={setupItems(texts)}
            defaultValue="profile"
            size={size}
            showContent={false}
            navLabel={`${texts.navLabel} (${size})`}
          />
        </div>
      ))}
    </div>
  );
}
