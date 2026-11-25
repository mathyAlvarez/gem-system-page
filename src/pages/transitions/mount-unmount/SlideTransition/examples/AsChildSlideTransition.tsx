import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type AsChildSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  title: string;
  body: string;
};

export function AsChildSlideTransition({
  slideIn,
  slideOut,
  title,
  body,
}: AsChildSlideTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="slide-demo">
      <div className="slide-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? slideOut : slideIn}
        </Button>
      </div>
      <SlideTransition isIn={isIn} asChild from="left">
        <Card title={title} bordered shadow="sm">
          <p style={{ margin: 0 }}>{body}</p>
        </Card>
      </SlideTransition>
    </div>
  );
}
