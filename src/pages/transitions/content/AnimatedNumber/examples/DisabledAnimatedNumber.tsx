import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 240;

type DisabledAnimatedNumberProps = {
  increase: string;
  decrease: string;
};

export function DisabledAnimatedNumber({ increase, decrease }: DisabledAnimatedNumberProps) {
  const [stock, setStock] = useState(1280);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setStock((value) => shiftBy(value, STEP))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setStock((value) => shiftBy(value, -STEP))}
        >
          {decrease}
        </Button>
      </div>
      <div className="animated-number-demo__row">
        <NumberPanel label="default">
          <AnimatedNumber value={stock} />
        </NumberPanel>
        <NumberPanel label="isDisabled">
          <AnimatedNumber value={stock} isDisabled />
        </NumberPanel>
      </div>
    </div>
  );
}
