import { useRef, useState } from "react";
import { Button, Checkbox, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

type InitialFocusModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  body: string;
  dontAsk: string;
  confirm: string;
};

export function InitialFocusModal({
  common,
  open: openLabel,
  title,
  subtitle,
  body,
  dontAsk,
  confirm,
}: InitialFocusModalProps) {
  const [open, setOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        {openLabel}
      </Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        size="sm"
        initialFocusRef={cancelRef}
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
        footer={
          <>
            <Button ref={cancelRef} variant="secondary" size="sm" onClick={() => setOpen(false)}>
              {common.cancel}
            </Button>
            <Button variant="danger" size="sm" onClick={() => setOpen(false)}>
              {confirm}
            </Button>
          </>
        }
      >
        <div className="modal-stack">
          <p className="modal-copy">{body}</p>
          <Checkbox label={dontAsk} />
        </div>
      </Modal>
    </>
  );
}
