import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 180;
const usd = { style: "currency", currency: "USD" } as const;

type CurrencyAnimatedNumberProps = {
  label: string;
  increase: string;
  decrease: string;
};

export function CurrencyAnimatedNumber({ label, increase, decrease }: CurrencyAnimatedNumberProps) {
  const [revenue, setRevenue] = useState(1280);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setRevenue((value) => shiftBy(value, STEP))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setRevenue((value) => shiftBy(value, -STEP))}
        >
          {decrease}
        </Button>
      </div>
      <NumberPanel label={label}>
        <AnimatedNumber
          value={revenue}
          locales="en-US"
          formatOptions={usd}
          duration={{ enter: 620, exit: 420 }}
          easing={{ enter: "emphasized", exit: "exit" }}
        />
      </NumberPanel>
    </div>
  );
}
