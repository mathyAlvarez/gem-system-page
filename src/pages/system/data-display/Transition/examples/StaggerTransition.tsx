import { useState } from "react";
import { Button, Transition } from "@gem-org/gem-system";
import type { ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

type StaggerTransitionProps = ToggleCopy & {
  listLabel: string;
  items: { name: string; detail: string }[];
};

const STEP_MS = 70;

export function StaggerTransition({ show, hide, listLabel, items }: StaggerTransitionProps) {
  const [open, setOpen] = useState(true);
  const last = items.length - 1;

  return (
    <div className="transition-demo">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <ul className="transition-demo__list" aria-label={listLabel}>
        {items.map((item, index) => (
          <li key={item.name}>
            <Transition
              in={open}
              effect="slide-up"
              block
              delay={(open ? index : last - index) * STEP_MS}
            >
              <div className="transition-demo__row">
                <span>{item.name}</span>
                <span className="transition-demo__label">{item.detail}</span>
              </div>
            </Transition>
          </li>
        ))}
      </ul>
    </div>
  );
}
