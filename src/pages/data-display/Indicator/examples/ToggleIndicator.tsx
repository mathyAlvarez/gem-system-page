import { useState } from "react";
import { Button, Indicator } from "@gem-org/gem-system";
import "./indicator-demo.css";

type ToggleIndicatorProps = { label: string; hide: string; show: string };

export function ToggleIndicator({ label, hide, show }: ToggleIndicatorProps) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="indicator-stack">
      <Button variant="secondary" size="sm" aria-pressed={visible} onClick={() => setVisible((value) => !value)}>
        {visible ? hide : show}
      </Button>
      <Indicator isInvisible={!visible} label={label}>
        <span className="indicator-tile" />
      </Indicator>
    </div>
  );
}
