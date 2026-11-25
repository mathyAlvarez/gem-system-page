import { useId, useState } from "react";
import { Badge, Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

type CompoundModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  badge: string;
  body: string;
  hint: string;
};

export function CompoundModal({
  common,
  open: openLabel,
  title,
  subtitle,
  badge,
  body,
  hint,
}: CompoundModalProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        closeLabel={common.closeLabel}
        aria-labelledby={titleId}
      >
        <Modal.Header
          headingId={titleId}
          title={title}
          subtitle={subtitle}
          extra={<Badge>{badge}</Badge>}
        />
        <Modal.Body className="modal-stack">
          <p className="modal-copy">{body}</p>
          <p className="modal-copy">{hint}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="transparent" size="sm" onClick={() => setOpen(false)}>
            {common.cancel}
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            {common.save}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
