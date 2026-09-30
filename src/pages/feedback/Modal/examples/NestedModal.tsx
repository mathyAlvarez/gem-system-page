import { useState } from "react";
import { Button, Modal } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";

type NestedModalProps = {
  common: ModalCommon;
  open: string;
  outerTitle: string;
  outerSubtitle: string;
  outerBody: string;
  deleteProject: string;
  innerTitle: string;
  innerSubtitle: string;
  innerBody: string;
  keep: string;
  confirm: string;
};

export function NestedModal({ common, open: openLabel, ...texts }: NestedModalProps) {
  const [outerOpen, setOuterOpen] = useState(false);
  const [innerOpen, setInnerOpen] = useState(false);

  function closeAll() {
    setInnerOpen(false);
    setOuterOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOuterOpen(true)}>{openLabel}</Button>
      <Modal
        open={outerOpen}
        onOpenChange={(next) => (next ? setOuterOpen(true) : closeAll())}
        title={texts.outerTitle}
        subtitle={texts.outerSubtitle}
        closeLabel={common.closeLabel}
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={closeAll}>
              {common.cancel}
            </Button>
            <Button variant="danger" size="sm" onClick={() => setInnerOpen(true)}>
              {texts.deleteProject}
            </Button>
          </>
        }
      >
        {texts.outerBody}
      </Modal>
      <Modal
        open={innerOpen}
        onOpenChange={setInnerOpen}
        size="sm"
        title={texts.innerTitle}
        subtitle={texts.innerSubtitle}
        closeLabel={common.closeLabel}
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setInnerOpen(false)}>
              {texts.keep}
            </Button>
            <Button variant="danger" size="sm" onClick={closeAll}>
              {texts.confirm}
            </Button>
          </>
        }
      >
        {texts.innerBody}
      </Modal>
    </>
  );
}
