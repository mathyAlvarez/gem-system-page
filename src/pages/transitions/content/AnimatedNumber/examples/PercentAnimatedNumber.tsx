import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 0.08;
const percent = { style: "percent", maximumFractionDigits: 1 } as const;

type PercentAnimatedNumberProps = {
  label: string;
  increase: string;
  decrease: string;
};

export function PercentAnimatedNumber({ label, increase, decrease }: PercentAnimatedNumberProps) {
  const [conversion, setConversion] = useState(0.42);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setConversion((value) => Math.min(1, shiftBy(value, STEP)))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setConversion((value) => Math.max(0, shiftBy(value, -STEP)))}
        >
          {decrease}
        </Button>
      </div>
      <NumberPanel label={label}>
        <AnimatedNumber value={conversion} duration={700} formatOptions={percent} />
      </NumberPanel>
    </div>
  );
}
