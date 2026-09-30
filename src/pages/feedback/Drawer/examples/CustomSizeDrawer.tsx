import { useState } from "react";
import { Button, Drawer } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

const extents = [280, 360, "18rem", "40vw"] as const;

type Extent = (typeof extents)[number];

type CustomSizeDrawerProps = { common: DrawerCommon; title: string; body: string };

export function CustomSizeDrawer({ common, title, body }: CustomSizeDrawerProps) {
  const [open, setOpen] = useState(false);
  const [extent, setExtent] = useState<Extent>(280);
  const code = typeof extent === "number" ? `size={${extent}}` : `size="${extent}"`;

  return (
    <div className="drawer-row">
      {extents.map((next) => (
        <Button
          key={next}
          variant="secondary"
          size="sm"
          onClick={() => {
            setExtent(next);
            setOpen(true);
          }}
        >
          {String(next)}
        </Button>
      ))}
      <Drawer
        open={open}
        onOpenChange={setOpen}
        size={extent}
        title={title}
        subtitle={code}
        closeLabel={common.closeLabel}
        footer={
          <Button size="sm" onClick={() => setOpen(false)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </Drawer>
    </div>
  );
}
