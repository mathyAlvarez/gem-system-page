import { useState } from "react";
import { Button, Checkbox, Drawer } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

type BaseDrawerProps = {
  common: DrawerCommon;
  open: string;
  title: string;
  subtitle: string;
  statusLegend: string;
  statuses: { active: string; paused: string; archived: string };
  reset: string;
  apply: string;
};

export function BaseDrawer({
  common,
  open: openLabel,
  title,
  subtitle,
  statusLegend,
  statuses,
  reset,
  apply,
}: BaseDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              {reset}
            </Button>
            <Button size="sm" onClick={() => setOpen(false)}>
              {apply}
            </Button>
          </>
        }
      >
        <fieldset className="drawer-group">
          <legend>{statusLegend}</legend>
          <Checkbox label={statuses.active} defaultChecked />
          <Checkbox label={statuses.paused} />
          <Checkbox label={statuses.archived} />
        </fieldset>
      </Drawer>
    </>
  );
}
