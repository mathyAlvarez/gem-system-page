import { Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type DisabledStepperProps = { texts: StepperTexts };

export function DisabledStepper({ texts }: DisabledStepperProps) {
  const items = setupItems(texts);
  const withDisabled = items.map((item) => (item.id === "profile" ? { ...item, disabled: true } : item));

  return (
    <div className="stepper-demo stepper-demo--stack">
      <div>
        <p className="stepper-caption">items[1].disabled</p>
        <Stepper items={withDisabled} linear={false} showContent={false} navLabel={texts.navLabel} />
      </div>
      <div>
        <p className="stepper-caption">isDisabled</p>
        <Stepper items={items} defaultValue="profile" isDisabled showContent={false} navLabel={texts.navLabel} />
      </div>
    </div>
  );
}
