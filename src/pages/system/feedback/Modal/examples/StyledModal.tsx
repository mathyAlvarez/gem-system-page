import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-overrides.css";

type StyledModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  body: string;
};

export function StyledModal({ common, open: openLabel, title, subtitle, body }: StyledModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        className="modal-branded"
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
        footer={
          <Button variant="tertiary" size="sm" onClick={() => setOpen(false)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </Modal>
    </>
  );
}
