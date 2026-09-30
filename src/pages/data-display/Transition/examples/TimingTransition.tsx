import { useState } from "react";
import { Button, Transition, type TransitionProps } from "@gem-org/gem-system";
import type { ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

const TIMINGS: { id: string; props: TransitionProps }[] = [
  { id: "duration={120}", props: { duration: 120 } },
  { id: "duration={600}", props: { duration: 600 } },
  { id: "{ enter: 480, exit: 160 }", props: { duration: { enter: 480, exit: 160 } } },
  { id: "delay={250}", props: { delay: 250 } },
  { id: "easing=\"cubic-bezier(…)\"", props: { duration: 500, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" } },
];

export function TimingTransition({ show, hide }: ToggleCopy) {
  const [open, setOpen] = useState(true);

  return (
    <div className="transition-demo transition-demo--wide">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <div className="transition-demo__list">
        {TIMINGS.map(({ id, props }) => (
          <Transition key={id} {...props} in={open} effect="slide-right" block>
            <div className="transition-demo__row">
              <code>{id}</code>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
}
