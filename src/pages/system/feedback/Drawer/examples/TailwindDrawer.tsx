import { useState } from "react";
import { Button, Drawer } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";

type TailwindDrawerProps = {
  common: DrawerCommon;
  open: string;
  title: string;
  subtitle: string;
  body: string;
};

export function TailwindDrawer({
  common,
  open: openLabel,
  title,
  subtitle,
  body,
}: TailwindDrawerProps) {
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
        bordered={false}
        classNames={{
          root: "m-3 h-[calc(100%-1.5rem)] rounded-2xl backdrop:bg-violet-950/30 backdrop:backdrop-blur-sm",
          header: "border-0 pt-5",
          title: "text-lg",
          footer: "border-0 pb-5",
        }}
        footer={
          <Button size="sm" onClick={() => setOpen(false)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </Drawer>
    </>
  );
}
