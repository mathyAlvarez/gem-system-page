import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";

type PersistentModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  body: string;
  confirm: string;
};

export function PersistentModal({ common, open: openLabel, title, subtitle, body, confirm }: PersistentModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        closeOnBackdrop={false}
        closeOnEscape={false}
        showClose={false}
        title={title}
        subtitle={subtitle}
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              {common.cancel}
            </Button>
            <Button variant="danger" size="sm" onClick={() => setOpen(false)}>
              {confirm}
            </Button>
          </>
        }
      >
        {body}
      </Modal>
    </>
  );
}
