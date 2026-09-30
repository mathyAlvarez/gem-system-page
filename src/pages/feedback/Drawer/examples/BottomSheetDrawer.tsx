import { useState } from "react";
import { Button, Sheet, toast } from "@gem-org/gem-system";
import { Copy, Mail, Print, Share } from "@gem-org/gem-system/icons";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

type ShareOption = "link" | "email" | "print" | "copy";

type BottomSheetDrawerProps = {
  common: DrawerCommon;
  open: string;
  title: string;
  subtitle: string;
  options: Record<ShareOption, string>;
};

const icons = {
  link: <Share size="sm" />,
  email: <Mail size="sm" />,
  print: <Print size="sm" />,
  copy: <Copy size="sm" />,
};

export function BottomSheetDrawer({ common, open: openLabel, title, subtitle, options }: BottomSheetDrawerProps) {
  const [open, setOpen] = useState(false);

  function choose(option: ShareOption) {
    setOpen(false);
    toast.success(options[option]);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Sheet
        open={open}
        onOpenChange={setOpen}
        placement="bottom"
        size="sm"
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
      >
        <div className="drawer-share">
          {(Object.keys(icons) as ShareOption[]).map((option) => (
            <Button key={option} variant="secondary" leftIcon={icons[option]} onClick={() => choose(option)}>
              {options[option]}
            </Button>
          ))}
        </div>
      </Sheet>
    </>
  );
}
