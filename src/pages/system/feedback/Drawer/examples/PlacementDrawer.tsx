import { useState } from "react";
import { Button, Drawer, type DrawerPlacement } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

const placements = ["left", "right", "top", "bottom"] as const;

type PlacementDrawerProps = { common: DrawerCommon; title: string; body: string };

export function PlacementDrawer({ common, title, body }: PlacementDrawerProps) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerPlacement>("right");
  const sheet = placement === "top" || placement === "bottom";

  return (
    <div className="drawer-row">
      {placements.map((next) => (
        <Button
          key={next}
          variant="secondary"
          size="sm"
          onClick={() => {
            setPlacement(next);
            setOpen(true);
          }}
        >
          {next}
        </Button>
      ))}
      <Drawer
        open={open}
        onOpenChange={setOpen}
        placement={placement}
        size={sheet ? "sm" : "md"}
        title={title}
        subtitle={`placement="${placement}"`}
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
