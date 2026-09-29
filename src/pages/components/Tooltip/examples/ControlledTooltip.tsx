import { useState } from "react";
import { Button, Tooltip } from "@gem-org/gem-system";

type ControlledTooltipProps = { content: string; target: string; open: string; close: string };

export function ControlledTooltip({ content, target, open: openLabel, close }: ControlledTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip content={content} open={open} onOpenChange={setOpen} delay={0}>
        <Button variant="info">{target}</Button>
      </Tooltip>
      <Button variant="secondary" size="sm" onClick={() => setOpen((value) => !value)}>
        {open ? close : openLabel}
      </Button>
    </>
  );
}
