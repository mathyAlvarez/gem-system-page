import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";

type DraggableModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  body: string;
};

export function DraggableModal({
  common,
  open: openLabel,
  title,
  subtitle,
  body,
}: DraggableModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        draggable
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
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
