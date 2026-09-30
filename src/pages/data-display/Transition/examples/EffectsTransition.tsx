import { useState } from "react";
import { Button, Transition } from "@gem-org/gem-system";
import { TRANSITION_EFFECTS, type ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

export function EffectsTransition({ show, hide }: ToggleCopy) {
  const [open, setOpen] = useState(true);

  return (
    <div className="transition-demo transition-demo--wide">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <div className="transition-demo__grid">
        {TRANSITION_EFFECTS.map((effect) => (
          <div key={effect} className="transition-demo__cell">
            <p className="transition-demo__label">{effect}</p>
            <Transition in={open} effect={effect} duration={320}>
              <div className="transition-demo__row">{effect}</div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
}
