import { useState } from "react";
import { Button, Drawer, type DrawerSizeToken } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

const sizes = ["sm", "md", "lg", "xl", "full"] as const;

type SizesDrawerProps = { common: DrawerCommon; title: string; body: string };

export function SizesDrawer({ common, title, body }: SizesDrawerProps) {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerSizeToken>("md");

  return (
    <div className="drawer-row">
      {sizes.map((next) => (
        <Button
          key={next}
          variant="secondary"
          size="sm"
          onClick={() => {
            setSize(next);
            setOpen(true);
          }}
        >
          {next}
        </Button>
      ))}
      <Drawer
        open={open}
        onOpenChange={setOpen}
        size={size}
        title={`${title} ${size}`}
        subtitle={`size="${size}"`}
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
