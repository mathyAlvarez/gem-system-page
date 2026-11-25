import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";

type BaseModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  body: string;
  keep: string;
  discard: string;
};

export function BaseModal({
  common,
  open: openLabel,
  title,
  subtitle,
  body,
  keep,
  discard,
}: BaseModalProps) {
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
          <>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              {keep}
            </Button>
            <Button variant="danger" size="sm" onClick={() => setOpen(false)}>
              {discard}
            </Button>
          </>
        }
      >
        {body}
      </Modal>
    </>
  );
}
