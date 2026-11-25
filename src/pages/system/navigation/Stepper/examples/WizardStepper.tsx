import { useState } from "react";
import { Button, Stepper } from "@gem-org/gem-system";
import { setupItems, type StepperTexts } from "./demo.ts";
import "./stepper-demo.css";

type WizardStepperProps = { texts: StepperTexts };

export function WizardStepper({ texts }: WizardStepperProps) {
  const [step, setStep] = useState("account");
  const [finished, setFinished] = useState(false);
  const items = setupItems(texts).map((item) => ({ ...item, completed: finished }));
  const index = items.findIndex((item) => item.id === step);
  const isLast = index === items.length - 1;

  function goTo(offset: number) {
    const target = items[index + offset];
    if (target) setStep(target.id);
  }

  function restart() {
    setFinished(false);
    setStep("account");
  }

  return (
    <div className="stepper-demo">
      <Stepper
        items={items}
        value={step}
        onChange={setStep}
        showContent={!finished}
        navLabel={texts.navLabel}
      />
      {finished ? <p className="stepper-panel">{texts.done}</p> : null}
      <div className="stepper-actions">
        {finished ? (
          <Button variant="secondary" size="sm" onClick={restart}>
            {texts.restart}
          </Button>
        ) : (
          <>
            <Button variant="secondary" size="sm" disabled={index === 0} onClick={() => goTo(-1)}>
              {texts.back}
            </Button>
            <Button size="sm" onClick={() => (isLast ? setFinished(true) : goTo(1))}>
              {isLast ? texts.finish : texts.next}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
