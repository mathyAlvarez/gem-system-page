import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { NUMBER_EFFECTS, shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 240;

type EffectAnimatedNumberProps = {
  increase: string;
  decrease: string;
};

export function EffectAnimatedNumber({ increase, decrease }: EffectAnimatedNumberProps) {
  const [orders, setOrders] = useState(1280);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setOrders((value) => shiftBy(value, STEP))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setOrders((value) => shiftBy(value, -STEP))}
        >
          {decrease}
        </Button>
      </div>
      <div className="animated-number-demo__row">
        {NUMBER_EFFECTS.map((effect) => (
          <NumberPanel key={effect} label={`effect="${effect}"`}>
            <AnimatedNumber value={orders} effect={effect} />
          </NumberPanel>
        ))}
      </div>
    </div>
  );
}
