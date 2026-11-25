import { useState } from "react";
import { Button, Drawer, Textarea } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

type PersistentDrawerProps = {
  common: DrawerCommon;
  open: string;
  title: string;
  subtitle: string;
  label: string;
  placeholder: string;
  discard: string;
};

export function PersistentDrawer({
  common,
  open: openLabel,
  title,
  subtitle,
  label,
  placeholder,
  discard,
}: PersistentDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        size="lg"
        closeOnBackdrop={false}
        closeOnEscape={false}
        showClose={false}
        title={title}
        subtitle={subtitle}
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              {discard}
            </Button>
            <Button size="sm" onClick={() => setOpen(false)}>
              {common.save}
            </Button>
          </>
        }
      >
        <Textarea label={label} placeholder={placeholder} rows={8} />
      </Drawer>
    </>
  );
}
