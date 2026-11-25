import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const INITIAL = 1280;
const STEP = 240;

type BaseAnimatedNumberProps = {
  label: string;
  increase: string;
  decrease: string;
  reset: string;
};

export function BaseAnimatedNumber({ label, increase, decrease, reset }: BaseAnimatedNumberProps) {
  const [balance, setBalance] = useState(INITIAL);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setBalance((value) => shiftBy(value, STEP))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setBalance((value) => shiftBy(value, -STEP))}
        >
          {decrease}
        </Button>
        <Button size="sm" variant="transparent" onClick={() => setBalance(INITIAL)}>
          {reset}
        </Button>
      </div>
      <NumberPanel label={label}>
        <AnimatedNumber value={balance} />
      </NumberPanel>
    </div>
  );
}
