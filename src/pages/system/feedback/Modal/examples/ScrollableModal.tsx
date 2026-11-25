import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

type ScrollableModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  paragraph: string;
};

export function ScrollableModal({
  common,
  open: openLabel,
  title,
  subtitle,
  paragraph,
}: ScrollableModalProps) {
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
        footer={
          <Button size="sm" onClick={() => setOpen(false)}>
            {common.done}
          </Button>
        }
      >
        <div className="modal-scroll">
          {Array.from({ length: 12 }, (_, index) => (
            <p key={index} className="modal-copy">
              {index + 1}. {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </>
  );
}
