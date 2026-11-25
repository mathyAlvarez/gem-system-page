import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 3.25;
const usd = { style: "currency", currency: "USD" } as const;
const trend = {
  up: "animated-number-demo__trend-up",
  down: "animated-number-demo__trend-down",
};

type TrendAnimatedNumberProps = {
  label: string;
  rise: string;
  fall: string;
};

export function TrendAnimatedNumber({ label, rise, fall }: TrendAnimatedNumberProps) {
  const [price, setPrice] = useState(182.4);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setPrice((value) => shiftBy(value, STEP))}
        >
          {rise}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setPrice((value) => shiftBy(value, -STEP))}
        >
          {fall}
        </Button>
      </div>
      <NumberPanel label={label}>
        <AnimatedNumber value={price} locales="en-US" formatOptions={usd} trendClassName={trend} />
      </NumberPanel>
    </div>
  );
}
