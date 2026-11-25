import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition } from "@gem-org/gemsitions/view-transition";
import "./view-transition-demo.css";

type PresenceViewTransitionProps = {
  hide: string;
  show: string;
  label: string;
  copy: string;
};

export function PresenceViewTransition({ hide, show, label, copy }: PresenceViewTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="view-transition-demo">
      <div className="view-transition-demo__controls">
        <Button size="sm" variant="secondary" onClick={() => setIsIn((value) => !value)}>
          {isIn ? hide : show}
        </Button>
      </div>
      <ViewTransition name="docs-vt-presence" isIn={isIn} viewKey="panel">
        <div className="view-transition-demo__panel">
          {label}
          <span className="view-transition-demo__copy">{copy}</span>
        </div>
      </ViewTransition>
    </div>
  );
}
