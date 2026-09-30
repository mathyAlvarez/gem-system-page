import { useState } from "react";
import { Button, InputText, Transition } from "@gem-org/gem-system";
import type { ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

type KeepMountedTransitionProps = ToggleCopy & {
  unmounted: string;
  mounted: string;
  field: string;
  placeholder: string;
};

export function KeepMountedTransition({ show, hide, unmounted, mounted, field, placeholder }: KeepMountedTransitionProps) {
  const [open, setOpen] = useState(true);
  const columns = [
    { id: "unmount", label: unmounted, unmountOnExit: true },
    { id: "keep", label: mounted, unmountOnExit: false },
  ];

  return (
    <div className="transition-demo transition-demo--wide">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <div className="transition-demo__columns">
        {columns.map((column) => (
          <div key={column.id} className="transition-demo__cell">
            <p className="transition-demo__label">{column.label}</p>
            <Transition in={open} effect="slide-down" block unmountOnExit={column.unmountOnExit}>
              <InputText label={`${field} (${column.label})`} placeholder={placeholder} />
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
}
