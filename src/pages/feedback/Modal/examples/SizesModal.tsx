import { useState } from "react";
import { Button, Modal, type ModalSize } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

const sizes = ["sm", "md", "lg", "xl", "full"] as const;

type SizesModalProps = { common: ModalCommon; title: string; body: string };

export function SizesModal({ common, title, body }: SizesModalProps) {
  const [size, setSize] = useState<ModalSize | null>(null);

  return (
    <div className="modal-row">
      {sizes.map((next) => (
        <Button key={next} variant="secondary" size="sm" onClick={() => setSize(next)}>
          {next}
        </Button>
      ))}
      <Modal
        open={size !== null}
        onOpenChange={(next) => {
          if (!next) setSize(null);
        }}
        size={size ?? "md"}
        title={`${title} ${size ?? "md"}`}
        subtitle={`size="${size ?? "md"}"`}
        closeLabel={common.closeLabel}
        footer={
          <Button size="sm" onClick={() => setSize(null)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </Modal>
    </div>
  );
}
