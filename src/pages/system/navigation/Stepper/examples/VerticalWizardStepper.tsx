import { useState } from "react";
import { Button, Stepper, type StepperItem } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type VerticalWizardStepperProps = { texts: StepperTexts };

export function VerticalWizardStepper({ texts }: VerticalWizardStepperProps) {
  const [step, setStep] = useState("account");
  const base = setupItems(texts);

  const items: StepperItem[] = base.map((item, index) => {
    const previous = base[index - 1];
    const next = base[index + 1];

    return {
      ...item,
      content: (
        <div className="stepper-panel">
          <p>{item.content}</p>
          <div className="stepper-actions">
            {previous ? (
              <Button variant="secondary" size="sm" onClick={() => setStep(previous.id)}>
                {texts.back}
              </Button>
            ) : null}
            <Button size="sm" onClick={() => setStep(next ? next.id : base[0].id)}>
              {next ? texts.next : texts.restart}
            </Button>
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="stepper-demo stepper-demo--narrow">
      <Stepper
        items={items}
        value={step}
        onChange={setStep}
        orientation="vertical"
        navLabel={texts.navLabel}
      />
    </div>
  );
}
