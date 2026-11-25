import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 240;

type UtilitiesAnimatedNumberProps = {
  label: string;
  increase: string;
  decrease: string;
};

export function UtilitiesAnimatedNumber({
  label,
  increase,
  decrease,
}: UtilitiesAnimatedNumberProps) {
  const [members, setMembers] = useState(1280);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setMembers((value) => shiftBy(value, STEP))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setMembers((value) => shiftBy(value, -STEP))}
        >
          {decrease}
        </Button>
      </div>
      <NumberPanel label={label}>
        <AnimatedNumber
          value={members}
          classNames={{ root: "gemst-inline-flex", value: "gemst-relative" }}
        />
      </NumberPanel>
    </div>
  );
}
