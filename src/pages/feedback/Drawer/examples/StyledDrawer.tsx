import { useState } from "react";
import { Button, Drawer } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-overrides.css";

type StyledDrawerProps = { common: DrawerCommon; open: string; title: string; subtitle: string; body: string };

export function StyledDrawer({ common, open: openLabel, title, subtitle, body }: StyledDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        className="drawer-branded"
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
        footer={
          <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </Drawer>
    </>
  );
}
