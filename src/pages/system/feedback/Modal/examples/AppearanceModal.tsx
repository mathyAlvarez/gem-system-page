import { useState } from "react";
import { Button, Modal, type ModalProps } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

const looks = {
  'radius="lg"': { radius: "lg" },
  rounded: { rounded: true },
  "rounded={8}": { rounded: 8 },
  'bordered={false} shadow="md"': { bordered: false, shadow: "md" },
} satisfies Record<string, Partial<ModalProps>>;

type Look = keyof typeof looks;

type AppearanceModalProps = { common: ModalCommon; title: string; body: string };

export function AppearanceModal({ common, title, body }: AppearanceModalProps) {
  const [look, setLook] = useState<Look | null>(null);

  return (
    <div className="modal-row">
      {(Object.keys(looks) as Look[]).map((key) => (
        <Button key={key} variant="secondary" size="sm" onClick={() => setLook(key)}>
          {key}
        </Button>
      ))}
      <Modal
        {...(look ? looks[look] : {})}
        open={look !== null}
        onOpenChange={(next) => {
          if (!next) setLook(null);
        }}
        title={title}
        subtitle={look ?? undefined}
        closeLabel={common.closeLabel}
        footer={
          <Button size="sm" onClick={() => setLook(null)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </Modal>
    </div>
  );
}
