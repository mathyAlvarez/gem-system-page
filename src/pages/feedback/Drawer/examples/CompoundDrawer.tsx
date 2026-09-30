import { useId, useState } from "react";
import { Badge, Button, Drawer } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

type CompoundDrawerProps = {
  common: DrawerCommon;
  open: string;
  title: string;
  subtitle: string;
  badge: string;
  body: string;
  hint: string;
};

export function CompoundDrawer({ common, open: openLabel, title, subtitle, badge, body, hint }: CompoundDrawerProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        placement="left"
        closeLabel={common.closeLabel}
        aria-labelledby={titleId}
      >
        <Drawer.Header headingId={titleId} title={title} subtitle={subtitle} extra={<Badge>{badge}</Badge>} />
        <Drawer.Body className="drawer-stack">
          <p className="drawer-copy">{body}</p>
          <p className="drawer-copy">{hint}</p>
        </Drawer.Body>
        <Drawer.Footer>
          <Button variant="transparent" size="sm" onClick={() => setOpen(false)}>
            {common.cancel}
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            {common.save}
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}
