import { useRef, useState } from "react";
import { Button, Transition } from "@gem-org/gem-system";
import { DemoPanel } from "./DemoPanel.tsx";
import type { PanelCopy, ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

type CallbacksTransitionProps = ToggleCopy & PanelCopy & { logLabel: string; clear: string };

const MAX_ENTRIES = 6;

export function CallbacksTransition({
  show,
  hide,
  title,
  body,
  logLabel,
  clear,
}: CallbacksTransitionProps) {
  const [open, setOpen] = useState(true);
  const [log, setLog] = useState<{ id: number; text: string }[]>([]);
  const start = useRef(0);
  const nextId = useRef(0);

  const track = (name: string) => () => {
    const elapsed = Math.round(performance.now() - start.current);
    const entry = { id: nextId.current++, text: `${name} · ${elapsed} ms` };
    setLog((current) => [...current, entry].slice(-MAX_ENTRIES));
  };

  const toggle = () => {
    start.current = performance.now();
    setOpen(!open);
  };

  return (
    <div className="transition-demo">
      <div className="transition-demo__toolbar">
        <Button size="sm" variant={open ? "secondary" : "primary"} onClick={toggle}>
          {open ? hide : show}
        </Button>
        <Button size="sm" variant="transparent" onClick={() => setLog([])}>
          {clear}
        </Button>
      </div>
      <div className="transition-demo__stage">
        <Transition
          in={open}
          effect="slide-up"
          duration={400}
          onEnter={track("onEnter")}
          onEntering={track("onEntering")}
          onEntered={track("onEntered")}
          onExit={track("onExit")}
          onExiting={track("onExiting")}
          onExited={track("onExited")}
        >
          <DemoPanel title={title}>{body}</DemoPanel>
        </Transition>
      </div>
      <ol className="transition-demo__log" aria-label={logLabel}>
        {log.map((entry) => (
          <li key={entry.id}>{entry.text}</li>
        ))}
      </ol>
    </div>
  );
}
