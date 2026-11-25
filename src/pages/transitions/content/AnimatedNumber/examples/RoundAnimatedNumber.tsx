import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 1.1111;
const PRECISIONS = [
  { digits: 2, formatOptions: { minimumFractionDigits: 2, maximumFractionDigits: 2 } },
  { digits: 4, formatOptions: { minimumFractionDigits: 4, maximumFractionDigits: 4 } },
] as const;

type RoundAnimatedNumberProps = {
  increase: string;
  decrease: string;
};

export function RoundAnimatedNumber({ increase, decrease }: RoundAnimatedNumberProps) {
  const [rate, setRate] = useState(12.3456);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setRate((value) => shiftBy(value, STEP))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setRate((value) => shiftBy(value, -STEP))}
        >
          {decrease}
        </Button>
      </div>
      <div className="animated-number-demo__row">
        {PRECISIONS.map(({ digits, formatOptions }) => (
          <NumberPanel key={digits} label={`round={${digits}}`}>
            <AnimatedNumber
              value={rate}
              round={digits}
              duration={900}
              formatOptions={formatOptions}
            />
          </NumberPanel>
        ))}
      </div>
    </div>
  );
}
