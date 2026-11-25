import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import "./animated-number-demo.css";

type AsChildAnimatedNumberProps = {
  before: string;
  after: string;
  add: string;
  remove: string;
};

export function AsChildAnimatedNumber({ before, after, add, remove }: AsChildAnimatedNumberProps) {
  const [items, setItems] = useState(3);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button size="sm" variant="secondary" onClick={() => setItems((value) => value + 1)}>
          {add}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setItems((value) => Math.max(0, value - 1))}
        >
          {remove}
        </Button>
      </div>
      <p className="animated-number-demo__sentence">
        {before}{" "}
        <AnimatedNumber value={items} effect="up" duration={300} asChild>
          <strong className="animated-number-demo__strong" />
        </AnimatedNumber>{" "}
        {after}
      </p>
    </div>
  );
}
