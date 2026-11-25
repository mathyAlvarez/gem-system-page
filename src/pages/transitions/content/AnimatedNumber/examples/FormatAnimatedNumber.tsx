import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const CAPACITY = 15;
const STEP = 1.5;

type FormatAnimatedNumberProps = {
  label: string;
  upload: string;
  remove: string;
  /** Text after the figure, with `{capacity}` replaced by the plan size. */
  suffix: string;
};

export function FormatAnimatedNumber({ label, upload, remove, suffix }: FormatAnimatedNumberProps) {
  const [usedGb, setUsedGb] = useState(3.2);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setUsedGb((value) => Math.min(CAPACITY, shiftBy(value, STEP)))}
        >
          {upload}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setUsedGb((value) => Math.max(0, shiftBy(value, -STEP)))}
        >
          {remove}
        </Button>
      </div>
      <NumberPanel label={label}>
        <AnimatedNumber
          value={usedGb}
          format={(gb) => gb.toFixed(1)}
          suffix={
            <span className="animated-number-demo__affix">
              {suffix.replace("{capacity}", String(CAPACITY))}
            </span>
          }
        />
      </NumberPanel>
    </div>
  );
}
