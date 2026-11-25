import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type AsChildScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  title: string;
  body: string;
};

export function AsChildScaleTransition({
  scaleIn,
  scaleOut,
  title,
  body,
}: AsChildScaleTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="scale-demo">
      <div className="scale-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? scaleOut : scaleIn}
        </Button>
      </div>
      <ScaleTransition isIn={isIn} asChild origin="center">
        <Card title={title} bordered shadow="sm">
          <p style={{ margin: 0 }}>{body}</p>
        </Card>
      </ScaleTransition>
    </div>
  );
}
