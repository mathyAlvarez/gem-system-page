import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";
import "./fade-transition-demo.css";

type AsChildFadeTransitionProps = {
  fadeIn: string;
  fadeOut: string;
  title: string;
  body: string;
};

export function AsChildFadeTransition({
  fadeIn,
  fadeOut,
  title,
  body,
}: AsChildFadeTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="fade-demo">
      <div className="fade-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? fadeOut : fadeIn}
        </Button>
      </div>
      <FadeTransition isIn={isIn} asChild>
        <Card title={title} bordered shadow="sm">
          <p style={{ margin: 0 }}>{body}</p>
        </Card>
      </FadeTransition>
    </div>
  );
}
