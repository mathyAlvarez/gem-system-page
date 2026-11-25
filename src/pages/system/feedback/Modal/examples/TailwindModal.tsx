import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";

type TailwindModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  body: string;
};

export function TailwindModal({
  common,
  open: openLabel,
  title,
  subtitle,
  body,
}: TailwindModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
        bordered={false}
        classNames={{
          root: "rounded-3xl backdrop:bg-violet-950/40 backdrop:backdrop-blur-sm",
          header: "border-0 pt-6",
          title: "text-xl",
          body: "text-base",
          footer: "border-0 pb-6",
        }}
        footer={
          <Button size="sm" onClick={() => setOpen(false)}>
            {common.done}
          </Button>
        }
      >
        {body}
      </Modal>
    </>
  );
}
